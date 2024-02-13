class Quiz {
    // YOUR CODE HERE:
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }
    getQuestion() {

        return this.questions[this.currentQuestionIndex];

    }

    moveToNextQuestion() {
        this.currentQuestionIndex++;

    }

    shuffleQuestions() {
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
        }
    }

    // should check if the answer is correct by comparing it to the 'answer' property of the current question

    checkAnswer(answer) {
        if (answer === this.questions[this.currentQuestionIndex].answer) {
            this.correctAnswers++;
        };

    };

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false;
        } else if (this.currentQuestionIndex === this.questions.length) {
            return true;
        } 
    }
};

// hasEnded() {
//     return this.currentQuestionIndex >= this.questions.length;
// }
// }



// checkAnswer() method
// should be defined
// should be a function
// should receive 1 argument (answer)
// should increase 'correctAnswers' by 1 when a correct answer is passed as an argument
// should check if the answer is correct by comparing it to the 'answer' property of the current question


// hasEnded() method
// should be defined
// should be a function
// should return 'false' when 'currentQuestionIndex' is less than the 'questions' array length
// should return 'true' when 'currentQuestionIndex' is equal to the 'questions' array length






//INSTRUCTIONS:
// shuffleChoices() method

// Shuffles the elements stored in the choices array of the Question.

// should be defined.

// should be a function.

// should receive no arguments.

// should shuffle the elements stored in the choices array property.