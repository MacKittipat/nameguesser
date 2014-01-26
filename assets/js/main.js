var nameValues = new Array();

var cardIndexValues = [1, 2, 4, 8, 16];
var chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var classCardSelected = "card_selected";

$(document).ready(function() {
    $(".card").click(function() {
        $(this).toggleClass(classCardSelected);
    });
    
    $("#btnNextChar").click(function() {
        addNameValues();
        // Append _
        $("#txtAnswer").html($("#txtAnswer").html() + "_");
        // Clear card
        $(".card").removeClass(classCardSelected);
    });
    
    $("#btnGuess").click(function() {
        addNameValues();
        // Display result
        calculateName();
    });
});

function addNameValues() {
    var charValues = new Array();
    $(".card").each(function(index) {
        if ($(this).hasClass(classCardSelected)) {
            charValues.push(cardIndexValues[index]);
        }
    });
    nameValues.push(charValues);
}

function calculateName() {
    var result = "";
    for(var i = 0; i < nameValues.length; i++) {
        var charValues = nameValues[i];
        var charIndex = 0;
        for(var j = 0; j < charValues.length; j++) {
            charIndex += charValues[j];
        }
        result += chars[charIndex - 1];
    }
    $("#txtAnswer").html(result);
}