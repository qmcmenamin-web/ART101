let count = 0;
let colors = [,"Orchid", "Coral", "HotPink", "Plum"]; 

$("#needy-button").click(function () { 
   $("#needy-button").html( "Clicks: " + count + " Color: " + colors[count] + " Mood: " + [mood]);
   $("body").css("background-color", colors[count]);
    
   if (colors[count] == "HotPink") {
        $("#needy-button").after(" notPink ");
    }
    else if (colors[count] == "Orchid") {
            $("#needy-button").after("  hey Orchid ");
    }
    else if (colors[count] == "Coral") {
            $("#needy-button").after("  under the sea! ");
    }
    if(count < 5 ) {
        mood=" Fresh and Happy ";
    }
    else if (count >=5 && count <10) {
        mood=" Keep Pushin!"
    }
    else {
        mood = " So tired";}
    console.log(mood);
     count = count + 1;
});
