// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var firstTwo = cardNumber.slice(0,2);
  var firstThree = cardNumber.slice(0,3); 
  var firstFour = cardNumber.slice(0,4);
  var firstSix = cardNumber.slice(0,6);
  var cardLength = cardNumber.length;
  if(cardNumber.length === 14 && (firstTwo === '38' || firstTwo === '39')){
    return 'Diner\'s Club';
  }else if(cardLength === 15 && (firstTwo === '34' || firstTwo === '37')){
    return 'American Express';
  }else if((cardLength === 16 || cardLength === 18 || cardLength === 19) && (firstFour === '4903' || firstFour === '4905' || firstFour === '4911' || firstFour === '4936' || firstFour === '6333' || firstFour === '6759' || firstSix === '564182' || firstSix === '633110')){
    return 'Switch';
  }else if((cardLength === 13 || cardLength === 16 || cardLength === 19) && cardNumber.charAt(0) === '4'){
    return 'Visa';
  }else if(cardLength === 16 && (firstTwo === '51' || firstTwo === '52' || firstTwo === '53' || firstTwo === '54' || firstTwo === '55')){
    return 'MasterCard';
  }else if((cardLength === 16 || cardLength === 19) && (firstTwo === '65' || firstFour === '6011' || (firstThree >= '644' && firstThree <='649'))){
    return 'Discover';
  }else if((cardLength >= 12 && cardLength <= 19) && (firstFour === '5018' || firstFour === '5020' || firstFour === '5038' || firstFour === '6304')){
    return 'Maestro';
  }else if((cardLength >= 16 || cardLength <= 19) && ((firstThree >= 624 && firstThree <= 626) || (firstFour >= 6282 && firstFour <= 6288) || (firstSix >= 622126 && firstSix <= 622925))){
    return 'China UnionPay';
  }else{
    return 'Other';
  }
};

/*
Nice work! Extend your function to support two popular networks, Visa and Mastercard:

Visa always has a prefix of 4 and a length of 13, 16, or 19.
MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
*/