let count=0;
let colors =["Orchid","Coral","Pink","Plum"];
$("#needy-button").click( function(){

    count = count +1;
    colorCount=count -1;
    $("#needy-button").html("I was licked " + count + " " +colors[colorCount])
 $("#needy-button").css( "background-color", colors[colorCount+1]);  

   colors[1];//returns"Coral"
    

    $("html").css( "background-color", colors[count]);

});