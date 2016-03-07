'use strict';

var globalClickCounter = 0;
var randomImage = [];

function ProductData(imageName, imageId, imagePath) {
  this.imageName = imageName;
  this.imageId = imageId;
  this.imagePath = imagePath;
  this.clickCount = 0;
  this.displayLeft = 0;
  this.displayCenter = 0;
  this.displayRight = 0;
};

var allImageData = [
  new ProductData('R2D2 Bag', 'bag', '<img src="img/bag.png">'),
  new ProductData('Banana Cutter', 'banana',
    '<img src="img/banana.png">'),
  new ProductData('Open Toe Boots', 'boots',
    '<img src="img/boots.png">'),
  new ProductData('Ipad Tp Holder', 'bathroom',
    '<img src="img/bathroom.png">'),
  new ProductData('Breakfast Machine', 'breakfast',
    '<img src="img/breakfast.png">'),
  new ProductData('Meatball Bubblegum', 'bubblegum',
    '<img src="img/bubblegum.png">'),
  new ProductData('Chair', 'Chair', '<img src="img/chair.png">'),
  new ProductData('Cthulhu Toy', 'cthulhu',
    '<img src="img/cthulhu.png">'),
  new ProductData('Dog Duckbill', 'dog', '<img src="img/dog-duck.png">'),
  new ProductData('Dragon Meat', 'dragon',
    '<img src="img/dragon.png">'),
  new ProductData('Pen Cutlery', 'pen', '<img src="img/pen.png">'),
  new ProductData('Pet Sweep Booties', 'pet-sweep',
    '<img src="img/pet-sweep.png">'),
  new ProductData('Pizza Scissors', 'scissors',
    '<img src="img/scissors.png">'),
  new ProductData('Shark Sleeping Bag', 'shark',
    '<img src="img/shark.png">'),
  new ProductData('Sweeping Baby Clothes', 'sweep',
    '<img src="img/sweep.png">'),
  new ProductData('Tauntaun Sleeping Bag', 'tauntaun',
    '<img src="img/tauntaun.png">'),
  new ProductData('Unicorn Meat', 'unicorn',
    '<img src="img/unicorn.png">'),
  new ProductData('Usb Tentacle', 'usb', '<img src="img/usb.gif">'),
  new ProductData('Water Can', 'waterCan',
    '<img src="img/water-can.png">'),
  new ProductData('Wine Glass', 'wineGlass',
    '<img src="img/wine-glass.png">')
];

var displayLeft = document.getElementById('displayLeft');
var displayCenter = document.getElementById('displayCenter');
var displayRight = document.getElementById('displayRight');
var leftImage;
var centerImage;
var rightImage;

function getAndDisplayRandomImage(arr) {
  var shuffled = arr.slice(0),
    i = arr.length,
    min = i - 3,
    temp, index;

  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;

    randomImage = (shuffled.slice(min));
  }

  leftImage = displayLeft.innerHTML = randomImage[0].imagePath;
  centerImage = displayCenter.innerHTML = randomImage[1].imagePath;
  rightImage = displayRight.innerHTML = randomImage[2].imagePath;
  console.log(randomImage);
};

displayLeft.addEventListener('click', function () {
  userClickHandler(randomImage[0])
});
displayCenter.addEventListener('click', function () {
  userClickHandler(randomImage[1])
});
displayRight.addEventListener('click', function () {
  userClickHandler(randomImage[2])
});

function userClickHandler(event) {
  globalClickCounter++
  console.log(event);
  event.clickCount++;
  randomImage[0].displayLeft++;
  randomImage[1].displayCenter++;
  randomImage[2].displayRight++;
  getAndDisplayRandomImage(allImageData);
};

getAndDisplayRandomImage(allImageData);

function showResultsButton() {
  if (globalClickCounter < ProductImageData.length) {
    document.getElementById('view results').style.visibility = 'hidden';

  } else {

    document.getElementById('view results').style.visibility = 'visible';
  }
}

function showMoreVotesButton() {
  if (globalClickCounter < ProductData.length) {
    document.getElementById('more votes').style.visibility = 'hidden';

  } else {

    document.getElementById('more votes').style.visibility = 'visible';
  }
}
