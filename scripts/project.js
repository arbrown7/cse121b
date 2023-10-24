import { dateTester } from './dateTesterModule.js';

// Fetch user input.
// - Create a function to collect the user's input date.
// - Use event listeners to trigger the function when a user submits the form.
document.querySelector('#testDate').addEventListener('click', testDate);
document.querySelector('#clearDate').addEventListener('click', clearDate);

function testDate() {
    let day = Number(document.querySelector('#day').value);
    let month = Number(document.querySelector('#month').value);
    let year = Number(document.querySelector('#year').value);

    //dateTester(day, month, year);
    if (dateTester(day, month, year)){
        let date = formatDate(year, month, day);
        runAPI(date);
        //getAPODData(day, month, year);
    } else {
        //Enter date again
        console.log("Tested date was wrong");
        clearDate();
    }
}

function formatDate(year, month, day) {
    // Ensure the month and day have two digits (e.g., '05' instead of '5').
    const formattedMonth = String(month).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');

    // Combine the year, month, and day with '-' as the separator.
    const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;

    return formattedDate;
}

function clearDate() {
    document.querySelector('#day').value = "";
    document.querySelector('#month').value = "";
    document.querySelector('#year').value = "";
}

// function getDayBefore(dateString) {
//     const currentDate = new Date(dateString); // Convert the input date string to a Date object
//     currentDate.setDate(currentDate.getDate() - 1); // Subtract one day from the current date
//     const year = currentDate.getFullYear();
//     const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
//     const day = currentDate.getDate().toString().padStart(2, '0');
//     return `${year}-${month}-${day}`;
// }

// function getDayAfter(dateString) {
//     console.log(dateString);
//     const currentDate = new Date(dateString); // Convert the input date string to a Date object
//     console.log(`first line in getDayAfter ${currentDate}`);
//     currentDate.setDate(currentDate.getDate() + 1); // Add one day to the current date
//     console.log(currentDate);
//     const year = currentDate.getFullYear();
//     const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
//     const day = currentDate.getDate().toString().padStart(2, '0');
//     console.log(`${year}-${month}-${day}`);
//     return `${year}-${month}-${day}`;
// }

// function getAPODData(day, month, year){
//     let APODData = [];
//     let selectedDate = formatDate(year, month, day);
//     console.log(selectedDate);
//     let dayBefore = getDayBefore(selectedDate);
//     console.log(selectedDate);
//     let dayAfter = getDayAfter(selectedDate);
//     APODData.push(runAPI(dayBefore));
//     APODData.push(runAPI(selectedDate));
//     APODData.push(runAPI(dayAfter));

//     displayAPODData(APODData);
// }

// Run the API
function runAPI(selectedDate) {
    // Make an API request to fetch NASA's APOD content for the selected date.
    const apiKey = 'baKKsQ3Ca2XELNkVsnWElqij8DrhEfM7O8Vpw1cV';
    const apiEndpoint = 'https://api.nasa.gov/planetary/apod';
    const apiUrl = `${apiEndpoint}?api_key=${apiKey}&date=${selectedDate}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("apodImage").src = data.url;
            document.getElementById("apodDate").textContent = `Date: ${selectedDate}`;
            document.getElementById("apodExplanation").textContent = data.explanation;
            // const newEntry = {
            //     date: data.date,
            //     title: data.title,
            //     explanation: data.explanation,
            //     imageUrl: data.url,
            // };
            // return newEntry;
        })
        .catch(error => {
            console.error("Error fetching APOD content:", error);
            throw error; // Rethrow the error to handle it in the calling code
        });
}



// function displayAPODData(apodData) {
//     const container = document.getElementById("apodDataContainer");

//     // Clear the container to avoid duplicates
//     container.innerHTML = "";
  
//     apodData.forEach((entry) => {
//       const apodElement = document.createElement("div");
//       apodElement.classList.add("apod-entry"); // You can define CSS classes to style the entries
  
//       const dateElement = document.createElement("h3");
//       dateElement.textContent = "Date: " + entry.date;
  
//       const titleElement = document.createElement("h2");
//       titleElement.textContent = entry.title;
  
//       const explanationElement = document.createElement("p");
//       explanationElement.textContent = entry.explanation;
  
//       const imageElement = document.createElement("img");
//       imageElement.src = entry.imageUrl;
//       imageElement.alt = entry.title;
  
//       // Append elements to the container
//       apodElement.appendChild(dateElement);
//       apodElement.appendChild(titleElement);
//       apodElement.appendChild(explanationElement);
//       apodElement.appendChild(imageElement);
  
//       container.appendChild(apodElement);
//     });
   
// }


// Display today's image as a placeholder before the user inputs a date
document.addEventListener("DOMContentLoaded", function () {
    // Get the current date in YYYY-MM-DD format.
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based.
    const day = today.getDate().toString().padStart(2, '0');
    // Fetch and display today's APOD image.
    let date = formatDate(year, month, day);
    runAPI(date);
});
// Step 7: Handle errors.
// - Implement error handling to manage cases where the API request fails or no horoscope data is returned.

// Step 9: Apply CSS styling (optional).
// - Style your webpage to make it visually appealing and user-friendly.

// Step 10: Test and debug.
// - Thoroughly test your application with different birthdates and zodiac signs.
// - Debug any issues that arise during testing.

// Step 11: Optimize for performance.
// - Ensure your application is responsive and efficient, even under different network conditions.

// Step 12: Deploy the project.
// - Host your website on a platform like GitHub Pages or your preferred hosting service.

// Step 13: Document and share your project.
// - Write clear documentation, including how to use the application.
// - Share your project with others and gather feedback for further improvements.
