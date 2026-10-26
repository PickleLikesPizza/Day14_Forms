let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    greetParagraph.innerHTML = "Greetings, " + age + " year old " + fname + " " + lname;
}
function trivia1() {
    let triviaAnswer = document.getElementById("trivia1-answer");
    let chocolateselected = document.getElementById("chocolate").checked;
    let tunaselected = document.getElementById("tuna").checked;
    let honeyselected = document.getElementById("honey").checked;

    if (chocolateselected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Sweet tooth?"
    }
    else if (tunaselected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Rotten tuna = yuck!"
    }
    else if (honeyselected) {
        triviaAnswer.innerHTML = fname + ", you are right!"
    }
}
function ttaol1() {
    let ttoalAnswer = document.getElementById("ttaol1-answer");
    let truth1selected = document.getElementById("truth1").checked;
    let lieselected = document.getElementById("lie").checked;
    let truth2selected = document.getElementById("truth2").checked;

    if (truth1selected) {
        ttoalAnswer.innerHTML = fname + ", you are wrong."
    }
    else if (lieselected) {
        ttoalAnswer.innerHTML = fname + ", you are right!."
    }
    else if (truth2selected) {
        ttoalAnswer.innerHTML = fname + ", you are wrong."
    }
}