//Change the color of the text when it is clicked
$("h1").click(function()  {
  $("h1").css('color','purple');
});


//When the key is pressed the h1 will change
$(document).keydown(function(event){
  $("h1").text(event.key);
});

//When the button is clicked the h1 will hide and pop up
$("button").on("click", function(){
  $("h1").toggle();
});
