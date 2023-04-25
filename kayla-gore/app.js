window.onscroll = function () {
  var className = "addShadow";
  var scrollTrigger = 10;

  if (window.scrollY >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }

  var about = document.getElementById("about").offsetTop - 100;

  var resume = document.getElementById("resume").offsetTop - 100;
  // let resume = element.offsetTop;

  var project = document.getElementById("projects").offsetTop - 100;

  var contact = document.getElementById("contact").offsetTop - 100;

  var footer = document.getElementById("footer").offsetTop - 100;

  if (window.scrollY > about && window.scrollY < resume) {
    document.getElementById("change").textContent = "Hello";
  } else if (window.scrollY > resume && window.scrollY < project) {
    document.getElementById("change").textContent = "Resume";
  } else if (window.scrollY > project && window.scrollY < contact) {
    document.getElementById("change").textContent = "Projects";
  } else if (window.scrollY > contact && window.scrollY < footer) {
    document.getElementById("change").textContent = "Contact";
  } else {
    // document.getElementById("change").textContent = "Hello";
  }
};
