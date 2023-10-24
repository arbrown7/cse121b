// Fetch user input.
// - Create a function to collect the user's birthdate.
// - Use event listeners to trigger the function when a user submits the form.
document.querySelector('#testDate').addEventListener('click', testDate);

function testDate() {
    let day = Number(document.querySelector('#day').value);
    let month = Number(document.querySelector('#month').value);
    let year = Number(document.querySelector('#year').value);

    //dateTester(day, month, year);
    if (dateTester(day, month, year)){
        let date = formatDate(year, month - 1, day);
        runAPI(date);
    } else {
        //Enter date again
        console.log("Tested date was wrong");
        document.querySelector('#day').value = "";
        document.querySelector('#month').value = "";
        document.querySelector('#year').value = "";
    }
}

// Validate user input
// - Implement validation to ensure the user provides a valid date.

const dateTester = (day, month, year) => {
    month -= 1;
    const selectedDate = new Date(year, month, day);
    const currentDate = new Date();
    if(isNaN(selectedDate)){
        console.log("Date is not a number");
        return false;
    } else if (selectedDate.getFullYear() !== year || selectedDate.getMonth() !== month || selectedDate.getDate() !== day){
        console.log("Date does not exist");
        return false;
    } else if (selectedDate > currentDate){
        console.log("Date hasn't happened yet!");
        return false;
    } else {
        console.log("Date is valid.");
        return true;
    }
};

function formatDate(year, month, day) {
    // Ensure the month and day have two digits (e.g., '05' instead of '5').
    const formattedMonth = String(month).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');

    // Combine the year, month, and day with '-' as the separator.
    const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;

    return formattedDate;
}


function runAPI(selectedDate) {
    // Make an API request to fetch NASA's APOD content for the selected date.
    // You would need to replace 'API_KEY' and 'API_ENDPOINT' with actual values.
    const apiKey = 'baKKsQ3Ca2XELNkVsnWElqij8DrhEfM7O8Vpw1cV';
    const apiEndpoint = 'https://api.nasa.gov/planetary/apod';
    const apiUrl = `${apiEndpoint}?api_key=${apiKey}&date=${selectedDate}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Display APOD content on the page, e.g., image, video, explanation, title.
            document.getElementById("apodContent").innerHTML = `
                <h2>${data.title}</h2>
                <p>Date: ${selectedDate}</p>
                <img src="${data.url}" alt="${data.title}">
                <p>${data.explanation}</p>
            `;
        })
        .catch(error => {
            console.error("Error fetching APOD content:", error);
        });
}
  
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
