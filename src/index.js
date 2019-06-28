const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  fetchUser();
  document.querySelector('.btn').addEventListener('click', fetchUser)
});


const USER_URL = "https://randomuser.me/api/"

const getAllTheThings = () => {
  
},

fetchUser = () => {
  fetch(USER_URL)
  .then(resp => resp.json())
  .then(data => {
    renderUser(data.results[0])
  })
},

renderUser = (user) => {
  const viewPicture = document.querySelector('#profile_picture'),
    viewName = document.querySelector('#fullname'),
    viewEmail = document.querySelector('#email'),
    viewStreet = document.querySelector('#street'),
    viewCity = document.querySelector('#city'),
    viewState = document.querySelector('#state'),
    viewPostcode = document.querySelector('#postcode'),
    viewPhone = document.querySelector('#phone'),
    viewCell = document.querySelector('#cell'),
    viewDob = document.querySelector('#date_of_birth')

  const picture = user.picture.medium,
    name = `${user.name.title}. ${user.name.first} ${user.name.last}`,
    email = user.email,
    street = user.location.street,
    city = user.location.city,
    state = user.location.state,
    postcode = user.location.state,
    phone = user.phone,
    cell = user.cell,
    dob = user.dob.date

  viewPicture.src = picture
  viewName.innerText = name
  viewEmail.innerText = email
  viewStreet.innerText = street
  viewCity.innerText = city
  viewState.innerText = state
  viewPostcode.innerText = postcode
  viewPhone.innerText = phone
  viewCell.innerText = cell
  viewDob.innerText = dob
}