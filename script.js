const hamburger = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".sliding")
const calcButton = document.getElementById("calculate")
const clearButton = document.getElementById("clear")
const bmiOutput = document.getElementById("bmi-output")




hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  mobileMenu.classList.toggle("visible")
})

calcButton.addEventListener('click', performBMIcalc)
clearButton.addEventListener('click', clearCalc)

function clearElement(element){
  while (element.firstChild){
    element.removeChild(element.firstChild)
  }
}

function clearCalc(){
  let reset = document.getElementById('BMI-form').reset()
  clearElement(bmiOutput)
}

function performBMIcalc(){
  let BMIInfo = getUserInfo()
  if(BMIInfo) printBMIResult(BMIInfo)
}


function getUserInfo(){
  let status
  let age = document.getElementById('age').value,
  height = document.getElementById('cm').value,
  weight = document.getElementById('kg').value,
  gender = document.querySelector('#bmi-si input[name = "gender"]:checked').value;
  

  status = checkInputStatus([age, height, weight])
  
  if(status == true){
    return calculateBMI({
      gender,
      age,
      height: parseFloat(height) / 100,
      weight: parseFloat(weight)
    })
  } else{
    alert('please correctly fill all the fields')
  }
}

function checkInputStatus(inputs){
  for(let i = 0; i < inputs.length; i++){
      if(inputs[i].trim() === "" || isNaN(inputs[i]))
      return false;
  }
  return true;
}

function calculateBMI(values){
  let BMI = (values.weight / Math.pow(values.height, 2)).toFixed(2);
  return{gender: values.gender, BMI} 
}

function printBMIResult(BMIInfo){
  document.getElementById('bmi-value').innerHTML = `${BMIInfo.BMI} kg/m<sup>2</sup>`;

  let bmiCategory;
  if(BMIInfo.BMI < 16.5){
      bmiCategory = "Severly Underweight"
  } else if(BMIInfo.BMI >= 16.5 && BMIInfo.BMI <= 18.4){
      bmiCategory = "Underweight"
  } else if(BMIInfo.BMI >= 18.5 && BMIInfo.BMI <= 24.9){
      bmiCategory = "Normal Weight"
  } else if(BMIInfo.BMI >= 25 && BMIInfo.BMI <= 30){
      bmiCategory = "Overweight"
  } else{
      bmiCategory = "Obese"
  }

  document.getElementById('bmi-category').innerHTML = `${bmiCategory}`;
  document.getElementById('bmi-gender').innerHTML = BMIInfo.gender;
}