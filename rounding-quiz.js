let roundingQuestions = [];
let useThreeDecimals = true;

function generateRoundingQuiz() {
  roundingQuestions = [];
  const quizContainer = document.getElementById("quiz-questions");
  quizContainer.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    let number;
    if (useThreeDecimals) {
      number = (Math.random() * 100).toFixed(3); // e.g., 45.678
    } else {
      number = (Math.random() * 100).toFixed(4); // e.g., 45.6789
    }

    const correctAnswer = parseFloat(number).toFixed(2);
    const questionText = `Question ${i + 1}: Round ${number} to two decimal places`;

    roundingQuestions.push({ questionText, correctAnswer });

    const questionDiv = document.createElement("div");
    questionDiv.className = "quiz-question";

    const label = document.createElement("label");
    label.textContent = questionText;

    const input = document.createElement("input");
    input.type = "number";
    input.step = "0.01";
    input.className = "quiz-answer";
    input.dataset.index = i;

    questionDiv.appendChild(label);
    questionDiv.appendChild(input);
    quizContainer.appendChild(questionDiv);

    useThreeDecimals = !useThreeDecimals;
  }
}

function gradeRoundingQuiz(event) {
  event.preventDefault();
  let score = 0;
  const feedbackList = document.getElementById("feedback-list");
  feedbackList.innerHTML = "";

  const inputs = document.querySelectorAll(".quiz-answer");
  inputs.forEach((input, index) => {
    const userAnswer = parseFloat(input.value).toFixed(2);
    const correctAnswer = roundingQuestions[index].correctAnswer;
    const feedback = document.createElement("p");

    if (input.value.trim() === "") {
      feedback.textContent = `Question ${index + 1}: ❌ No answer provided. Correct answer is ${correctAnswer}.`;
    } else if (userAnswer === correctAnswer) {
      feedback.textContent = `Question ${index + 1}: ✅ Correct!`;
      score++;
    } else {
      feedback.textContent = `Question ${index + 1}: ❌ Incorrect. You answered ${userAnswer}, correct answer is ${correctAnswer}.`;
    }

    feedbackList.appendChild(feedback);
  });

  const percent = Math.round((score / roundingQuestions.length) * 100);
  document.getElementById("score-percent").textContent = `Score: ${percent}%`;
  document.getElementById("score-fraction").textContent = `You got ${score} out of ${roundingQuestions.length} correct.`;
  document.getElementById("quiz-results").style.display = "block";
}

function retakeRoundingQuiz() {
  document.getElementById("quiz-results").style.display = "none";
  generateRoundingQuiz();
}

window.onload = function () {
  generateRoundingQuiz();
  document.getElementById("rounding-quiz-form").addEventListener("submit", gradeRoundingQuiz);
  document.getElementById("retake-quiz-btn").addEventListener("click", retakeRoundingQuiz);
};

