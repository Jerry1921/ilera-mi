function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value / 100;

    if (!weight || !height) {
        alert("Please enter valid data");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    let advice = "";

    if (bmi < 18.5) {
        advice = "Underweight. Increase calories, protein, and strength training.";
    } else if (bmi <= 24.9) {
        advice = "Normal BMI. Maintain balanced diet & regular exercise.";
    } else {
        advice = `
        Overweight.
        Diet: 50% carbs, 25% protein, 25% fats.
        Exercise: Walking 30–45 min, cycling, swimming, yoga daily.
        `;
    }

    document.getElementById("bmiResult").innerText = `Your BMI: ${bmi}`;
    document.getElementById("bmiAdvice").innerText = advice;
}

function checkBP() {
    const sys = document.getElementById("systolic").value;
    const dia = document.getElementById("diastolic").value;
    let advice = "";

    if (sys > 130 || dia > 80) {
        advice = `
        High BP:
        Eat fruits, vegetables, low salt foods.
        Avoid fried & processed food.
        Do walking, meditation, deep breathing.
        `;
    } else if (sys < 90 || dia < 60) {
        advice = `
        Low BP:
        Drink more water.
        Eat small frequent meals.
        Include salt moderately.
        `;
    } else {
        advice = "Blood pressure is normal. Maintain healthy lifestyle.";
    }

    document.getElementById("bpResult").innerText = `BP: ${sys}/${dia}`;
    document.getElementById("bpAdvice").innerText = advice;
}

function checkSugar() {
    const sugar = document.getElementById("sugar").value;
    const meal = document.getElementById("mealType").value;
    let advice = "";

    if (meal === "before") {
        advice = sugar >= 70 && sugar <= 100
            ? "Normal fasting sugar level."
            : "Abnormal fasting sugar. Reduce sugar intake & consult doctor.";
    } else {
        advice = sugar < 140
            ? "Normal post-meal sugar."
            : "High post-meal sugar. Control carbs, walk after meals.";
    }

    document.getElementById("sugarResult").innerText = `Blood Sugar: ${sugar} mg/dL`;
    document.getElementById("sugarAdvice").innerText = `
    ${advice}
    Tips: Exercise regularly, eat fiber-rich food, avoid sugary drinks,
    manage stress, and maintain healthy weight.
    `;
}
