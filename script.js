const hamburger = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".sliding")
const calcButton = document.getElementById("calculate")
const clearButton = document.getElementById("clear")





hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  mobileMenu.classList.toggle("visible")
})

calcButton.addEventListener('click', calculateBMI)

function calculateBMI(){
    let age = document.getElementById('age').value,
    height = document.getElementById('cm').value,
    weight = document.getElementById('kg').value,
    gender = document.querySelector('#bmi-si input[name = "gender"]:checked').value;
  console.log(age, height, weight, gender)
}