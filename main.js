// Magic 8 Ball
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let question = document.getElementById("question").value.toLowerCase();
  console.log(question);
  let randNum = Math.random();
  console.log(randNum);

  if (question.length === 0) {
    document.getElementById("answer").innerHTML = "Please ask a question...";
  } else if (question === "does a magic 8 ball actually work?") {
    document.getElementById("answer").innerHTML = "How Dare You Dout Me!";
  } else if (question === "is javascript awesome?") {
    document.getElementById("Of Course!");
  } else if (randNum < 0.2) {
    document.getElementById("answer").innerHTML = "Without a Doubt.";
  } else if (randNum < 0.4) {
    document.getElementById("answer").innerHTML = "As I see it, yes.";
  } else if (randNum < 0.6) {
    document.getElementById("answer").innerHTML = "Concentrate and ask again.";
  } else if (randNum < 0.8) {
    document.getElementById("answer").innerHTML = "Don't count on it.";
  } else {
    document.getElementById("answer").innerHTML = "Outlook not so good.";
  }
}
