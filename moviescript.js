const movieDB = [ 
	{ 
		question:"Q1: Who plays Ironman in Marvel Cinematic Universe?",
			a: "Chris Evans",
			b: "Jeremy Renner",
			c: "Robert Downey JR",
			d: "Keanu Reeves",
		    ans: "ans3"
            },
	{ 
		question: "Q2: In the Matrix, does Neo take the blue pill or the red pill?",
			a: "Red",
			b: "Blue",
			c: "Neither",
			d: "Both",
		    ans: "ans1"
            },
	{ 
		question: "Q3: What 1994 crime film revitalized John Travolta’s career?",
			a: "Die Hard",
			b: "Seven",
			c: "Fight Club",
			d: "Pulp Fiction",
		    ans: "ans4"
            },
	{ 
		question: "Q4: Who directed the movie Inglorious Bastards?",
			a: "David Fincher",
			b: "Quentin Tarantino",
			c: "Karan Johar",
			d: "Steven Spielberg",
		    ans: "ans2"
            },
	{ 
		question: "Q5: Which Korean film won the best picture in academy awards?",
			a: "Burning",
			b: "Memories of Murder",
			c: "Train to Busan",
			d: "Parasite",
		    ans: "ans4"
            },
	{ 
		question: "Q6: Who played the role of Fredie Mercury in Bohemian Rhapsody?",
			a: "The Rock",
			b: "Harry Styles",
			c: "Bradley Cooper",
			d: "Rami Malek",
		    ans: "ans4"
            },
	{ 
		question: "Q7: How many “Fast and Furious” films have been released until now?",
			a: "8",
			b: "9",
			c: "10",
			d: "11",
		    ans: "ans3"
            },
	{ 
		question: "Q8: What Martin Scorsese movie holds the all-time record for F-bombs?",
			a: "The Deprated",
			b: "The Irishman",
			c: "Goodfellas",
			d: "The Wolf of Wall Street",
		    ans: "ans4"
            },
	{ 
		question: "Q9: What was the final StarWars movie called?",
			a: "The Rise of Skywalker",
			b: "The Force Awakens",
			c: "Empire Strikes Back",
			d: "The Last Jedi",
		    ans: "ans1"
            },
	{ 
		question: "Q10: “Which one of these has never played the role of batman?",
			a: "Cillian Murphy",
			b: "Ben Affleck",
			c: "Christian Bale",
			d: "Robert Pattinson",
		    ans: "ans1"
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

    questionList = movieDB[questionCount];
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
    if (checkedAnswer == movieDB[questionCount].ans){
        score++;
    };
    questionCount++;
     deselectAll();
    if(questionCount < movieDB.length) {
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








	

