$('#start').on('click', function () {
    // console.log("issa button");
    // $('#subwrapper').remove();

    for (var i = 0; i < questions.length; i++) {
        $('#subwrap').append('<h2>' + questions[i].question + '</h2>');
        for (var j = 0 ; j <questions[i].answers.length; j++) {
            $("#subwrap").append("<input type='radio' name='question-" + i+"' value='" + questions[i].answers[j]+ "'>" + questions[i] .answers[j])
        }
    }
})

var questions = [{
    question: "What was the first full length CGI movie?",
    answers: ["A Bug's Life", "Monsters Inc", "Toy Story", "The Lion King"],
    correctAnswer: "Toy Story"
}, {
    question: "In the film Babe, what type of animal was Babe?",
    answers: ["Spider", "Deer", "A woman", "A pig"],
    correctAnswer: "A pig"
}, {
    question: "How long is New Zealand's Ninety Mile Beach?",
    answers: ["Is this a trick question?", "55 miles", "5280 feet", "93"],
    correctAnswer: "55"
}, {
    question: "Which country was the Caesar salad invented in?",
    answers: ["Rome", "Greece", "Murica", "Mexico"],
    correctAnswer: "Mexico"
}, {
    question: "Which TV character said, 'Live long and prosper'?",
    answers: ["Spock", "Obiwon Kenobi", "All Might", "Hodor"],
    correctAnswer: "Spock"
}, {
    question: "According to Greek mythology who was the first woman on earth?",
    answers: ["Athena", "Freya", "Arachni", "Pandora"],
    correctAnswer: "Pandora"
}, {
    question: "Whats the worst season of Game of thrones",
    answers: ["8th", "Eighth", "We all know by now", "All of the above"],
    correctAnswer: "All of the above"
}, {
    question: "The Watchmen series is based in what universe",
    answers: ["DC", "Marvel", "Vertigo", "Dark Horse"],
    correctAnswer: "DC"
}, {

}];