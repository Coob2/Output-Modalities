$(document).on("pagecreate","#pageone",function(){

  $('#btnBeep').on("click", function(){
    Beep();
  });

  $('#btnVibrate').on("click", function(){
    Vibrate();
  });

});

function Beep()
{
  navigator.notification.beep(1);
  alert("Hello!");
}

function Vibrate()
{
  navigator.vibrate(1000);
  alert("Hello");
}

function random() {
	return !Math.round(Math.random());
}

function Nothing()
{
  alert("Hi");
}

//var text = $('#textinput').val();
//alert(text);
