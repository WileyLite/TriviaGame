$('#start').on('click', function () {
    // console.log("issa button");
    // $('#subwrapper').remove();
    game.start()
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

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up!");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subwrap').prepend('<h2> Time Remaining: <span id = "counter">120</span> Seconds</h2>')
        $('#start').remove();

        for (var i = 0; i < questions.length; i++) {
            $('#subwrap').append('<h2>' + questions[i].question + '</h2');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrap").append("<input type ='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }

    },
    done: function () {
        $.each($('input[name="question-1]":checked'), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1]":checked'), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1]":checked'), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1]":checked'), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1]":checked'), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1]":checked'), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1]":checked'), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1]":checked'), function () {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },
    result: function () {
        clearInterval(timer);
        $('#subwrap h2').remove();
        $('#subwrap').html("<h2> All Done!</h2>");
        $('#subwrap').append("<h3>Correct Answers: " + this.correct + "<h3>");
        $('#subwrap').append("<h3>Incorrect Answers: " + this.correct + "<h3>");
        $('#subwrap').append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>")
    }
}