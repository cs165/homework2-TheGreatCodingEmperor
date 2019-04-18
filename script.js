// TODO(you): Write the JavaScript necessary to complete the homework.
// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.
const blep = document.querySelector('div[data-choice-id="blep"] .checkbox');
const btn = document.querySelector('#test');
function onClick(){
  blep.style.backgroundColor="black";
}
blep.addEventListener("click",onClick());
