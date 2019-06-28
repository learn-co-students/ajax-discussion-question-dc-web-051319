const fullname = document.getElementById("fullname");
const addButton = document.querySelector(".btn-primary")
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
    console.log("CONTENT LOADED!");
    addButton.addEventListener("click", addPersonHandler);
});

function renderPerson(person) {
    //append data to nodes
};

function addPersonHandler(event) {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(person => {
            renderPerson(person.results) 
        });
};