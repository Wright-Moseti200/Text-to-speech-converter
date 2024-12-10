let synth = window.speechSynthesis;
let list = document.querySelector("select");
let button = document.querySelector("button");
let comment = document.querySelector("textarea");

function populateList()
{
  let voices = synth.getVoices();
  for (let i = 0; i < voices.length; i++)
  {
    let option = document.createElement('option');
    option.innerHTML = `${voices[i].name}${voices[i].lang}`;
    option.value = i;
    list.appendChild(option);
  }
}

addEventListener("load", () => {
  populateList();
});

function listen()
{
  let text = comment.value;
  let selectedvoice = synth.getVoices()[list.value];
  let utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = selectedvoice;
  synth.speak(utterance);
}

button.addEventListener("click", listen);