/* W05: Programming Tasks */

/* Declare and initialize global variables */
//Declare a const variable named templesElement that references the HTML div element that eventually will be populated with temple data.
const templesElement = document.getElementById("temples");
//Declare a global empty array variable to store a list of temples named templeList.
let templeList = [];

/* async displayTemples Function */
//This function will build a temple display "card" for each item in the temple list passed to the function.
//Declare a function expression using const named displayTemples that uses an arrow function to accept a list of temples as an array argument.
const displayTemples = (temples) => {
    //Process each temple in the temple array using a forEach
    temples.forEach(temple => {
        //Create an HTML <article> element
        let newArticle = document.createElement("article");
        //Create an HTML <h3> element and add the temple's templeName property to this new element.
        let newH3 = document.createElement("h3");
        newH3.textContent = temple.templeName;
        //Create an HTML <img> element 
        let newImg = document.createElement("img");
        //add the temple's imageUrl property to the src attribute and the temple's location property to the alt attribute.
        newImg.src = temple.imageUrl;
        newImg.alt = temple.location;
        //Append the <h3> element and the <img> element to the <article> element as children.
        newArticle.appendChild(newH3);
        newArticle.appendChild(newImg);
        //Append the <article> element to the global templesElement variable declared in Step 2.
        templesElement.appendChild(newArticle);
    });
}

/* async getTemples Function using fetch()*/
//Create another function expression called getTemples. Make it an async anonymous, arrow function.
const getTemples = async () => {
    //In the function, declare a const variable named response that awaits the built-in fetch method calling the temple data
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        //Convert your fetch response into a JavaScript object (.json) 
        const data = await response.json();
        //assign the result to the templeList global array variable
        templeList = data;
        //call the displayTemples function and passes it the list of temples 
        displayTemples(templeList);
    }
}

/* reset Function */
const reset = () => {
    while(templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    }
}

/* sortBy Function */
const sortBy = (temples) => {
    //first call the reset function to clear the output
    reset();
    //Define a variable named filter that obtains the value of the HTML element with the ID of sortBy
    var filter = document.getElementById("sortBy").value;
    //Use a switch statement that uses the filter value as the selector responding to four (4) cases
    switch(filter) {
        //"utah": filter for temples where the location contains "Utah" as a string
        case "utah":
            var filteredArray = temples.filter(function(temple) {
                return temple.location.includes("Utah");
            });
            displayTemples(filteredArray);
            break;
        //"notutah": filter for temples where the location does not contain "Utah" as a string.
        case "notutah":
            var filteredArray = temples.filter(function(temple) {
                return !temple.location.includes("Utah");
            });
            displayTemples(filteredArray);
            break;
        //"older": filter for temples where the dedicated date is before 1950. (compare versus new Date(1950, 0, 1))
        case "older":
            var targetDate = new Date(1950, 0, 1);
            var filteredArray = temples.filter(function(temple) {
                var dedicatedDate = getDate(temple.dedicated);
                return dedicatedDate < targetDate;
            });
            displayTemples(filteredArray);
            break;
        //"all": no filter. Just use temples as the argument
        case "all":
            displayTemples(temples);
            break;
    }

}

/*Get Date Function*/
function monthNameToNumber(monthName) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames.indexOf(monthName);
}
function getDate(date) {
    const dateParts = date.split(', '); // Split the date string into parts
    const year = parseInt(dateParts[0]);
    const month = monthNameToNumber(dateParts[1]); // Convert month name to number
    const day = parseInt(dateParts[2]);
    const improvedDate = new Date(year, month, day);
    return improvedDate;
}

getTemples();

/* Event Listener */
//Add a change event listener to the HTML element with an ID of sortBy
//call the sortBy function and sends a arrow function result with the templeList as the argument
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});