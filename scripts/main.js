const adviceText = document.getElementById("advice");
const adviceId = document.getElementById("numberad");
const resetButton = document.getElementById("resetbutton");
const apiAdviceURL = "https://api.adviceslip.com/advice";

const getAdvice = async () => {
  const res = await fetch(apiAdviceURL);
  const data = await res.json();

  adviceText.innerText = `"${data.slip.advice}"`;
  adviceId.innerText = `ADVICE #${data.slip.id}`;
};

getAdvice();
