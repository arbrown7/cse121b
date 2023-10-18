// Fetch user input.
// - Create a function to collect the user's birthdate.
// - Use event listeners to trigger the function when a user submits the form.
document.querySelector('#testDate').addEventListener('click', testDate);

function testDate() {
    let day = Number(document.querySelector('#birth_day').value);
    let month = Number(document.querySelector('#birth_month').value);
    let year = Number(document.querySelector('#birth_year').value);

    //dateTester(day, month, year);
    if (dateTester(day, month, year)){
        document.querySelector('#calculated_sign').value = calculateZodiacSign(day, month); 
    } else {
        //Enter date again
        console.log("Tested date was wrong");
        document.querySelector('#birth_day').value = "";
        document.querySelector('#birth_month').value = "";
        document.querySelector('#birth_year').value = "";
    }
}

// Validate user input (optional).
// - Implement validation to ensure the user provides a valid birthdate and zodiac sign.

const dateTester = (day, month, year) => {
    month -= 1;
    const birthdate = new Date(year, month, day);
    const currentDate = new Date();
    if(isNaN(birthdate)){
        console.log("Date is not a number");
        return false;
    } else if (birthdate.getFullYear() !== year || birthdate.getMonth() !== month || birthdate.getDate() !== day){
        console.log("Date does not exist");
        return false;
    } else if (birthdate > currentDate){
        console.log("Birthdate hasn't happened yet!");
        return false;
    } else {
        console.log("Date is valid.");
        return true;
    }
};

function calculateZodiacSign(day, month) {
    // console.log(month);
    // console.log(day);
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return 'Aries';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return 'Taurus';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      return 'Gemini';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      return 'Cancer';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return 'Leo';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return 'Virgo';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      return 'Libra';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      return 'Scorpio';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return 'Sagittarius';
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      return 'Capricorn';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      return 'Aquarius';
    } else {
      return 'Pisces';
    }
}

// Step 5: Call the Aztro API.
// - Use the Fetch API to send a POST request to the Aztro API.
// - Include the user's zodiac sign and the desired day (e.g., "today") in the request body.
// - Handle the API response, which will contain horoscope and astrology insights.

// Step 6: Display the horoscope.
// - Extract and format the horoscope data from the API response.
// - Update the DOM to display the daily horoscope on the webpage.

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
