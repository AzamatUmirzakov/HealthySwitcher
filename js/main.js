// main js file
function center(elem) {
  let parent = elem.parentElement;
  elem.style.top = parent.offsetHeight / 2 - elem.offsetHeight / 2 + "px";
  elem.style.left = parent.offsetWidth / 2 - elem.offsetWidth / 2 + "px";
}

// centering titles
function centerTitles() {
  let titles = document.querySelectorAll("h2.title-main");

  for (let title of titles) {
    center(title);
  }
}

setInterval(() => {
  centerTitles();
}, 1000);

centerTitles();
// slider

function slide () {
  rightButton.dispatchEvent(new Event('click'));
}
let leftButton = document.querySelector("button.arrow-left");
let rightButton = document.querySelector("button.arrow-right");
let slider = document.querySelector("div.header-slider-images");
let ul = slider.firstElementChild;
let val =
  slider.querySelector("li").offsetWidth;
slider.style.width = val * 2 + "px";
let position = 0;

rightButton.addEventListener("click", () => {
  if (position == -(val * (ul.querySelectorAll("li").length - 2))) {
    ul.style.marginLeft = "";
    position = 0;
    return false;
  }
  position -= parseInt(val);
  ul.style.marginLeft = position + "px";
});

// stars
document.addEventListener('mouseover', (e) => {
  let target = e.target;
  if (target.classList.contains('star')) {
    let parent = target.parentElement;
    let children = parent.children;
    for (let child of children) {
      child.classList.toggle('star-active');

      if (child == target) {
        break;
      }
    }
  }
})

document.addEventListener('mouseout', (e) => {
  let activeStars = document.querySelectorAll('.star-active');
  for (let activeStar of activeStars) {
    activeStar.classList.toggle('star-active');
  }
})

document.addEventListener('click', (e) => {
  let target = e.target;
  if (target.matches('span.star')) {
    let parent = target.parentElement;
    let children = parent.children;
    for (let child of children) {
      child.classList.remove('star-active-permanent');
    }
    for (let child of children) {
      child.classList.add('star-active-permanent');
      if (child == target) {
        break;
      }
    }
  }
})
