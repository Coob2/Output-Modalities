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
  //navigator.notification.beep(1);
  console.log("beep");
  var text = !Math.round(Math.random());
	console.log(text);
}

function Vibrate()
{
  //navigator.vibrate(1000);
  console.log("vibrate");
}

function Nothing()
{
  alert("Hi");
}

//var text = $('#textinput').val();
//alert(text);
