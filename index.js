function scuberGreetingForFeet(feet){


  if(feet <= 400){
    return 'This one is on me!'
  } else if (1999 < feet && feet < 2500){
      return "I will gladly take your thirty bucks."
function scuberGreetingForFeet (feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (1999 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do."
    return "No can do.";
  }
}
}
}



function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  function ternaryCheckCity (city){
    return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  }
}

function switchOnCharmFromTip(tip){
  function switchOnCharmFromTip (tip){
    switch (tip) {
      case 'generous':
        return 'Thank you so much.'
        break;
        return 'Thank you so much.';
        case 'not as generous':
          return 'Thank you.'
          return 'Thank you.';
          default:
            return 'Bye.'
            return 'Bye.';
    }
  }
}