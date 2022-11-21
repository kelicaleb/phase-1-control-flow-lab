function scuberGreetingForFeet(distance){
  let charge ;
  switch(true){
    case distance <= 400:
      charge = "This one is on me!"
    break
    case distance > 2000 && distance < 2500:
      charge = "I will gladly take your thirty bucks."
    break
    case distance > 2500:
      charge = "No can do."
    break
  }
  return charge
}
function ternaryCheckCity(city){
  if(city == "NYC"){
    return "Ok, sounds good."
  }
  else{
    return "No go."
  }
}
function  switchOnCharmFromTip(tip){
  if(tip == "generous"){
    return "Thank you so much."
  }
  else if(tip =="not as generous"){
    return "Thank you."
  }
  else{
    return "Bye."
  }
}