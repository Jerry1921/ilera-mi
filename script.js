function addAIMessage(text) {
    const chat = document.getElementById("aiChat");
    const msg = document.createElement("div");
    msg.className = "ai-message typing";
    chat.appendChild(msg);

    let index = 0;
    const speed = 60; // typing speed (lower = faster)

    function typeChar() {
        if (index < text.length) {
            msg.innerText += text.charAt(index);
            index++;
            chat.scrollTop = chat.scrollHeight;
            setTimeout(typeChar, speed);
        } else {
            msg.classList.remove("typing"); // stop cursor
        }
    }

    typeChar();
}


function breathingExercise() {
    addAIMessage(
        "Let’s try a gentle breathing exercise together \n\n" +
        "Inhale slowly through your nose for 4 seconds.\n" +
        "Hold gently for 2 seconds.\n" +
        "Exhale softly through your mouth for 6 seconds.\n\n" +
        "We can repeat this a few times if you’d like."
    );
}

function sensoryExercise() {
    addAIMessage(
        "Let’s do a grounding exercise called 5-4-3-2-1 \n\n" +
        "Take a moment and notice:\n" +
        "• 5 things you can see\n" +
        "• 4 things you can feel\n" +
        "• 3 things you can hear\n" +
        "• 2 things you can smell\n" +
        "• 1 thing you can taste\n\n" +
        "There’s no rush. Take your time."
    );
}

function bodyExercise() {
    addAIMessage(
        "Here’s a gentle body awareness exercise \n\n" +
        "Notice where your body is touching the chair or floor.\n" +
        "Let your shoulders soften.\n" +
        "Unclench your jaw and relax your brow.\n\n" +
        "You don’t need to change anything — just notice."
    );
}

function aiRespond() {
    const input = document.getElementById("userInput");
    const chat = document.getElementById("aiChat");

    if (!input.value.trim()) return;

    // User message
    const userMsg = document.createElement("div");
    userMsg.className = "ai-message user-message";
    userMsg.innerText = input.value;
    chat.appendChild(userMsg);

    const text = input.value.toLowerCase();
    input.value = "";

    let response = "Thank you for sharing that. You don’t have to go through things alone.";

    if (text.includes("sad") || text.includes("down") || text.includes("cry")) {
        response = "That sounds really heavy. It makes sense you’d feel this way. You’re not weak for feeling this.";
    } 
    else if (text.includes("anxious") || text.includes("worried") || text.includes("panic")) {
        response = "I hear that anxiety is showing up for you. Would you like to try a short breathing exercise together?";
    } 
    else if (text.includes("lonely")) {
        response = "Feeling lonely can be really painful. You deserve connection and care.";
    } 
    else if (text.includes("stress")) {
        response = "That sounds stressful. Sometimes even pausing for a few slow breaths can help a little.";
    } 
    else if (text.includes("breathing")) {
        response = "Let’s try this together: inhale slowly for 4 seconds, hold for 2, exhale gently for 6. We can do it a few times.";
    }

    setTimeout(() => {
    addAIMessage(response);
    }, 600);


}

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
