let level2Questions = [];
let level2Answers = [];
let useSquareRoot = true;

function generateLevel2Quiz() {
  level2Questions = [];
  level2Answers = [];
  const quizContainer = document.getElementById("quiz-questions");
  quizContainer.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    let a, b, questionText, correctAnswer;

    const perfectSquares = [4, 9, 16, 25, 36, 49, 64, 81, 100];
    const target = perfectSquares[Math.floor(Math.random() * perfectSquares.length)];
    a = Math.floor(Math.random() * (target - 1)) + 1;
    b = target - a;

    if (useSquareRoot) {
      correctAnswer = Math.sqrt(target);
      questionText = `Question ${i + 1}: What is √(${a} + ${b})?`;
    } else {
      correctAnswer = Math.pow(target, 2);
      questionText = `Question ${i + 1}: What is (${a} + ${b})²?`;
    }

    useSquareRoot = !useSquareRoot;

    level2Questions.push({ questionText, correctAnswer });

    const questionDiv = document.createElement("div");
    questionDiv.className = "quiz-question";

    const label = document.createElement("label");
    label.textContent = questionText;

    const input = document.createElement("input");
    input.type = "number";
    input.className = "quiz-answer";
    input.dataset.index = i;

    questionDiv.appendChild(label);
    questionDiv.appendChild(input);
    quizContainer.appendChild(questionDiv);
  }
}

function gradeLevel2Quiz(event) {
  event.preventDefault();
  let score = 0;
  const feedbackList = document.getElementById("feedback-list");
  feedbackList.innerHTML = "";

  const inputs = document.querySelectorAll(".quiz-answer");
  inputs.forEach((input, index) => {
    const userAnswer = parseFloat(input.value);
    const correctAnswer = level2Questions[index].correctAnswer;
    const feedback = document.createElement("p");

    if (isNaN(userAnswer)) {
      feedback.textContent = `Question ${index + 1}: ❌ No answer provided. Correct answer is ${correctAnswer}.`;
    } else if (userAnswer === correctAnswer) {
      feedback.textContent = `Question ${index + 1}: ✅ Correct!`;
      score++;
    } else {
      feedback.textContent = `Question ${index + 1}: ❌ Incorrect. You answered ${userAnswer}, correct answer is ${correctAnswer}.`;
    }

    feedbackList.appendChild(feedback);
  });

  const percent = Math.round((score / level2Questions.length) * 100);
  document.getElementById("score-percent").textContent = `Score: ${percent}%`;
  document.getElementById("score-fraction").textContent = `You got ${score} out of ${level2Questions.length} correct.`;
  document.getElementById("quiz-results").style.display = "block";
}

function retakeLevel2Quiz() {
  document.getElementById("quiz-results").style.display = "none";
  generateLevel2Quiz();
}

window.onload = function () {
  generateLevel2Quiz();
  document.getElementById("level2-quiz-form").addEventListener("submit", gradeLevel2Quiz);
  document.getElementById("retake-quiz-btn").addEventListener("click", retakeLevel2Quiz);
};

