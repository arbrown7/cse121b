/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Autumn Brown';
let currentYear = 2023;
let profilePicture = 'images/DSC06116.JPG';

/* Step 3 - Element Variables */
const nameElement =  document.getElementById('name');
const foodElement =  document.getElementById('food');
const yearElement =  document.querySelector('#year');
var parentElement = document.getElementById('home');
const imageElement = parentElement.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ['Smoothie Bowls', 'Pizza', 'Cereal', 'Taco Soup', 'Baked Potatoes', 'Chicken Tenders'];
foodElement.innerHTML = favoriteFoods;
let newFood = 'Pasta';
favoriteFoods.push(newFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;