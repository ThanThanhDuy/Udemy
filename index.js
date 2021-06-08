var listCourse = document.querySelectorAll("button.item-button");
var listCourseContent = document.querySelectorAll("div.item-content");
for (let i = 0; i < listCourse.length; i++) {
  window.onload = function () {
    listCourse[0].click();
  };
  listCourse[i].onclick = function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    for (let j = 0; j < listCourseContent.length; j++) {
      if (j !== i) {
        listCourseContent[j].style.opacity = "0";
        listCourseContent[j].style.visibility = "hidden";
      } else {
        listCourseContent[j].style.opacity = "1";
        listCourseContent[j].style.visibility = "visible";

      }
    }
  };
}

//video
var box = document.getElementById("box");
var video = document.getElementById("video");
var img = document.getElementById("vimg");
var play = document.getElementById("vplay");

box.onclick = function () {
  img.style.display = "none";
  play.style.display = "none";
  video.style.display = "block";
};

//menu
var bo = true;
var menuIcon = document.getElementById("menu-icon");
var menu = document.getElementById("menu");
var menuMain = document.getElementById("menu-main");
var menuExit = document.getElementById("menu-exit");
var iconExit = document.getElementById("icon-exit");
var root = document.getElementById("root");
var menuOut = document.getElementById("menu-out");
menuIcon.onclick = function () {
  menu.style.visibility = "visible";
  menu.style.opacity = "1";
  menuMain.style.transform = "translateX(0)";
  menuExit.style.visibility = "visible";
  menuExit.style.opacity = "1";
  iconExit.style.width = "4.8rem";
  iconExit.style.height = "4.8rem";
  root.style.overflowY = "hidden";
};
menuOut.onclick = function () {
  menu.style.visibility = "hidden";
  menu.style.opacity = "0";
  menuMain.style.transform = "translateX(-280px)";
  root.style.overflowY = "scroll";
};
iconExit.onclick = function () {
  menu.style.visibility = "hidden";
  menu.style.opacity = "0";
  menuMain.style.transform = "translateX(-280px)";
  root.style.overflowY = "scroll";
};

var subItem = document.querySelectorAll("div#subitem");
var subMenu = document.querySelectorAll("div#submenu");
var subMenuOut = document.querySelectorAll("div#submenuout");

for (let i = 0; i < subItem.length; i++) {
  subItem[i].onclick = () => {
    subMenu[i].style.transform = "translateX(0px)";
  };
  subMenuOut[i].onclick = () => {
    subMenu[i].style.transform = "translateX(280px)";
  };
}

//carousel
var item = document.querySelectorAll("div.carousel-box--item");
var box = document.querySelector(".carousel-box");
console.log(box.offsetWidth);

var prev = document.getElementById("prev");
var next = document.getElementById("next");
var numVis;
var width=box.offsetWidth;
var onresize = function() {
  width = box.offsetWidth;
  console.log(width);
  if (width >= 1226) {
    numVis = 5;
  }else if(width < 1226 && width >= 991){
    numVis=4;
  }else if(width < 977 && width >= 742){
    numVis=3;
  }
  else if(width < 729 && width >= 496){
    numVis=2;
  }else{
    numVis=1;
  }
  
}
window.addEventListener("resize", onresize);
if (width >= 1226) {
  numVis = 5;
}else if(width < 1226 && width >= 991){
  numVis=4;
}else if(width < 977 && width >= 742){
  numVis=3;
}
else if(width < 729 && width >= 496){
  numVis=2;
}else{
  numVis=1;
}


var index = numVis - 1;
var indexPrev = item.length - numVis;
next.onclick = function () {
  if (index + numVis < item.length) {
    item[index + numVis].scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
    index += numVis;
    indexPrev = index - (numVis - 1);
    if(index==item.length-1){
      next.style.opacity='0'
      next.style.visibility = "hidden";
    }
    if(indexPrev!=0){
      prev.style.opacity='1'
      prev.style.visibility = "visible";
    }
  } else {
    let vis = index + (item.length - index) - 1;
    item[vis].scrollIntoView({ block: "nearest", behavior: "smooth" });
    index = vis;
    indexPrev = item.length - numVis;
    if(index==item.length-1){
      next.style.opacity='0'
      next.style.visibility = "hidden";
    }
    if(indexPrev!=0){
      prev.style.opacity='1'
      prev.style.visibility = "visible";
    }
  }
};
prev.onclick = function () {
  if (indexPrev - numVis >= 0) {
    item[indexPrev - numVis].scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
    indexPrev -= numVis;
    index = indexPrev + numVis - 1;
    if(index!=item.length-1){
      next.style.opacity='1'
      next.style.visibility = "visible";
    }
    if(indexPrev==0){
      prev.style.opacity='0'
      prev.style.visibility = "hidden";
    }
  } else {
    item[0].scrollIntoView({ block: "nearest", behavior: "smooth" });
    indexPrev = 0;
    index = indexPrev + numVis - 1;
    if(index!=item.length-1){
      next.style.opacity='1'
      next.style.visibility = "visible";
    }
    if(indexPrev==0){
      prev.style.opacity='0'
      prev.style.visibility = "hidden";
    }
  }
};
