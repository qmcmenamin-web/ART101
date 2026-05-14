let environmentTitle = "Chrnos Academy";

let environmentElements = ["sliding door", "elevator", "sky light", "hologram"];

let mainEntity = {
    name: "hologram",
    type: "soft border",
    mood: "helpful",
    isMoving: false,
    favoriteElement: environmentElements[1]
};
let count = 0;
let buttonCreature = {
    name: "",
    species: "Time Tube",
    
        time: ["2125", "1917", "2001", "2012", "2046", "1984"]
};
$("#needy-button").click(function () {

    count = count + 1;
    let arrayPosition = count - 1;
    let currentMood = buttonCreature.time[arrayPosition];
    let message = "<p>You clicked me " + count + " times.</p>";
    message = message + "<p>The current year is " + currentMood + ".</p>";

message = message + "<p>I am a " + buttonCreature.species + ".</p>";

    $("#output").html(message);
    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
function askyesorno(whatNumber) {
    let userInput = prompt("Yes or No");

    if (userInput == whatNumber) {
        var student = "visible";
    }
    else {
        var student = "hidden";;
    }
}


$("#good-button").click(function () {
    askyesorno(Yes);
});
});
