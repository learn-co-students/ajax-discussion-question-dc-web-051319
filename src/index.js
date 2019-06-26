const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  let addPerson = document.getElementById('add-person')
  addPerson.addEventListener('click', api)
});

function api() {
  fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( json => {
      let results = json.results[0]
      
      // name 
      let name = results.name
      document.getElementById('fullname').innerText = `${name.title } ${name.first } ${name.last}`
      
      // email 
      document.getElementById('email').innerText = results.email

      // location
      let location = results.location
      document.getElementById('street').innerText = location.street
      document.getElementById('city').innerText = location.city
      document.getElementById('state').innerText = location.state
      document.getElementById('postcode').innerText = location.postcode

      // phone / cell
      document.getElementById('phone').innerText = results.phone
      document.getElementById('cell').innerText = results.cell

      // DOB
      document.getElementById('date_of_birth').innerText = results.dob.date

      // picture 
      document.getElementById('profile_picture').src = results.picture.medium
      console.log(results)
    })
}


