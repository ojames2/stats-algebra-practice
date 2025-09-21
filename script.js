// Order of Operations Section
// Level 1 – Order of Operations
let currentLevel1Answer = null;
let useParentheses = true; // toggles between problem types

function generateLevel1Problem() {
  let problemText = "";
  let answer = 0;

  if (useParentheses) {
    // Complex expression with parentheses
    const a = Math.floor(Math.random() * 10 + 1);
    const b = Math.floor(Math.random() * 5 + 1);
    const c = Math.floor(Math.random() * 5 + 1);
    const d = Math.floor(Math.random() * 5 + 1);

    // Ensure denominator divides evenly
    const numerator = a + b * c;
    const denominator = d + 1;

    answer = Math.floor(numerator / denominator);
    problemText = `Evaluate: (${a} + ${b} × ${c}) ÷ (${d} + 1)`;

    // Adjust numerator to ensure whole number result
    answer = Math.floor(answer);
    currentLevel1Answer = answer;
  } else {
    // Simple expression without parentheses
    const x = Math.floor(Math.random() * 10 + 1);
    const y = Math.floor(Math.random() * 10 + 1);
    const operator = ["+", "−", "×"][Math.floor(Math.random() * 3)];

    switch (operator) {
      case "+":
        answer = x + y;
        break;
      case "−":
        answer = x - y;
        break;
      case "×":
        answer = x * y;
        break;
    }

    problemText = `What is ${x} ${operator} ${y}?`;
    currentLevel1Answer = answer;
  }

  // Toggle for next problem
  useParentheses = !useParentheses;

  // Update DOM
  document.getElementById("level1-problem-1").innerText = problemText;
  document.getElementById("level1-answer-1").value = "";
  document.getElementById("level1-solution-1").style.display = "none";
}

function showLevel1Solution() {
  const userAnswer = parseInt(document.getElementById("level1-answer-1").value);
  const feedback = document.getElementById("level1-solution-1");

  if (isNaN(userAnswer)) {
    feedback.textContent = "Please enter a whole number.";
  } else if (userAnswer === currentLevel1Answer) {
    feedback.textContent = "✅ Correct!";
  } else {
    feedback.textContent = `❌ Incorrect. The correct answer is ${currentLevel1Answer}.`;
  }

  feedback.style.display = "block";
}

//Level 2 – Order of Operations
let currentLevel2Answer = null;
let useSquareRoot = true; // toggles between √(...) and (...)²

function generateLevel2Problem() {
  let a, b, problemText, answer;

  if (useSquareRoot) {
    // √(a + b) → whole number
    // Choose a + b to be a perfect square
    const perfectSquares = [4, 9, 16, 25, 36, 49, 64, 81, 100];
    const target = perfectSquares[Math.floor(Math.random() * perfectSquares.length)];

    a = Math.floor(Math.random() * (target - 1) + 1);
    b = target - a;
    answer = Math.sqrt(target);

    problemText = `What is √(${a} + ${b})?`;
  } else {
    // (a + b)² → whole number
    a = Math.floor(Math.random() * 10 + 1);
    b = Math.floor(Math.random() * 10 + 1);
    const sum = a + b;
    answer = sum * sum;

    problemText = `What is (${a} + ${b})²?`;
  }

  currentLevel2Answer = answer;

  // Toggle for next problem
  useSquareRoot = !useSquareRoot;

  // Update DOM
  document.getElementById("level2-problem-1").innerText = problemText;
  document.getElementById("level2-answer-1").value = "";
  document.getElementById("level2-solution-1").style.display = "none";
}

function showLevel2Solution() {
  const userAnswer = parseInt(document.getElementById("level2-answer-1").value);
  const feedback = document.getElementById("level2-solution-1");

  if (isNaN(userAnswer)) {
    feedback.textContent = "Please enter a whole number.";
  } else if (userAnswer === currentLevel2Answer) {
    feedback.textContent = "✅ Correct!";
  } else {
    feedback.textContent = `❌ Incorrect. The correct answer is ${currentLevel2Answer}.`;
  }

  feedback.style.display = "block";
}

// Level 3 – Order of Operations
let currentLevel3Answer = null;
let useSquareRootLevel3 = true; // toggles between √(...) and (...)²

function generateLevel3Problem() {
  let a, b, problemText, answer;

  if (useSquareRootLevel3) {
    // √(a + b) → whole number
    const perfectSquares = [4, 9, 16, 25, 36, 49, 64, 81, 100];
    const target = perfectSquares[Math.floor(Math.random() * perfectSquares.length)];

    a = Math.floor(Math.random() * (target - 1) + 1);
    b = target - a;
    answer = Math.sqrt(target);

    problemText = `What is √(${a} + ${b})?`;
  } else {
    // (a + b)² → whole number
    a = Math.floor(Math.random() * 10 + 1);
    b = Math.floor(Math.random() * 10 + 1);
    const sum = a + b;
    answer = sum * sum;

    problemText = `What is (${a} + ${b})²?`;
  }

  currentLevel3Answer = answer;

  // Toggle for next problem
  useSquareRootLevel3 = !useSquareRootLevel3;

  // Update DOM
  document.getElementById("level3-problem-1").innerText = problemText;
  document.getElementById("level3-answer-1").value = "";
  document.getElementById("level3-solution-1").style.display = "none";
}

function showLevel3Solution() {
  const userAnswer = parseInt(document.getElementById("level3-answer-1").value);
  const feedback = document.getElementById("level3-solution-1");

  if (isNaN(userAnswer)) {
    feedback.textContent = "Please enter a whole number.";
  } else if (userAnswer === currentLevel3Answer) {
    feedback.textContent = "✅ Correct!";
  } else {
    feedback.textContent = `❌ Incorrect. The correct answer is ${currentLevel3Answer}.`;
  }

  feedback.style.display = "block";
}

//Algebra Section
let currentAlgebraAnswer1 = null;
let useXInNumerator = true; // toggles between formats

function generateAlgebraProblem1() {
  let problemText = "";
  let x;

  if (useXInNumerator) {
    // Format: (ax + c)/b = d → x is whole
    const a = Math.floor(Math.random() * 5 + 1);     // 1–5
    const xVal = Math.floor(Math.random() * 10 + 1); // 1–10
    const c = Math.floor(Math.random() * 10);        // 0–9
    const b = Math.floor(Math.random() * 5 + 1);     // 1–5

    const numerator = a * xVal + c;
    const d = numerator / b;

    if (d % 1 !== 0) return generateAlgebraProblem1(); // retry if not whole

    x = xVal;
    problemText = `Solve for x: (${a}x + ${c}) / ${b} = ${d}`;
  } else {
    // Format: (a + b)/x = d → x is whole
    const a = Math.floor(Math.random() * 10 + 1); // 1–10
    const b = Math.floor(Math.random() * 10 + 1); // 1–10
    const sum = a + b;
    const possibleDivisors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(n => sum % n === 0);
    const xVal = possibleDivisors[Math.floor(Math.random() * possibleDivisors.length)];
    const d = sum / xVal;

    x = xVal;
    problemText = `Solve for x: (${a} + ${b}) / x = ${d}`;
  }

  currentAlgebraAnswer1 = x;
  useXInNumerator = !useXInNumerator; // toggle for next problem

  document.getElementById("algebra-problem-1").textContent = problemText;
  document.getElementById("algebra-answer-1").value = "";
  document.getElementById("algebra-solution-1").style.display = "none";
}

function showAlgebraSolution1() {
  const userAnswer = parseInt(document.getElementById("algebra-answer-1").value);
  const feedback = document.getElementById("algebra-solution-1");

  if (isNaN(userAnswer)) {
    feedback.textContent = "Please enter a whole number.";
  } else if (userAnswer === currentAlgebraAnswer1) {
    feedback.textContent = "✅ Correct!";
  } else {
    feedback.textContent = `❌ Incorrect. The correct answer is x = ${currentAlgebraAnswer1}.`;
  }

  feedback.style.display = "block";
}


// Rounding Section
let currentRoundingAnswer = null;
let useThreeDecimals = true; // toggles between XX.XXX and XX.XXXX

function generateRoundingProblem() {
  let number;
  if (useThreeDecimals) {
    number = (Math.random() * 100).toFixed(3); // e.g., 45.678
  } else {
    number = (Math.random() * 100).toFixed(4); // e.g., 45.6789
  }

  currentRoundingAnswer = parseFloat(number).toFixed(2);
  useThreeDecimals = !useThreeDecimals; // toggle for next problem

  const problemText = `Round ${number} to two decimal places`;
  document.getElementById("rounding-problem").textContent = problemText;
  document.getElementById("rounding-answer").value = "";
  document.getElementById("rounding-solution").style.display = "none";
}

function showRoundingSolution() {
  const userAnswer = document.getElementById("rounding-answer").value.trim();
  const feedback = document.getElementById("rounding-solution");

  if (userAnswer === "") {
    feedback.textContent = "Please enter a number.";
  } else if (parseFloat(userAnswer).toFixed(2) === currentRoundingAnswer) {
    feedback.textContent = "✅ Correct!";
  } else {
    feedback.textContent = `❌ Incorrect. The correct answer is ${currentRoundingAnswer}.`;
  }

  feedback.style.display = "block";
}
let currentRoundingAnswer = null;
let useThreeDecimals = true; // toggles between XX.XXX and XX.XXXX

function generateRoundingProblem() {
  let number;
  if (useThreeDecimals) {
    number = (Math.random() * 100).toFixed(3); // e.g., 45.678
  } else {
    number = (Math.random() * 100).toFixed(4); // e.g., 45.6789
  }

  currentRoundingAnswer = parseFloat(number).toFixed(2);
  useThreeDecimals = !useThreeDecimals; // toggle for next problem

  const problemText = `Round ${number} to two decimal places`;
  document.getElementById("rounding-problem").textContent = problemText;
  document.getElementById("rounding-answer").value = "";
  document.getElementById("rounding-solution").style.display = "none";
}

function showRoundingSolution() {
  const userAnswer = document.getElementById("rounding-answer").value.trim();
  const feedback = document.getElementById("rounding-solution");

  if (userAnswer === "") {
    feedback.textContent = "Please enter a number.";
  } else if (parseFloat(userAnswer).toFixed(2) === currentRoundingAnswer) {
    feedback.textContent = "✅ Correct!";
  } else {
    feedback.textContent = `❌ Incorrect. The correct answer is ${currentRoundingAnswer}.`;
  }

  feedback.style.display = "block";
}

//Window Onload Functions
window.onload = function() {
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

  // Trigger initial problems
  generateLevel1Problem();
  generateLevel2Problem();
  generateLevel3Problem();
  generateAlgebraProblem1();
  generateRoundingProblem();
};
