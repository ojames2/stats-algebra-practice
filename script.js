// Order of Operations Section
function generateProblem() {
  const a = Math.floor(Math.random() * 10 + 1);
  const b = Math.floor(Math.random() * 10 + 1);
  const c = Math.floor(Math.random() * 10 + 1);
  const problem = `${a} + ${b} × ${c}`;
  const answer = a + b * c;

  document.getElementById("problem").innerText = problem;
  document.getElementById("solution").innerText = `Answer: ${answer}`;
  document.getElementById("solution").style.display = "none";
}

function showSolution() {
  document.getElementById("solution").style.display = "block";
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
  generateProblem();              // Order of Operations
  generateAlgebraProblem();       // Algebra
  generateRoundingProblem();      // Rounding
};

