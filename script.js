// Order of Operations Section
//Level 1 Script
let currentEasyAnswer = null;
function generateProblem() {
  const x = Math.floor(Math.random() * 10) + 1;
  const y = Math.floor(Math.random() * 10) + 1;
  const operators = ["+", "—", "*", "÷"];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let problemText = `What is ${x} ${operator} ${y}?`;
  // Calculate the correct answer
  switch (operator) {
    case "+":
      currentEasyAnswer = x + y;
      break;
    case "—":
      currentEasyAnswer = x - y;
      break;
    case "x":
      currentEasyAnswer = x * y;
      break;
    case "÷":
      currentEasyAnswer = parseFloat((x / y).toFixed(2)); // Round to 2 decimals
      break;
  }
  document.getElementById("easy-problem-1").innerText = problemText;
  document.getElementById("easy-answer-1").value = "";
  document.getElementById("easy-solution-1").style.display = "none";
}
function showSolution() {
  const userAnswer = parseFloat(document.getElementById("easy-answer-1").value);
  const feedback = document.getElementById("easy-solution-1");
  if (isNaN(userAnswer)) {
    feedback.textContent = "Please enter a number.";
  } else if (userAnswer === currentEasyAnswer) {
    feedback.textContent = "✅ Correct!";
  } else {
    feedback.textContent = `❌ Incorrect. The correct answer is ${currentEasyAnswer}.`;
  }
  feedback.style.display = "block";
}
//Level 2 Script
// Level 3 Section
let currentLevel3Answer = null;

function generateLevel3Problem() {
  const a = Math.floor(Math.random() * 10 + 1); // 1–10
  const b = Math.floor(Math.random() * 10 + 1);
  const y = Math.floor(Math.random() * 10 + 1);
  const z = Math.floor(Math.random() * 5 + 1);  // 1–5
  const w = Math.floor(Math.random() * 5 + 1);  // 1–5

  const insideRoot = a + b;
  const rootValue = Math.sqrt(insideRoot);
  const numerator = rootValue + y;
  const denominator = z * w;
  currentLevel3Answer = parseFloat((numerator / denominator).toFixed(2));

  const problem = `What is (√(${a} + ${b}) + ${y}) ÷ (${z} × ${w})?`;

  document.getElementById("level3-problem-1").innerText = problem;
  document.getElementById("level3-answer-1").value = "";
  document.getElementById("level3-solution-1").style.display = "none";
}

function showLevel3Solution() {
  const userAnswer = parseFloat(document.getElementById("level3-answer-1").value);
  const feedback = document.getElementById("level3-solution-1");

  if (isNaN(userAnswer)) {
    feedback.textContent = "Please enter a number.";
  } else if (Math.abs(userAnswer - currentLevel3Answer) < 0.01) {
    feedback.textContent = "✅ Correct!";
  } else {
    feedback.textContent = `❌ Incorrect. The correct answer is ${currentLevel3Answer}.`;
  }

  feedback.style.display = "block";
}


// Algebra Practice – Fractional Equation
let currentAlgebraAnswer1 = (7 * 4 - 5) / 3; // Solving (3x + 5)/4 = 7 → x = 7

function generateAlgebraProblem1() {
  document.getElementById("algebra-problem-1").textContent = "1. Solve for x: (3x + 5) / 4 = 7";
  document.getElementById("algebra-answer-1").value = "";
  document.getElementById("algebra-solution-1").style.display = "none";
}

function showAlgebraSolution1() {
  const userAnswer = parseFloat(document.getElementById("algebra-answer-1").value);
  const feedback = document.getElementById("algebra-solution-1");

  if (isNaN(userAnswer)) {
    feedback.textContent = "Please enter a number.";
  } else if (Math.abs(userAnswer - currentAlgebraAnswer1) < 0.01) {
    feedback.textContent = "✅ Correct! x = 7";
  } else {
    feedback.textContent = `❌ Incorrect. The correct answer is x = 7.`;
  }

  feedback.style.display = "block";
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

  document.getElementById("new-level3-btn-1").addEventListener("click", generateLevel3Problem);
  document.getElementById("reveal-level3-btn-1").addEventListener("click", showLevel3Solution);

  document.getElementById("new-algebra-btn-1").addEventListener("click", generateAlgebraProblem1);
  document.getElementById("reveal-algebra-btn-1").addEventListener("click", showAlgebraSolution1);

  document.getElementById("new-rounding-btn").addEventListener("click", generateRoundingProblem);
  document.getElementById("reveal-rounding-btn").addEventListener("click", showRoundingSolution);
};


