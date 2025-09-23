let level3Questions = [];
let formatIndex = 0;

function generateLevel3Quiz() {
  level3Questions = [];
  const quizContainer = document.getElementById("quiz-questions");
  quizContainer.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    let a, b, c, d, questionText, correctAnswer;
    let valid = false;

    while (!valid) {
      a = Math.floor(Math.random() * 10) + 1;
      b = Math.floor(Math.random() * 10) + 1;
      c = Math.floor(Math.random() * 10) + 1;
      d = Math.floor(Math.random() * 10) + 1;

      switch (formatIndex) {
        case 0: {
          const numerator = a + b;
          const denominator = c + d;
          if (!Number.isInteger(Math.sqrt(numerator))) break;
          correctAnswer = Math.sqrt(numerator) / denominator;
          questionText = `Question ${i + 1}: What is √(${a} + ${b}) ÷ (${c} + ${d})?`;
          valid = Number.isFinite(correctAnswer) && Number.isInteger(correctAnswer);
          break;
        }
        case 1: {
          const numerator = Math.pow(a + b, 2);
          const denominator = c + d;
          correctAnswer = numerator / denominator;
          questionText = `Question ${i + 1}: What is (${a} + ${b})² ÷ (${c} + ${d})?`;
          valid = Number.isFinite(correctAnswer) && Number.isInteger(correctAnswer);
          break;
        }
        case 2: {
          const numerator = a + b;
          const denominator = c + d;
          if (!Number.isInteger(Math.sqrt(denominator))) break;
          correctAnswer = numerator / Math.sqrt(denominator);
          questionText = `Question ${i + 1}: What is (${a} + ${b}) ÷ √(${c} + ${d})?`;
          valid = Number.isFinite(correctAnswer) && Number.isInteger(correctAnswer);
          break;
        }
        case 3: {
          const numerator = a + b;
          const denominator = Math.pow(c + d, 2);
          correctAnswer = numerator / denominator;
          questionText = `Question ${i + 1}: What is (${a} + ${b}) ÷ (${c} + ${d})²?`;
          valid = Number.isFinite(correctAnswer) && Number.isInteger(correctAnswer);
          break;
        }
      }

      if (valid) {
        level3Questions.push({ questionText, correctAnswer });

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

    formatIndex = (formatIndex + 1) % 4;
  }
}

function gradeLevel3Quiz(event) {
  event.preventDefault();
  let score = 0;
  const feedbackList = document.getElementById("feedback-list");
  feedbackList.innerHTML = "";

  const inputs = document.querySelectorAll(".quiz-answer");
  inputs.forEach((input, index) => {
    const userAnswer = parseFloat(input.value);
    const correctAnswer = level3Questions[index].correctAnswer;
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

  const percent = Math.round((score / level3Questions.length) * 100);
  document.getElementById("score-percent").textContent = `Score: ${percent}%`;
  document.getElementById("score-fraction").textContent = `You got ${score} out of ${level3Questions.length} correct.`;
  document.getElementById("quiz-results").style.display = "block";
}

function retakeLevel3Quiz() {
  document.getElementById("quiz-results").style.display = "none";
  generateLevel3Quiz();
}

window.onload = function () {
  generateLevel3Quiz();
  document.getElementById("level3-quiz-form").addEventListener("submit", gradeLevel3Quiz);
  document.getElementById("retake-quiz-btn").addEventListener("click", retakeLevel3Quiz);
};
