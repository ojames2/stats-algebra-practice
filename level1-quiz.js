const questions = [];

function generateQuestion(index) {
  let a, b, c, d, e, correctAnswer, questionText;
  let useParentheses = index % 2 === 0; // alternate formats

  do {
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
    c = Math.floor(Math.random() * 10) + 1;
    d = Math.floor(Math.random() * 10) + 1;
    e = Math.floor(Math.random() * 10) + 1;

    if (useParentheses) {
      const numerator = a + b * c;
      const denominator = d + e;
      correctAnswer = numerator / denominator;
      questionText = `(${a} + ${b} × ${c}) ÷ (${d} + ${e})`;
    } else {
      correctAnswer = a + (b * c) / d + e;
      questionText = `${a} + ${b} × ${c} ÷ ${d} + ${e}`;
    }
  } while (!Number.isFinite(correctAnswer) || !Number.isInteger(correctAnswer));

  questions.push({ questionText, correctAnswer });

  const block = document.createElement("div");
  block.className = "question-block";
  block.innerHTML = `
    <label for="q${index}">${index + 1}. Evaluate: ${questionText}</label>
    <input type="text" id="q${index}" name="q${index}">
  `;
  document.getElementById("quiz-questions").appendChild(block);
}

function generateQuiz() {
  for (let i = 0; i < 10; i++) {
    generateQuestion(i);
  }
}

function gradeQuiz(event) {
  event.preventDefault();
  let correctCount = 0;
  const feedbackList = document.getElementById("feedback-list");
  feedbackList.innerHTML = "";

  questions.forEach((q, index) => {
    const userInput = document.getElementById(`q${index}`).value.trim();
    const userAnswer = parseFloat(userInput);
    const isCorrect = userAnswer === q.correctAnswer;

    if (isCorrect) correctCount++;

    const feedback = document.createElement("p");
    feedback.className = "feedback-item";
    feedback.textContent = `${index + 1}. ${q.questionText} → You answered: ${userInput || "blank"} — ${isCorrect ? "✅ Correct" : `❌ Incorrect (Correct: ${q.correctAnswer})`}`;
    feedbackList.appendChild(feedback);
  });

  const percent = Math.round((correctCount / questions.length) * 100);
  document.getElementById("score-percent").textContent = `Score: ${percent}%`;
  document.getElementById("score-fraction").textContent = `You got ${correctCount} out of ${questions.length} correct.`;

  document.getElementById("quiz-results").style.display = "block";
}

document.getElementById("level1-quiz-form").addEventListener("submit", gradeQuiz);
generateQuiz();
