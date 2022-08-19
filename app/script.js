// Defining variables
let totalSlides;
let slidePosition = 0;

const imageHolder = document.getElementById("image");
const descriptionHolder = document.getElementById("description");

let images = [];
let descriptions = [];


fetch("./app/data.json")

.then((response)=>{
    return response.json();
  })

.then((data)=>{
    // console.log(data.length);
    totalSlides = data.length; // defines 'totalSlides' from no. of elements in the JSON file

    // sets the first circle image and description...
    imageHolder.setAttribute('style', 'background-image: url(' + data[0].image + ');');
    descriptionHolder.innerHTML = data[0].description;

    // adds values to the arrays 'images' and 'description' using data from the fetched JSON file
    for (var i = 0; i < data.length; i++) {
        images.push(data[i].image);
        descriptions.push(data[i].description);
    }

    console.log(images);
    console.log(descriptions);
})


function prev() {
    if(slidePosition === 0) {
        slidePosition = (totalSlides - 1); //go back to the last slide of the carousel if at the beginning
    }
    else slidePosition--; //move back by one slide

    updateSlides();
};

function next() {
    if(slidePosition === (totalSlides - 1)) {
        slidePosition = 0; //go back to the beginning of the carousel if reached the end
    }
    else slidePosition++; //move along by one slide

    updateSlides()
};

function updateSlides() {
    // sets the updated circle image and description from the corresponding arrays
    imageHolder.setAttribute('style', 'background-image: url(' + images[slidePosition] + ');');
    descriptionHolder.innerHTML = descriptions[slidePosition];

    // console.log(images)
};