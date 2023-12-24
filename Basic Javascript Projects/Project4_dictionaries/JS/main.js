function my_Dictionary() {
    var Car = {
        Make:"Nissan", 
        Model:"Rogue Sport",
        Color:"Black",
        Drivetrain:"AWD"
    };
    delete Car.Color;
    document.getElementById("Dictionary").innerHTML = Car.Color;
}