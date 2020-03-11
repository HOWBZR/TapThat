//defining variables like a boss
const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("option-text"));

let currentQuestion = {};
let availableQuestions = []; //define empty array of available questions. it is a copy of the full question set array
//this is so I can take questions out of the availableQuestions array as we use them so that it is a new question every time.

let questions = [
    {//each question wil be an object consisting of the following:
        "question": "Question 1", //this is the question.
        "option1": "Stuff", //option
        "option2": "More stuff", //option
        "option3": "Beer", // option
        "option4": "Happy", //option
        "answer": 1 //this is the number in the option that will match up with the answer
    },
    {
        "question": "blah blah blah Queston 2",
        "option1": "Still no.",
        "option2": "not gonna happen",
        "option3": "Wha question is this",
        "option4": "legit placeholder",
        "answer": 3
    },
    {
        "question": "asking questions?",
        "option1": "Another placeholder",
        "option2": "getting shit done",
        "option3": "Well trying to...",
        "option4": "nope.",
        "answer": 4
    }
];

askQuestions = () => {
    availableQuestions = [...questions]; 
    getNewQuestion();
};

//function to get a new question... obviously.
getNewQuestion = () => {
    const questionList = Math.floor(Math.random() * availableQuestions.length);

    currentQuestion = availableQuestions[questionList];

    question.innerText = currentQuestion.question;

    options.forEach(option => {
        const number = option.dataset["number"];
        option.innerText = currentQuestion["option" + number];
    });

}; //this is the end of the getNEwQuestion function

//adding Event Listeners
options.forEach(option => {
    option.addEventListener("click", e => {
        // const selectedOption = e.target;
        // const selectedAnswer = selectedOption.dataset["number"];
        getNewQuestion();

    });

});

//call function to ask questions.
askQuestions();