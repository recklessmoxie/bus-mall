var productImageData = [];
var globalClickCounter = 0;
var imageDisplayLeft = document.getElementById('imageDisplayLeft');
var imageDisplayCenter = document.getElementById('imageDisplayCenter');
var imageDisplayRight = document.getElementById('imageDisplayRight');


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


function getRandomArrayElements(arr) {
  var shuffled = arr.slice(0),
    i = arr.length,
    min = i - 3,
    temp, index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
    var randomImageArray = (shuffled.slice(min));
    var displayProductArray = [randomImageArray[0].imagePath,
      randomImageArray[1].imagePath, randomImageArray[2].imagePath
    ];
  }

  function displayProduct(arr) {
    displayedProductLeft = imageDisplayLeft.innerHTML = arr[0];
    displayedProductCenter = imageDisplayCenter.innerHTML = arr[1];
    displayedProductRight = imageDisplayRight.innerHTML = arr[2];
    console.log(displayProductArray);
  }
  displayProduct(displayProductArray);
}
getRandomArrayElements(productImageData);

// function pageDisplay() {
//   var image1 = document.getElementById('pic1');
//   image1.src = productImageData[0].imagePath;
//   document.body.appendChild(image1);
//
//   var image2 = document.getElementById('pic2');
//   image2.src = productImageData[1].imagePath;
//   document.body.appendChild(image2);
//
//   var image3 = document.getElementById('pic3');
//   image3.src = productImageData[2].imagePath;
//   document.body.appendChild(image3);
// }
// pageDisplay(productImageData);
//
// // document.addEventListener('DOMContentLoaded', function(event) {
// //   document.getElementById('pic1').addEventListener('click', displayNewImagesOnClick);
// //   document.getElementById('pic2').addEventListener('click', displayNewImagesOnClick);
// //   document.getElementById('pic3').addEventListener('click', displayNewImagesOnClick);
// //
// //   function displayNewImagesOnClick() {
// //
// //   }
// // });
//
//
//
// // function newImageOnClick () {
// //   image1.addEventListener