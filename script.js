// Order of Operations Section
let currentOrderAnswer = null;
function generateProblem() {
  const a = Math.floor(Math.random() * 10 + 1);
  const b = Math.floor(Math.random() * 10 + 1);
  const c = Math.floor(Math.random() * 10 + 1);
  const problem = `${a} + ${b} × ${c}`;
  currentOrderAnswer = a + b * c;
  document.getElementById("easy-problem-1").innerText = problem;
  document.getElementById("easy-solution-1").innerText = "";
  document.getElementById("easy-solution-1").style.display = "none";
  document.getElementById("easy-answer-1").value = "";
  const feedback = document.getElementById("easy-solution-1");
}
function showSolution() {
  const userAnswer = parseInt(document.getElementById("easy-answer-1").value);
  const feedback = document.getElementById("easy-solution-1");
  if (isNaN(userAnswer)) {
    feedback.textContent = "Please enter a number.";
  } else if (userAnswer === currentOrderAnswer) {
    feedback.textContent = "✅ Correct!";
  } else {
    feedback.textContent = `❌ Incorrect. The correct answer is ${currentOrderAnswer}.`;
  }
  feedback.style.display = "block";
}


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


