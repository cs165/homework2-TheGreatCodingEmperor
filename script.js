// TODO(you): Write the JavaScript necessary to complete the homework.
// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.
const question_one = document.querySelectorAll('div[data-question-id="one"]');
const question_two = document.querySelectorAll('div[data-question-id="two"]');
const question_three = document.querySelectorAll('div[data-question-id="three"]');
var check ={one:false , two:false ,three:false }
var answer;
var restart=true;
var answerBox = document.createElement('div');
answerBox.classList.add("answerBox");
answerBox.innerHTML=" ";
const article = document.querySelector('article');
article.appendChild(answerBox);

addListener(question_one);
addListener(question_two);
addListener(question_three);

function addListener(question){
  for(let q of question){
    q.addEventListener('click', function(){
      select(q,question);
    },false);
  }
}

function select(q,question){
  if(check['one']&&check['two']&&check['three']){
    return;
  }
  if(restart){
    restart=false;
    addRestart();
  }

  console.log(q.dataset.choiceId);
  q.classList.remove('unselected');
  q.classList.add('selected');
  for(let t of question){
    if(q!==t){
      t.classList.remove('selected');
      t.classList.add('unselected');
    }
  }

  let questionId = q.dataset.questionId;
  check[questionId]=true;

  if(questionId==='one')answer= q.dataset.choiceId;

  if(check['one']&&check['two']&&check['three']){
    removeAllListener();
    console.log("final answer: "+answer);
    printAnswer();
    return;
  }
}

function removeAllListener()
{
  removeListener(question_one);
  removeListener(question_two);
  removeListener(question_three);
}
function removeListener(question){
  for(let q of question){
    q.removeEventListener('click', function(){
      select(q,question);
    },false);
  }
}
function printAnswer(){
  var title = document.querySelector('.title');
  var contents = document.querySelector('.contents');
  title.innerHTML=RESULTS_MAP[answer].title;
  contents.innerHTML=RESULTS_MAP[answer].contents;
}

function addRestart(){
  var title = document.createElement("div");
  title.classList.add('title');
  var contents = document.createElement("div");
  contents.classList.add('contents');
  title.innerHTML=" ";
  contents.innerHTML=" ";

  answerBox.appendChild(title);
  answerBox.appendChild(contents);

  var restartButton = document.createElement("div");
  restartButton.classList.add('restartButton');
  answerBox.appendChild(restartButton);

  var restartText = document.createElement("div");
  restartText.classList.add('restartText');
  restartText.innerHTML="Restart quiz";
  restartButton.appendChild(restartText);
  restartButton.addEventListener('click',function(){
    for(let q of question_one){
      q.classList.remove('selected','unselected');
    }
    for(let q of question_two){
      q.classList.remove('selected','unselected');
    }
    for(let q of question_three){
      q.classList.remove('selected','unselected');
    }
    check['one']=check['two']=check['three']=false;
    var title = document.querySelector('.title');
    var contents = document.querySelector('.contents');
    title.remove();
    contents.remove();
    restartButton.remove();
    restart = true;
    var top = document.querySelector(".question-name").children;
    top[0].scrollIntoView({behavior:"smooth"});
  });
}
