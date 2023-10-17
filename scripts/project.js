const dateTester = (day, month, year) => {
    const birthdate = new Date(year, month, day);
    if(!validDate(birthdate) && dateExists(birthdate, day, month, year)) {
        console.log("You have a great birthday!")
        return true;
    } else {
        console.log("The date you have entered is incorrect.")
        return false;
    }
};

const validDate = (date) => {
    //expecting false
    return isNaN(date);
};

const dateExists = (date, day, month, year) => {
    if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
        return true;
    } else {
        return false;
    }
};

function testDate() {
    let day = Number(document.querySelector('#birth_day').value);
    let month = Number(document.querySelector('#birth_month').value) - 1;
    let year = Number(document.querySelector('#birth_year').value);

    dateTester(day, month, year);
}

document.querySelector('#testDate').addEventListener('click', testDate);
// Step 3: Fetch user input.
// - Create a function to collect the user's birthdate and zodiac sign selection.
// - Use event listeners to trigger the function when a user submits the form.

// Step 4: Validate user input (optional).
// - Implement validation to ensure the user provides a valid birthdate and zodiac sign.

// Step 5: Call the Aztro API.
// - Use the Fetch API to send a POST request to the Aztro API.
// - Include the user's zodiac sign and the desired day (e.g., "today") in the request body.
// - Handle the API response, which will contain horoscope and astrology insights.

// Step 6: Display the horoscope.
// - Extract and format the horoscope data from the API response.
// - Update the DOM to display the daily horoscope on the webpage.

// Step 7: Handle errors.
// - Implement error handling to manage cases where the API request fails or no horoscope data is returned.

// Step 8: Add user-friendly features (optional).
// - Allow users to save their favorite horoscopes.
// - Enable them to view previous horoscopes and astrological insights.

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
