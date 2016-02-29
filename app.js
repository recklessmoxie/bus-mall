var productImageData = [];
var globalClickCounter = 0;
var imageDisplayLeft = document.getElementById('imageDisplayLeft');
var imageDisplayCenter = document.getElementById('imageDisplayCenter');
var imageDisplayRight = document.getElementById('imageDisplayRight');
var plusOneDisplayedCount;

function ProductData(imageName, imageId, imagePath) {
  this.imageName = imageName;
  this.imageId = imageId;
  this.imagePath = imagePath;
  this.imageDisplayedCount = 0;
  this.totalClickCount = 0;
  productImageData.push(this);
}
// line 13 allows for all instances of ProductData to be pushed into a global array for easier access.
var bag = new ProductData('R2D2 Bag', 'bag', '<img src="img/bag.png">');
var banana = new ProductData('Banana Cutter', 'banana',
  '<img src="img/banana.png">');
var boots = new ProductData('Open Toe Boots', 'boots',
  '<img src="img/boots.png">');
var bathroom = new ProductData('Ipad Tp Holder', 'bathroom',
  '<img src="img/bathroom.png">');
var breakfast = new ProductData('Breakfast Machine', 'breakfast',
  '<img src="img/breakfast.png">');
var bubblegum = new ProductData('Meatball Bubblegum', 'bubblegum',
  '<img src="img/bubblegum.png">');
var chair = new ProductData('Chair', 'Chair', '<img src="img/chair.png">');
var cthulhu = new ProductData('Cthulhu Toy', 'cthulhu',
  '<img src="img/cthulhu.png">');
var dog = new ProductData('Dog Duckbill', 'dog', '<img src="img/dog-duck.png">');
var dragon = new ProductData('Dragon Meat', 'dragon',
  '<img src="img/dragon.png">');
var pen = new ProductData('Pen Cutlery', 'pen', '<img src="img/pen.png">');
var petSweep = new ProductData('Pet Sweep Booties', 'pet-sweep',
  '<img src="img/pet-sweep.png">');
var scissors = new ProductData('Pizza Scissors', 'scissors',
  '<img src="img/scissors.png">');
var shark = new ProductData('Shark Sleeping Bag', 'shark',
  '<img src="img/shark.png">');
var sweep = new ProductData('Sweeping Baby Clothes', 'sweep',
  '<img src="img/sweep.png">');
var tauntaun = new ProductData('Tauntaun Sleeping Bag', 'tauntaun',
  '<img src="img/tauntaun.png">');
var unicorn = new ProductData('Unicorn Meat', 'unicorn',
  '<img src="img/unicorn.png">');
var usb = new ProductData('Usb Tentacle', 'usb', '<img src="img/usb.gif">');
var waterCan = new ProductData('Water Can', 'waterCan',
  '<img src="img/water-can.png">');
var wineGlass = new ProductData('Wine Glass', 'wineGlass',
  '<img src="img/wine-glass.png">');

// **The function below is creating a random image array by shuffling and randomizing the data onto a separate array, this method eliminates the need for a comparison while loop.**//

var getRandomArrayElements = function (arr) {
  var shuffled = arr.slice(0),
    i = arr.length,
    min = i - 3,
    temp, index;

  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;

    // **The following variables allow me to pull out the image path for use in the next function.**

    var randomImageArray = (shuffled.slice(min));
    var displayImageArray = [randomImageArray[0].imagePath,
      randomImageArray[1].imagePath, randomImageArray[2].imagePath
    ];
  }

  // *// The function below is using the array produced above to display the randomly chosen images within the html document..//*
  function displayImage(arr) {
    leftImageDisplayed = imageDisplayLeft.innerHTML = arr[0];
    centerImageDisplayed = imageDisplayCenter.innerHTML = arr[1];
    rightImageDisplayed = imageDisplayRight.innerHTML = arr[2];
  }
  displayImage(displayImageArray);
  console.log();
  return displayImageArray;
}
getRandomArrayElements(productImageData);


imageDisplayLeft.addEventListener('click', leftClickHandler);


// ** The following event handler will add 1 to the count of each image displayed and will be called upon by the handler for each display orientation later.**
function userClickHandler() {
  console.log(event);
  globalClickCounter += 1;
  [leftImageDisplayed].imageDisplayedCount += 1;
  [centerImageDisplayed].imageDisplayedCount += 1;
  [rightImageDisplayed].imageDisplayedCount += 1;

}
// ** Below are the individual handlers for each image placement. Allows for display counting even if image not clicked**
function leftClickHandler(event) {
  [leftImageDisplayed].imageDisplayedCount += 1;
  [leftImageDisplayed].totalClickCount += 1;
  userClickHandler();
}