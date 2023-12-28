function Sentence_Function() {
    var part_1 = "This is ";
    var part_2 = "a full ";
    var part_3 = "sentence";
    var full_sentence = part_1.concat(part_2, part_3);
    document.getElementById("The_Sentence").innerHTML = full_sentence;
}

function Slice_Method() {
    var Sentence = "This is yet another sentence.";
    var Section = Sentence.slice(8,29);
    document.getElementById("Slice").innerHTML = Section;
}

function String_Method() {
    var A = 1996;
    document.getElementById("Numbers_to_String").innerHTML = A.toString();
}