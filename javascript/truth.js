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