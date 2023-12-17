function additionFunction() {
    var A = parseInt(document.getElementById("num1").value);
    var B = parseInt(document.getElementById("num2").value);
    var add = A + B;

    document.getElementById("answer").innerHTML = add;
}

function subtractFunction() {
    var A = parseInt(document.getElementById("num1").value);
    var B = parseInt(document.getElementById("num2").value);
    var subtract = A - B;

    document.getElementById("answer").innerHTML = subtract;
}

function multiplyFunction() {
    var A = parseInt(document.getElementById("num1").value);
    var B = parseInt(document.getElementById("num2").value);
    var multiply = A * B;

    document.getElementById("answer").innerHTML = multiply;
}

function divideFunction() {
    var A = parseInt(document.getElementById("num1").value);
    var B = parseInt(document.getElementById("num2").value);
    var divide = A / B;

    document.getElementById("answer").innerHTML = divide;
}

function remainderFunction() {
    var A = parseInt(document.getElementById("num1").value);
    var B = parseInt(document.getElementById("num2").value);
    var remainder = A % B;

    document.getElementById("answer").innerHTML = remainder;
}

function negationFunction() {
    var A = parseInt(document.getElementById("num1").value);

    document.getElementById("answer").innerHTML = -A;
}

function incrementFunction() {
    var A = parseInt(document.getElementById("num1").value);
    A++;

    document.getElementById("answer").innerHTML = A;
}

function decrementFunction() {
    var A = parseInt(document.getElementById("num1").value);
    A--;

    document.getElementById("answer").innerHTML = A;
}

function randomNumberFunction() {
    var random = 0 + (math.random() * 1000);

    document.getElementById("random_number") = random;
}