let heightInput = document.querySelector(".height");
let weightInput = document.querySelector(".weight");
let calculateButton = document.querySelector(".calculate");
let result = document.querySelector(".result");
let statement = document.querySelector(".result-statement");
let BMI, height, weight;


calculateButton.addEventListener("click", ()=>{
    height = heightInput.value;
    weight = weightInput.value;
    // BMI = weight/(height*height); 

    BMI = (weight / Math.pow(height/100, 2)).toFixed(1)
    result.innerText = BMI;


    if(BMI < 18.5){
        statement.innerText = "You are underweight😒";

    }else if((BMI > 18.5) && (BMI <= 24.9)){
        statement.innerText = "healthy🐎";

    }else if((BMI >= 25) && (BMI <= 29.9 )){
        statement.innerText = "You are overweight😩";
    }else{
        statement.innerText = "You are obese😢";
    }
});
let nothing=document.getElementById("screen1")
let remove=document.getElementById("screen2")
let del=()=>{
    nothing.value='';
    remove.value='';
    statement.innerHTML = '';
    result.innerText ="";
}




