//find the form element on the page
const formElement = document.querySelector("form");

formElement.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const inputElement = document.querySelector("input");
    const task = inputElement.value;

});

//trying to figure out some error handling for form submissions.  What should my other
//JS file linking to the Contact page be called?  What's best practice?  app.js?

    //if(task !== ""){  
    //console.log(task);
    //} else {
      //pop a message that says "Please complete the form before submitting"?
    //}


//Adding a pop-up modal (on page load, or for images, etc)


//Making mobile hamburger menu functional

const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburgerMenu");
const open = document.querySelector(".fa-solid.fa.bars");
const close = document.querySelector(".fa-solid.fa-xmark"); 

hamburger.addEventListener("click", function() {
  // Open menu
  if (!menu.classList.add("showMenu")) {
    menu.classList.add("showMenu");
    open.style.display = "none";
    close.style.display = "block";
    close.style.fontSize = "2rem";
    close.style.paddingTop = "10px";
    menu.style.display = "block";
  }
  // Close menu
  else {
    menu.classList.remove("showMenu");
    open.style.display = "block";
    close.style.display = "none";
    menu.style.display = "flex";
  }
});

// const navUl = document.querySelector("nav.ul");
// let clicked = false;

// const hamburger = document.querySelector(".hamburger-label"); 
// hamburger.addEventListener("click", function(){
//     if (clicked===false){
//       navUl.style.display="block"
//     }
// });



//at say 960px screen sizes and smaller, the hamburger menu should appear per media query, and the nav links should disappear and flex-direction: column when you click on the hamburger menu.  What do I need to use JS for to make them more "functional" than they are now, since they currently link to the correct pages?  Is it not possible to do that within a hamburger menu using HTML?