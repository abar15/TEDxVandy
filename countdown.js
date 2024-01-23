var countDownDate = new Date("Mar 22, 2024 08:00:00").getTime();

var x = setInterval(function() //updates every 1s
{
  var now = new Date().getTime();//retrieve dates/time
  var distance = countDownDate - now; //distance between now and the count down date

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  if (distance < 0) 
  {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);