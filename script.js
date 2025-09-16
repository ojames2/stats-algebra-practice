// Order of Operations Section
let currentEasyAnswer = null;
document.getElementById("new-easy-btn-1").addEventListener("click", () => {
  const x = Math.floor(Math.random() * 10) + 1; // Random number between 1–10
  const y = Math.floor(Math.random() * 10) + 1;
  currentEasyAnswer = x + y;
  document.getElementById("easy-problem-1").textContent = `What is ${x} + ${y}?`;
  document.getElementById("easy-answer-1").value = "";
  document.getElementById("easy-solution-1").style.display = "none";
});
document.getElementById("reveal-easy-btn-1").addEventListener("click", () => {
  const userAnswer = parseInt(document.getElementById("easy-answer-1").value);
  const feedback = document.getElementById("easy-solution-1");
  if (isNaN(userAnswer)) {
    feedback.textContent = "Please enter a number.";
  } else if (userAnswer === currentEasyAnswer) {
    feedback.textContent = "✅ Correct!";
  } else {
    feedback.textContent = `❌ Incorrect. The correct answer is ${currentEasyAnswer}.`;
  }
  feedback.style.display = "block";
});


// Algebra Section
function generateAlgebraProblem() {
  const x = Math.floor(Math.random() * 10 + 1);
  const b = Math.floor(Math.random() * 10);
  const result = 2 * x + b;
  const problem = `Solve for x: 2x + ${b} = ${result}`;
  const answer = x;

  document.getElementById("algebra-problem").innerText = problem;
  document.getElementById("algebra-solution").innerText = `Answer: x = ${answer}`;
  document.getElementById("algebra-solution").style.display = "none";
}

function showAlgebraSolution() {
  document.getElementById("algebra-solution").style.display = "block";
}



// Rounding Section
function generateRoundingProblem() {
  const num = (Math.random() * 100).toFixed(5);
  const rounded = parseFloat(num).toFixed(2);
  const problem = `Round ${num} to two decimal places`;
  const answer = rounded;

  document.getElementById("rounding-problem").innerText = problem;
  document.getElementById("rounding-solution").innerText = `Answer: ${answer}`;
  document.getElementById("rounding-solution").style.display = "none";
}

function showRoundingSolution() {
  document.getElementById("rounding-solution").style.display = "block";
}


window.onload = function() {
  generateProblem(); // Order of Operations
  generateAlgebraProblem(); // Algebra
  generateRoundingProblem(); // Rounding

  // Add these event listeners to make buttons interactive
  document.getElementById("new-problem-btn").addEventListener("click", generateProblem);
  document.getElementById("reveal-answer-btn").addEventListener("click", showSolution);

  document.getElementById("new-algebra-btn").addEventListener("click", generateAlgebraProblem);
  document.getElementById("reveal-algebra-btn").addEventListener("click", showAlgebraSolution);

  document.getElementById("new-rounding-btn").addEventListener("click", generateRoundingProblem);
  document.getElementById("reveal-rounding-btn").addEventListener("click", showRoundingSolution);
};


