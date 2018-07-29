var gameQuestions = [
    {
        question: "how are you doing?", 
        answer: "I'm doing well",
        optionB: "I'm loving life"
    },
    {
        question: "What is your favorite color?",
        answer: "green",
        optionB: "red"
    }
];

var displayQuestion = function () {
    for (var i=0; i< gameQuestions.length; i++) {
    var triviaQuestion = gameQuestions[i].question;
    console.log(triviaQuestion);
    $("#game").html("<label>"+ triviaQuestion + "</label>");
}

}
displayQuestion ();