const ride = window.prompt("enter the distance in feet")
const fee = ride.parseInt();
let city = window.prompt("enter the name of the city");
let tip = window.prompt("enter the tip")
function scuberGreetingForFeet(){
  if(fee <= 400){
    alert("this is one is on me ");
  }
  else if(fee > 2000){
    alert("I will gladly take your thirty bucks. ")
  }
  else if (fee > 2500){
    alert("no can do")
  }
  else{
    alert("please enter the distance as prompted")
  }

}


function ternaryCheckCity(){
  if(city == "NYC"){
    alert("Ok, sounds good.");
  }
  else{
    alert("No go")
  }
}

function switchOnCharmFromTip(){
  if(tip == "generous"){
    alert("Thank you so much")
  }
  else if(tip == "not as generous"){
    alert("Thank you")
  }
  else{
    alert("Bye.")
  }
}