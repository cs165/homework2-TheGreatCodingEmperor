// TODO(you): Write the JavaScript necessary to complete the homework.
// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.
function onClick(){
  course.textContent = "successed";
}
const course = document.querySelector('body article header h1');
course.addEventListener('click',onClick());
