/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : 'Autumn Brown',
    photo : 'images/DSC06116.JPG',
    favoriteFoods : [
        'acai bowls',
        'pasta',
        'muffins',
        'pizza',
        'cereal'
    ],
    hobbies : [
        'cross stitch',
        'painting',
        'sewing',
        'reading',
        'creating'
    ],
    placesLived : [],

};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place : 'New Hampshire',
        length : '18 years'
    }
);
myProfile.placesLived.push(
    {
        place : 'Utah',
        length : '5 years'
    }
);
myProfile.placesLived.push(
    {
        place : 'Tahiti',
        length : '1 year'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let newLi = document.createElement('li');
    newLi.textContent = food;
    document.querySelector('#favorite-foods').appendChild(newLi);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let newLi = document.createElement('li');
    newLi.textContent = hobby;
    document.querySelector('#hobbies').appendChild(newLi);
});

/* Places Lived DataList */
const dlElement = document.getElementById('places-lived');
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    dlElement.appendChild(dt);
    dlElement.appendChild(dd);
});

