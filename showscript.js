const showDB = [ 
	{ 
		question:"Q1: Who Raised John Snow?",
			a: "Khal Drogo",
			b: "Tyrrion",
			c: "Ned Stark",
			d: "Tywin",
		    ans: "ans3"
            },
	{ 
		question: "Q2: What was the name of Arya Stark' wolf?",
			a: "Ghost",
			b: "Beast",
			c: "Winter",
			d: "Nymeria",
		    ans: "ans4"
            },
	{ 
		question: "Q3: In which season did Pam go to art school?",
			a: "Season 3",
			b: "Season 4",
			c: "Season 2",
			d: "Season 6",
		    ans: "ans2"
            },
	{ 
		question: "Q4: What did Kevin buy for himself when he got himself for Secret Santa?",
			a: "A foot bath",
			b: "M&M's",
			c: "Foot Massager",
			d: "Clothes",
		    ans: "ans1"
            },
	{ 
		question: "Q5: What is the name of Rosa's dog?",
			a: "Cheddar",
			b: "Arlo",
			c: "Argyle",
			d: "Andy",
		    ans: "ans2"
            },
	{ 
		question: "Q6: How many times has Hitchcock been married?",
			a: "7",
			b: "6",
			c: "5",
			d: "4",
		    ans: "ans2"
            },
	{ 
		question: "Q7: When Walt retired, how much money did he walk away with?",
			a: "80 Million",
			b: "4 Million",
			c: "40 Million",
			d: "8 Million",
		    ans: "ans1"
            },
	{ 
		question: "Q8: Where is Gus Fring from?",
			a: "Italy",
			b: "Brazil",
			c: "Chile",
			d: "None of these",
		    ans: "ans3"
            },
	{ 
		question: "Q9: The man behind the horse. Who voiced BoJack?",
			a: "Paul F. Thompkins",
			b: "Will Arnett",
			c: "Stanley Tucci",
			d: "Ken Jeong",
		    ans: "ans2"
            },
	{ 
		question: "Q10: What was that famous TV show BoJack was on back in the '90s?",
			a: "Big Little Ponies",
			b: "Family Horse",
			c: "Horsin' Around",
			d: "Mr. Peanutbutter's House",
		    ans: "ans3"
            },
];


const question = document.querySelector(".ques");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector(".submit-btn");
const answers = document.querySelectorAll(".answer");
let instResult = document.querySelector(".instresult");
const next = document.querySelector(".next-btn");
const home = document.querySelector(".gohome-btn");


let score=0;
let curAnsElem;
let questionCount = 0;
const loadQuestion = () => {

    questionList = showDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    
document.getElementById("submit").style.animationName = "fadein";

document.getElementById("submit").style.animationDuration = "2s";


}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
}

const deselectAll = () => {
   answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
   
submit.addEventListener("click", () => {

        const checkedAnswer = getCheckAnswer?.();
    console.log(checkedAnswer);
    if (checkedAnswer == showDB[questionCount].ans){
        score++;
    };
    questionCount++;
     deselectAll();
    if(questionCount < showDB.length) {
        loadQuestion();
    }
    else {
        instResult.innerText = "You scored " + score + "/10";
        document.getElementById("home").style.visibility = "visible";
        document.getElementById("playagain").style.visibility = "visible";
        document.getElementById("playagain").style.animationName = "fadein";
        document.getElementById("playagain").style.animationDuration = "3s";
    }
});








	

