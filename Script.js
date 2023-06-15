

function callme() {
  
  let morning = document.querySelector('#morning');
  let afternoon = document.querySelector('#afternoon');
  let evining = document.querySelector('#evining');
  let nigth = document.querySelector('#night');

  
  let wake = morning.options[document.getElementById('morning').selectedIndex];
  let lunch = afternoon.options[document.getElementById('afternoon').selectedIndex];
  let nap = evining.options[document.getElementById('evining').selectedIndex];
  let sleep = nigth.options[document.getElementById('night').selectedIndex];
  
  // console.log(wake.text);
  
  let store = document.getElementsByClassName('cont')
  store[0].innerText = `wake up time :  ${wake.text}`;
  store[1].innerText =`lunch time : ${lunch.text}`;
  store[2].innerText =`nap time : ${ nap.text}`;
  store[3].innerText = `nigth time : ${ sleep.text}`;
  


 
  let time = new Date();
  let hours = time.getHours();
  console.log(wake.value);
    // var app=document.getElementById("Good-Wishes");

    let img = document.querySelector('#img');

  if (hours ===parseInt(morning.value)) 
  {
    document.getElementById("Good-Wishes").innerHTML="Good morning  !!";
    img.src="./morn.svg";
  }
  else if(hours===parseInt(afternoon.value))
  {
    document.getElementById("Good-Wishes").innerHTML="GOOD AFTERNOON !!";
    img.src="./spo.svg";
  }
  else if (hours===parseInt(evining.value)) {
    document.getElementById("Good-Wishes").innerHTML="GOOD EVENING !!";
    img.src="./sleep.svg";
  }
  
  else if (hours===parseInt(nigth.value))
  {
    document.getElementById("Good-Wishes").innerHTML="GOOD NIGHT !!";
    img.src="lunch_time (1).svg";
  }
  else
  {
    img.src="./morn.svg";
    alert("Time is Not Set !!");
    document.getElementById("Good-Wishes").innerHTML="GOOD MORNING!! WAKE UP!!";
  }
}

setInterval(myTimer, 1000);
function myTimer() {
  const d = new Date();
  var DateObj = new Date();
  var hour = DateObj.getHours();
  var minute = DateObj.getMinutes();
  var seconds = DateObj.getSeconds(); 
  var AMPM = "Am";
  
  let hours11=document.getElementById("hrs").innerHTML=hour;
  let minut00 =document.getElementById("min").innerHTML=minute;
  let sec00=document.getElementById("secn").innerHTML=seconds;
  let AMPM00=document.getElementById("AMPM").innerHTML=AMPM;
  
  let local= document.getElementsByClassName("hour").innerHTML=d.toLocaleTimeString() ;

    if(hour>=6 && hour<11){
      document.getElementById("Note")[0];
  }
    if (hour>=11 && hour<15) {
      document.getElementById("Note").innerHTML="GRAB SOME HEALTHY BREAKFAST!!!"
    }
      if (hour>=15 && hour<21) {
        document.getElementById("Note").innerHTML="LET'S HAVE SOME LUNCH !!"
}
if (hour>=21 && hour<24) {
  document.getElementById("Note").innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
}
if (hour>=1 && hour<6) {
  document.getElementById("Note").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP"
}
if (hour>=12){
  hour-=12;  
  PMAM=".PM";
}
if (hour <10) {
  hour="0" + hour;
}
if (minute <10) {
  minute="0" + minute;
}
if (seconds <10) {
  seconds="0" + seconds;
}

 var time = "Time" + hour + ":" + minute + ":"+ seconds + "" + PMAM ;
// document.getElementById("time").innerHTML=time;

}

function up() {
  document.getElementById("alarm-set").innerHTML="Party Time !"
 document.getElementById("alarm-set").style.backgroundImage="linear-gradient(to right, #CB52F8, #FC5EFF)"

}

function down() {

  document.getElementById("alarm-set").innerHTML="Set Alarm"
  document.getElementById("alarm-set").style.backgroundImage="linear-gradient(to right,  #FC5EFF ,#CB52F8)"


  
}