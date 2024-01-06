function Call_Loop() {
    var A = 1 ;
    while (A < 11) {
        A++
    }
}

var Instruments = ["Keytar", "Vuvuzela", "Didgeridoo"];
var Content = " ";
var B;
function for_Loop() {
    for (B = 0; B < Instruments.length; B++) {
        Content += Instruments[B] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var colors = ["Red", "Blue", "Green", "Amber", "White"];
    var length = colors.length;

    document.getElementById("Array").innerHTML = length;
}

function constant_function() {
    const apple = {color:"Red", type:"HoneyCrisp", shape:"round"};
    document.getElementById("Constant").innerHTML = "The apple is a " + apple.type;
}

let House = {
    Floor: "wood", 
    Walls: "drywall", 
    Roof: "shingles", 
    description : function() {
        return "The house is made of " + this.Floor + "," + this.Walls + "," + this.Roof + ".";
    }
};
document.getElementById("House_Object").innerHTML = House.description();

