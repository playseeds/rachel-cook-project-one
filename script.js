//find the form element on the page
const formElement = document.querySelector("form");

formElement.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const inputElement = document.querySelector("input");
    const task = inputElement.value;

    //if(task !== ""){  
    //console.log(task);
    //} else {
      //console.log("they didn't write anything")
    //}