var nameValues = new Array();

var cardIndexValues = [1, 2, 4, 8, 16];
var chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var classCardSelected = "card_selected";

$(document).ready(function() {
    $(".card").click(function() {
        $(this).toggleClass(classCardSelected);
        var countCardSelected = 0;
        $(".card").each(function(index) {
            if ($(this).hasClass(classCardSelected)) {
                countCardSelected++;
            }
        });
        if((countCardSelected > 0 && $("#btnNextChar").is(":disabled")) || 
                (countCardSelected == 0 && !$("#btnNextChar").is(":disabled"))) {
            toggleDisabled("#btnNextChar");
        }
    });
    
    $("#btnNextChar").click(function() {
        addNameValues();
        // Clear card
        $(".card").removeClass(classCardSelected);
        // Disable btnNextChar
        $("#btnNextChar").attr("disabled", "disabled");
    });
    
    $("#btnGuess").click(function() {
        addNameValues();
        // Display result
        calculateName();
        // Clear nameValues
        nameValues = new Array();
        // Clear card
        $(".card").removeClass(classCardSelected);
        // Disable btnNextChar
        $("#btnNextChar").attr("disabled", "disabled");
    });
});

function addNameValues() {
    var charValues = new Array();
    $(".card").each(function(index) {
        if ($(this).hasClass(classCardSelected)) {
            charValues.push(cardIndexValues[index]);
        }
    });
    if(charValues.length > 0) {
        nameValues.push(charValues);  
    }
}

function calculateName() {
    var result = "";
    for(var i = 0; i < nameValues.length; i++) {
        var charValues = nameValues[i];
        var charIndex = 0;
        for(var j = 0; j < charValues.length; j++) {
            charIndex += charValues[j];
        }
        if(chars[charIndex - 1] !== undefined) {
            result += chars[charIndex - 1];
        }
    }
    $("#txtAnswer").html(result);
}

function toggleDisabled(selector) {
    if($(selector).attr("disabled") === undefined) {
        $(selector).attr("disabled", "disabled");
    } else {
        $(selector).removeAttr("disabled");
    }
}