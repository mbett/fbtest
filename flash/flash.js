let myflashcards = [
    {
        question: "What color is the sky?",
        answer: "Blue"
    },
    {
        question: "What color is grass?",
        answer: "Green"
    },
    {
        question: "What color stripes does a zebra have?",
        answer: "Black and White "
    }]

let i = 0;
let ques = document.getElementById('q');
let ans = document.getElementById('a');
let display = document.getElementById('q2');
let next = document.getElementById('N');

  console.log('display=' + display);

display.addEventListener("click",function(){
    // display.textContent="changed";
    ques.innerHTML = a;
  })

let a='';
let b='';

function update(){
  console.log('i=' + i);
     a=myflashcards[i].question;
     b=myflashcards[i].answer;
}

while (i < myflashcards.length){
     a=myflashcards[i].question;
     b=myflashcards[i].answer;
  
  display.addEventListener("click",function(){
    update();
    ques.innerHTML = a;
  })
  
   ques.addEventListener("click",function(){
    update();
    ans.innerHTML = b;
    if (i < myflashcards.length - 1)
     i++;
    else 
     i = 0;
    console.log(i);
    
  })
 
 next.addEventListener("click",function() {
    // i++;
    // console.log(i); 
    // a=myflashcards[i].question;
     update();     
     console.log(a);
     ques.innerHTML = a;
        ans.innerHTML = '';
          
    });
    
    break;

 
 }
   
