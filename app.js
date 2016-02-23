'strict';

function PictureObject(picName, picPath){
  this.picName = picName;
  this.picPath = picPath;
  this.timesShown = 0;
  this.timesClicked = 0;
}


var dog = new PictureObject('dog', 'img/dog-duck.jpg');
var boots = new PictureObject('boots', 'img/boots.jpg');
var chair = new PictureObject('chair', 'img/chair.jpg');

var objectArray = [dog, boots, chair];

  function displayImg(picPath){
    var newImage = document.createElement('img');
    newImage.src = picPath
    document.body.appendChild(newImage)
}

displayImg(dog.picPath);
displayImg(chair.picPath);
displayImg(boots.picPath);
//
//   function randomPic() {
//   var randomPic1 = Math.floor(Math.random() * pics.length);
//   dogEl.textContent = pics[randomPic1];
//   var randomPic2 = Math.floor(Math.random() * pics.length);
//   bootsEl.textContent = pics[randomPic2];
//   var randomPic3 = Math.floor(Math.random() * pics.length);
//   chairEl.textContent = pics[randomPic3];
// }


// dogEl.addEventListener('click','dblclick', randomPic, true);
