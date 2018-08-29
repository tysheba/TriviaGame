// Add game questions to an object
var gameQuestions = [
    {
        question: "What are the names of the original members of Destiny's Child?",
        answers: ["Beyonce, Kelly Rowland, LeToya Luckett, and LaTavia Robertson","Beyonce, Kelly Rowland, and Michelle Williams","Beyonce, Michelle Williams, LaToya Luckett, and Kelly Rowland"
        ],
    
        correctAnswer: 0,
        image: "'assets/images/1destinyschild.jpg'",
        text: "The correct answer is Beyonce, Kelly Rowland, LeToya Luckett, and LaTavia Robertson."
    },
    {
        question: "What is the name of the first rap group to win a grammy award?",
        answers: ["Run D MC", "Salt-N Pepa", "Jazzy Jeff and the Fresh Prince" ],  
        correctAnswer: 2,
        image: "'assets/images/2JazzyJeffnFreshPrince.jpg'",
        text: "The correct answer is Jazzy Jeff and the Fresh Prince."
    },
    {
        question: "Phife Dawg, Q-Tip, and Ali Shaheed Muhammad were members of what rap group?",
        answers: [ "De La Soul", "A Tribe Called Quest", "Digital Underground"],
        correctAnswer: 1, 
        image: "'assets/images/3tribeCalledQuest.png'",
        text: "The correct answer is A Tribe Called Quest."
    },
    {
        question: "True or False. Lil Wayne, Juvenile and Mannie Fresh formed the 90's group the <em>Hot Boyz</em>.",
        answers: ["True","False"],
        correctAnswer: 1,
        image: "'assets/images/4HotBoyz.jpg'",
        text: "The correct answer is false.  The Hot Boyz consisted of Lil Wayne, Juvenile, and BG."
    },
    {
        question: "Who is the best selling rap artist of all time?",
        answers: ["Eminem", "Drake", "Tupac Shakur"],
        correctAnswer: 0,
        image: "'assets/images/5Eminem.jpg'",
        text: "The correct answer is Eminem."
    }
];
var timer;
var x = 0; //index for question
var $questionDiv = $("#question");
var $radioBtns = $("#radioBtns");
var wrongScore = 0;
var correctScore = 0;
var timesUp = function () {
        $("#submitBtn").hide();
        $(".images").html("<h4>" + gameQuestions[x].text + "</h4></br><p><img src =" + gameQuestions[x].image + "></p>")
    
    $questionDiv.empty();
    $radioBtns.empty();
    // nextQ();
    setTimeout(nextQ,5000);
}
function nextQ () {
     $(".images").empty();
     x++;
    displayQuestion();
}
function countdown () {
     timer = setTimeout(timesUp, 20 * 1000);
    }
function stopTimer () {
    clearTimeout(timer);
}
// Add function to display game questions
var displayQuestion = function () {
    if (x===5) {
        $questionDiv.empty();
        $radioBtns.empty();
        $questionDiv.html("<h1> Game Over <h1><p> You scored: " + correctScore + " out of " + gameQuestions.length);
         $("#submitBtn").hide();
         $("#playBtn").show();
       
    }
    else { 

    var choices = gameQuestions[x].answers;
    var triviaQuestion = "<h2> " + gameQuestions[x].question + "</h2>";
    $("#playBtn").hide();
    $("#submitBtn").show();
    $questionDiv.html(triviaQuestion);
    $radioBtns.html(" ");
    for (var i =0; i< choices.length; i++) {
        $radioBtns.append('<label> <input type="radio" name = "answerchoices" value = "' + i + '" /> ' + 
        choices[i] + ' </label></br>');
    
    }
    countdown ();
}};

    $radioBtns.on("click", function() {
        stopTimer();
        selValue = $("input[type=radio]:checked").val();
        correctNum = (gameQuestions[x].correctAnswer);
        console.log("selected value " + selValue);
        console.log("correct value " + correctNum);
        console.log(correctNum==selValue);
    })

    $("#submitBtn").on("click", function(){
        stopTimer();
        if (selValue==correctNum) {
            correctScore++
            timesUp();
            console.log("correct answer entered "+ selValue + "=" + correctNum)
            console.log(correctScore);
        }
        else {
             timesUp();
        }
           
        })
    $("#playBtn").on("click",function() {
        x=0;
        displayQuestion();
    })
       

// $(".btn").on("click", displayQuestion());
$( document ).ready(displayQuestion);
var selValue=0;
var correctNum;