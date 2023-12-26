var X = 100
function Global_Variable_Function() {
    document.getElementById("global_variable_showcase").innerHTML = X;
}

function Local_Variable_Function() {
    var Z = 10
    document.getElementById("local_variable_showcase").innerHTML = Z;
}

function Morning_Function() {
    if (new Date().getHours() < 12) {
        document.getElementById("Good_Morning").innerHTML = "Good Morning!"
    }
}

function Guess_Function() {
    var guess = document.getElementById("Users_Number").value;
    if (guess == 1996) {
        reply = "Correct!";
    }
    else {
        reply = "Sorry, try again.";
    }
    document.getElementById("My_Response").innerHTML = reply;
}