XXX
// Level 1 – Order of Operations
let currentLevel1Answer = null;
let useParentheses = true; // toggles between formats

function generateLevel1Problem() {
  const problemElement = document.getElementById("level1-problem-1");
  const answerInput = document.getElementById("level1-answer-1");
  const solutionElement = document.getElementById("level1-solution-1");

  let a, b, c, d, e, correctAnswer;

  do {
    // Generate numbers between 1 and 10
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
    c = Math.floor(Math.random() * 10) + 1;
    d = Math.floor(Math.random() * 10) + 1;
    e = Math.floor(Math.random() * 10) + 1;

    if (useParentheses) {
      // Format: (a + b × c) ÷ (d + e)
      const numerator = a + b * c;
      const denominator = d + e;
      correctAnswer = numerator / denominator;
      problemElement.textContent = `Evaluate: (${a} + ${b} × ${c}) ÷ (${d} + ${e})`;
    } else {
      // Format: a + b × c ÷ d + e
      correctAnswer = a + (b * c) / d + e;
      problemElement.textContent = `Evaluate: ${a} + ${b} × ${c} ÷ ${d} + ${e}`;
    }
  } while (!Number.isFinite(correctAnswer) || !Number.isInteger(correctAnswer));

  currentLevel1Answer = correctAnswer;
  useParentheses = !useParentheses; // toggle for next problem

  answerInput.value = "";
  solutionElement.style.display = "none";
  solutionElement.textContent = `✅ Correct answer: ${correctAnswer}`;
}

function showLevel1Solution() {
  const userAnswer = document.getElementById("level1-answer-1").value.trim();
  const feedback = document.getElementById("level1-solution-1");

  if (userAnswer === "") {
    feedback.textContent = "Please enter a number.";
  } else if (parseFloat(userAnswer) === currentLevel1Answer) {
    feedback.textContent = `✅ Correct! The answer is ${currentLevel1Answer}.`;
  } else {
    feedback.textContent = `❌ Incorrect. You entered ${userAnswer}, but the correct answer is ${currentLevel1Answer}.`;
  }

  feedback.style.display = "block";
}

