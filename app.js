'strict';

function PicChanger(picName, picPath) {
  this.picName = picName;
  this.picPath = picPath;
  this.timesShown = [];
  this.timesClicked = [];
}

var dogDuck = new PicChanger('dogDuck');
var dogPic = [];

var boots = new PicChanger('boots');
var bootsPic = [];

var chair = new PicChanger('chair');
var chairPic = [];


PicChanger();
