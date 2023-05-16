const weight = document.querySelector("#weight")
const height = document.querySelector("#height")
const resInfo = document.querySelector(".resInfo")
const calBtn = document.querySelector(".calBtn")
const clrBtn = document.querySelector(".clrBtn")

let bmi

function bmiCalculation(){
    // convert height to meters
    bmi = weight.value / (height.value/100) ** 2  
    if(bmi < 18.5){
        resInfo.textContent = `Hello, your BMI is ${bmi.toFixed(1)} and you are underweight, please try and add weight`
        resInfo.style.color = "#004900"
    }else if(bmi <= 24.9){
        resInfo.textContent = `Hello, your BMI is ${bmi.toFixed(1)} Congratulation! you have a healthy weight`
        resInfo.style.color = "#004900"
    }else if(bmi <=29.9){
        resInfo.textContent = `Hello, your BMI is ${bmi.toFixed(1)} and you are overweight, please try exercising and eat healthy to loose weight`
        resInfo.style.color = "#004900"
    }else if(bmi >=30.0){
        resInfo.textContent = `Hello your BMI is ${bmi.toFixed(1)} Please visit a doctor for an advice because you are actually obese`
        resInfo.style.color = "#004900"
    }else{
        resInfo.textContent = "Invalid values!!!"
        resInfo.style.color = "#7F0B07"
    }

}

function clear(){
    weight.value = ""
    height.value = ""
    resInfo.textContent = ""
}

calBtn.onclick = bmiCalculation
clrBtn.onclick = clear