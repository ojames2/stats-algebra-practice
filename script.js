// Order of Operations Section
// Level 1 – Order of Operations
let currentLevel1Answer = null;

function generateLevel1Problem() {
  // Generate random numbers
  const a = Math.floor(Math.random() * 10 + 1); // 1–10
  const b = Math.floor(Math.random() * 10 + 1);
  const c = Math.floor(Math.random() * 5 + 1);  // 1–5
  const d = Math.floor(Math.random() * 5 + 1);  // 1–5

  // Construct the expression: (a + b × c) ÷ (d + 1)
  const problemText = `Evaluate: (${a} + ${b} × ${c}) ÷ (${d} + 1)`;

  // Compute the correct answer
  const numerator = a + b * c;
  const denominator = d + 1;
  currentLevel1Answer = parseFloat((numerator / denominator).toFixed(2));

  // Update the DOM
  document.getElementById("level1-problem-1").innerText = problemText;
  document.getElementById("level1-answer-1").value = "";
  document.getElementById("level1-solution-1").style.display = "none";
}

function showLevel1Solution() {
  const userAnswer = parseFloat(document.getElementById("level1-answer-1").value);
  const feedback = document.getElementById("level1-solution-1");

  if (isNaN(userAnswer)) {
    feedback.textContent = "Please enter a number.";
  } else if (Math.abs(userAnswer - currentLevel1Answer) < 0.01) {
    feedback.textContent = "✅ Correct!";
  } else {
    feedback.textContent = `❌ Incorrect. The correct answer is ${currentLevel1Answer}.`;
  }

  feedback.style.display = "block";
}

//Level 2 – Order of Operations
let currentLevel2Answer = null;

function generateLevel2Problem() {
  const a = Math.floor(Math.random() * 10 + 1);
  const b = Math.floor(Math.random() * 10 + 1);
  const y = Math.floor(Math.random() * 10 + 1);

  const insideRoot = a + b;
  const rootValue = Math.sqrt(insideRoot);
  currentLevel2Answer = parseFloat((rootValue + y).toFixed(2));

  const problemText = `What is √(${a} + ${b}) + ${y}?`;
  document.getElementById("level2-problem-1").innerText = problemText;
  document.getElementById("level2-answer-1").value = "";
  document.getElementById("level2-solution-1").style.display = "none";
}

function showLevel2Solution() {
  const userAnswer = parseFloat(document.getElementById("level2-answer-1").value);
  const feedback = document.getElementById("level2-solution-1");

  if (isNaN(userAnswer)) {
    feedback.textContent = "Please enter a number.";
  } else if (Math.abs(userAnswer - currentLevel2Answer) < 0.01) {
    feedback.textContent = "✅ Correct!";
  } else {
    feedback.textContent = `❌ Incorrect. The correct answer is ${currentLevel2Answer}.`;
  }

  feedback.style.display = "block";
}

// Level 3 – Order of Operations
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
  document.getElementById("algebra-problem-1").textContent = "Solve for x: (3x + 5) / 4 = 7";
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
  document.getElementById("new-level1-btn-1").addEventListener("click", generateLevel1Problem);
  document.getElementById("reveal-level1-btn-1").addEventListener("click", showLevel1Solution);

  document.getElementById("new-level2-btn-1").addEventListener("click", generateLevel2Problem);
  document.getElementById("reveal-level2-btn-1").addEventListener("click", showLevel2Solution);
  
  document.getElementById("new-level3-btn-1").addEventListener("click", generateLevel3Problem);
  document.getElementById("reveal-level3-btn-1").addEventListener("click", showLevel3Solution);

  document.getElementById("new-algebra-btn-1").addEventListener("click", generateAlgebraProblem1);
  document.getElementById("reveal-algebra-btn-1").addEventListener("click", showAlgebraSolution1);

  document.getElementById("new-rounding-btn").addEventListener("click", generateRoundingProblem);
  document.getElementById("reveal-rounding-btn").addEventListener("click", showRoundingSolution);
};


