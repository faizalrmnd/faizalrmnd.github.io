// o work out your BMI:
//
// divide your weight in kilograms (kg) by your height in metres (m)
// then divide the answer by your height again to get your BMI
// For example:
//
// if you weigh 70kg and you're 1.75m tall, divide 70 by 1.75 – the answer is 40
// then divide 40 by 1.75 – the answer is 22.9
// your BMI is 22.9kg/m2

function calculate() {
  var weight = document.getElementById("berat").value;
  var height = document.getElementById("tinggi").value;

  var user_weight = parseInt(weight);
  var user_height = parseInt(height);

  var bmi = bmicalculator(user_weight, user_height);
  var hasil = bmihasil(user_weight, user_height);

  // document.getElementById("userbmi").value = bmicalculator(user_weight, user_height);
  // document.getElementById("userresult").value = bmihasil(user_weight, user_height);

  swal({
    background : "rgba(0, 0, 0, 0.5)",
    title : `<span style="color:#ffffff">${'____' +'\n'+'\n' +'\n'+'<small>Your Body Mass Index :</small>' +'\n' +'\n' +bmi +'\n'+'\n'+'\n' +'<small>Your Category :</small>'+'\n'+'\n' +hasil +'\n' +'\n' + '____' +'\n'+'\n'}<span> `,
    showConfirmButton : false
    })
}

function bmicalculator(user_weight, user_height) {
  var bmi = (user_weight / (user_height/100)) / (user_height/100)
  var factor = Math.pow(10, 1);
  return Math.round(bmi * factor) / factor;
}

function bmihasil(user_weight, user_height) {
  if (bmicalculator(user_weight, user_height) < 18.5) {
    return 'Underweight'
  } else if (bmicalculator(user_weight, user_height) >= 18.5 && bmicalculator(user_weight, user_height) < 25) {
    return 'Normal weight'
  } else if (bmicalculator(user_weight, user_height) >= 25 && bmicalculator(user_weight, user_height) < 30) {
    return 'Overweight'
  } else if (bmicalculator(user_weight, user_height) >= 30) {
    return 'Obesity'
  }
}
