let previousNumber = null;

function generateQuote() {
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * (9 - 1)) + 1;
  } while (randomNumber === previousNumber); // If it's the same as the previous, generate again

  console.log(randomNumber);

  if (randomNumber == 1) {
    document.getElementById(
      "quoteOutput"
    ).innerHTML = `"If you are not a good shooter today don't worry, there is another way to be useful."`;
    document.getElementById("authorOutput").innerHTML = "-- Sova";
  } else if (randomNumber == 2) {
    document.getElementById(
      "quoteOutput"
    ).innerHTML = `"In a world without love, death means nothing."`;
    document.getElementById("authorOutput").innerHTML = "-- Viego";
  } else if (randomNumber == 3) {
    document.getElementById(
      "quoteOutput"
    ).innerHTML = `"The darker the darkness, the brighter the light."`;
    document.getElementById("authorOutput").innerHTML = "-- Lucifer Father";
  } else if (randomNumber == 4) {
    document.getElementById(
      "quoteOutput"
    ).innerHTML = `"I am not just your healer."`;
    document.getElementById("authorOutput").innerHTML = "-- Sadge";
  } else if (randomNumber == 5) {
    document.getElementById(
      "quoteOutput"
    ).innerHTML = `"For a moment I saw them."`;
    document.getElementById("authorOutput").innerHTML = "-- Cypher";
  } else if (randomNumber == 6) {
    document.getElementById(
      "quoteOutput"
    ).innerHTML = `"I am not a monster Steven."`;
    document.getElementById("authorOutput").innerHTML = "-- Wanda";
  } else if (randomNumber == 7) {
    document.getElementById(
      "quoteOutput"
    ).innerHTML = `"Dont cry you are perfect."`;
    document.getElementById("authorOutput").innerHTML = "-- Silco";
  } else if (randomNumber == 8) {
    document.getElementById(
      "quoteOutput"
    ).innerHTML = `"I thought may be you could love me like you used to even though i am diffrent."`;
    document.getElementById("authorOutput").innerHTML = "-- Jinx";
  }

  previousNumber = randomNumber;
}
