const animeDB = [ 
	{ 
		question:"Q1: Which Tailed-beast does Gaara have sealed inside him?",
			a: "Karuma",
			b: "matatabi",
			c: "Shukaku",
			d: "isobu",
		    ans: "ans3"
            },
	{ 
		question: "Q2: Who gave Kakashi his Sharingan eye?",
			a: "Madara",
			b: "Sasuke",
			c: "Tobi",
			d: "Obito",
		    ans: "ans4"
            },
	{ 
		question: "Q3: Who is the armored titan?",
			a: "Levi",
			b: "Reiner",
			c: "Marco",
			d: "Galliard",
		    ans: "ans2"
            },
	{ 
		question: "Q4: What is the name of Eren's mother?",
			a: "Carla",
			b: "Asuka",
			c: "Nagisa",
			d: "Dina",
		    ans: "ans1"
            },
	{ 
		question: "Q5: What was manga artist Hajime Isayama's inspiration for Titans?",
			a: "Children",
			b: "Drunks",
			c: "Robots",
			d: "Animals",
		    ans: "ans2"
            },
	{ 
		question: "Q6: What is Tanjiro's greatest sense?",
			a: "Taste",
			b: "Smell",
			c: "Sight",
			d: "Hearing",
		    ans: "ans2"
            },
	{ 
		question: "Q7: What type of sword does a Demon Slayer wield?",
			a: "Nichirin Sword",
			b: "Adamantium Blade",
			c: "Steel Katana",
			d: "Titanium Sword",
		    ans: "ans1"
            },
	{ 
		question: "Q8: What is L's real name?",
			a: "Leiko",
			b: "L",
			c: "Lawliet",
			d: "None of these",
		    ans: "ans3"
            },
	{ 
		question: "Q9: How does a person die if you do not write the cause of their death in the death note?",
			a: "By suffocating",
			b: "Heart Attack",
			c: "Seizure",
			d: "Suicide",
		    ans: "ans2"
            },
	{ 
		question: "Q10: What sport was Light Yagami really good at?",
			a: "Football",
			b: "Basketball",
			c: "Tennis",
			d: "Volleyball",
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

    questionList = animeDB[questionCount];
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
    if (checkedAnswer == animeDB[questionCount].ans){
        score++;
    };
    questionCount++;
     deselectAll();
    if(questionCount < animeDB.length) {
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








	

