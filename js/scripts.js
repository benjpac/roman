function convertNumeral(number) {
  debugger;
  var numeral = "";
  var numeralArray = ["M", "D", "C", "L", "X", "V", "I"]
  var numberArray = [1000, 500, 100, 50, 10, 5, 1]
  if (number > 3999) {
    return "Number must be < 4000";
  }
  for (var i = 0; number > 0; i++) {
    var numeralCount = 0;
    if ((numberArray[i].toString().charAt(0) === "1") && (number.toString().charAt(0) === "9") && number > numberArray[i+1]) {
      numeral = numeral + numeralArray[i+2] + numeralArray[i]
      number = number - (numberArray[i] - numberArray[i+2])
    }
    while (number >= numberArray[i]) {
      numeralCount += 1;
      numeral = numeral + numeralArray[i];
      if (numeralCount > 3) {
        numeral = numeral.slice(0, -3) + numeralArray[i-1]
      }
      number -= numberArray[i];
    }
  }
  return numeral
}

$(document).ready(function() {
  $("form").submit(function(event) {
    var numberInput = parseInt($("#number").val());
    alert(convertNumeral(numberInput))
    event.preventDefault();
  });
});
