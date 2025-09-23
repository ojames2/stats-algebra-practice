let algebraQuestions = [];
let useXInNumerator = true;

function generateAlgebraQuiz() {
  algebraQuestions = [];
  const quizContainer = document.getElementById("quiz-questions");
  quizContainer.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    let a, b, c, d, xVal, questionText, correctAnswer;

    if (useXInNumerator) {
      a = rand(1, 10);
      xVal = rand(1, 10);
      c = rand(1, 10);
      b = rand(1, 10);
      const numerator = a * xVal + c;
      d = numerator / b;
      if (!Number.isInteger(d)) {
        i--; continue;
      }
      correctAnswer = xVal;
      questionText = `Question ${i + 1}: Solve for x: (${a}x + ${c}) / ${b} = ${d}`;
    } else {
      a = rand(1, 10);
      b = rand(1, 10);
      const sum = a + b;
      const divisors = Array.from({ length: 10 }, (_, i) => i + 1).filter(x => sum % x === 0);
      if (divisors.length === 0) {
        i--; continue;
      }
      xVal = divisors[rand(0, divisors.length - 1)];
      d = sum / xVal;
      correctAnswer = xVal;
      questionText = `Question ${i + 1}: Solve for x: (${a} + ${b}) / x = ${d}`;
    }

    useXInNumerator = !useXInNumerator;

    algebraQuestions.push({ questionText, correctAnswer });

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

function gradeAlgebraQuiz(event) {
  event.preventDefault();
  let score = 0;
  const feedbackList = document.getElementById("feedback-list");
  feedbackList.innerHTML = "";

  const inputs = document.querySelectorAll(".quiz-answer");
  inputs.forEach((input, index) => {
    const userAnswer = parseFloat(input.value);
    const correctAnswer = algebraQuestions[index].correctAnswer;
    const feedback = document.createElement("p");

    if (isNaN(userAnswer)) {
      feedback.textContent = `Question ${index + 1}: ❌ No answer provided. Correct answer is x = ${correctAnswer}.`;
    } else if (userAnswer === correctAnswer) {
      feedback.textContent = `Question ${index + 1}: ✅ Correct!`;
      score++;
    } else {
      feedback.textContent = `Question ${index + 1}: ❌ Incorrect. You answered ${userAnswer}, correct answer is x = ${correctAnswer}.`;
    }

    feedbackList.appendChild(feedback);
  });

  const percent = Math.round((score / algebraQuestions.length) * 100);
  document.getElementById("score-percent").textContent = `Score: ${percent}%`;
  document.getElementById("score-fraction").textContent = `You got ${score} out of ${algebraQuestions.length} correct.`;
  document.getElementById("quiz-results").style.display = "block";
}

function retakeAlgebraQuiz() {
  document.getElementById("quiz-results").style.display = "none";
  generateAlgebraQuiz();
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function () {
  generateAlgebraQuiz();
  document.getElementById("algebra-quiz-form").addEventListener("submit", gradeAlgebraQuiz);
  document.getElementById("retake-quiz-btn").addEventListener("click", retakeAlgebraQuiz);
};

