function scuberGreetingForFeet(rideLength){
  if (rideLength <= 400)  {
    return "This one is on me!";
  }
  else if (rideLength > 400 && rideLength <= 2000) {
    return "That will be twenty bucks.";
  }
  else if (rideLength > 2000 && rideLength <= 2500) {
    return "I will gladly take your thirty bucks.";
  }
  else if (rideLength > 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(city){
  const returnMessage = city === "NYC" ? "Ok, sounds good." : "No go.";
  return returnMessage;
}

function switchOnCharmFromTip(generosityLevel){
  let returnMessage;
  switch(generosityLevel){
    case 'generous':
      returnMessage = "Thank you so much.";
      break;
    case 'not as generous':
      returnMessage = "Thank you.";
      break;
    default:
      returnMessage = "Bye.";
      break;
  }
  return returnMessage;
}