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

generateProblem();
