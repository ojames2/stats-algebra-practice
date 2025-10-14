// Order of Operations Section
//Level 1 - Order of Operations
let currentLevel1Answer = null;
let useParentheses = true;

function generateLevel1Problem() {
  const problemElement = document.getElementById("level1-problem-1");
  const answerInput = document.getElementById("level1-answer-1");
  const solutionElement = document.getElementById("level1-solution-1");

  let a, b, c, d, e, correctAnswer;
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
      problemElement.textContent = `Evaluate: (${a} + ${b} × ${c}) ÷ (${d} + ${e})`;
    } else {
      correctAnswer = a + (b * c) / d + e;
      problemElement.textContent = `Evaluate: ${a} + ${b} × ${c} ÷ ${d} + ${e}`;
    }
  } while (!Number.isFinite(correctAnswer) || !Number.isInteger(correctAnswer));

  currentLevel1Answer = correctAnswer;
  useParentheses = !useParentheses;

  answerInput.value = "";
  solutionElement.style.display = "none";
  solutionElement.textContent = `✅ Correct answer: ${correctAnswer}`;
}

function showLevel1Solution() {
  const userAnswer = document.getElementById("level1-answer-1").value.trim();
  const feedback = document.getElementById("level1-solution-1");
  const questionText = document.getElementById("level1-problem-1").textContent;
  const isCorrect = parseFloat(userAnswer) === currentLevel1Answer;

  if (userAnswer === "") {
    feedback.textContent = "Please enter a number.";
  } else if (isCorrect) {
    feedback.textContent = `✅ Correct! The answer is ${currentLevel1Answer}.`;
  } else {
    feedback.textContent = `❌ Incorrect. You entered ${userAnswer}, but the correct answer is ${currentLevel1Answer}.`;
  }

  feedback.style.display = "block";

  // ✅ Send attempt to backend
  fetch('https://your-backend-service.up.railway.app/track-attempt', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      topic: 'Algebra',
      level: 'Level 1',
      question_text: questionText,
      user_answer: userAnswer,
      correct_answer: currentLevel1Answer,
      is_correct: isCorrect,
      source_page: 'mainpage',
      session_id: null
    })
  })
  .then(response => response.text())
  .then(data => console.log('Backend response:', data))
  .catch(error => console.error('Error sending attempt:', error));


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
 // (a + b)² → whole number using evenly randomized values
    const perfectSquares = [4, 9, 16, 25, 36, 49, 64, 81, 100];
    const target = perfectSquares[Math.floor(Math.random() * perfectSquares.length)];
    
    a = Math.floor(Math.random() * (target - 1) + 1);
    b = target - a;
    answer = target * target;
    
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

  // fetch code level 2
  fetch('https://your-backend-service.up.railway.app/track-attempt', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      topic: 'Algebra',
      level: 'Level 2',
      question_text: questionText,
      user_answer: userAnswer,
      correct_answer: currentLevel2Answer,
      is_correct: isCorrect,
      source_page: 'mainpage',
      session_id: null
    })
  })
  .then(response => response.text())
  .then(data => console.log('Backend response:', data))
  .catch(error => console.error('Error sending attempt:', error));
}

// Level 3 – Order of Operations
let currentLevel3Answer = null;
let formatIndex = 0; // cycles through 0–3 for A, B, C, D

function generateLevel3Problem() {
  const problemElement = document.getElementById("level3-problem-1");
  const answerInput = document.getElementById("level3-answer-1");
  const solutionElement = document.getElementById("level3-solution-1");

  let a, b, c, d, expression, correctAnswer;

  do {
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
    c = Math.floor(Math.random() * 10) + 1;
    d = Math.floor(Math.random() * 10) + 1;

    switch (formatIndex) {
      case 0: // Format A: √(a + b) ÷ (c + d)
        const rootNumerator = a + b;
        const denominatorA = c + d;
        if (!Number.isInteger(Math.sqrt(rootNumerator))) continue;
        correctAnswer = Math.sqrt(rootNumerator) / denominatorA;
        expression = `Evaluate: √(${a} + ${b}) ÷ (${c} + ${d})`;
        break;

      case 1: // Format B: (a + b)² ÷ (c + d)
        const squaredNumerator = Math.pow(a + b, 2);
        const denominatorB = c + d;
        correctAnswer = squaredNumerator / denominatorB;
        expression = `Evaluate: (${a} + ${b})² ÷ (${c} + ${d})`;
        break;

      case 2: // Format C: (a + b) ÷ √(c + d)
        const rootDenominator = c + d;
        if (!Number.isInteger(Math.sqrt(rootDenominator))) continue;
        correctAnswer = (a + b) / Math.sqrt(rootDenominator);
        expression = `Evaluate: (${a} + ${b}) ÷ √(${c} + ${d})`;
        break;

      case 3: // Format D: (a + b) ÷ (c + d)²
        const squaredDenominator = Math.pow(c + d, 2);
        correctAnswer = (a + b) / squaredDenominator;
        expression = `Evaluate: (${a} + ${b}) ÷ (${c} + ${d})²`;
        break;
    }
  } while (!Number.isFinite(correctAnswer) || !Number.isInteger(correctAnswer));

  currentLevel3Answer = correctAnswer;
  formatIndex = (formatIndex + 1) % 4;

  answerInput.value = "";
  solutionElement.style.display = "none";
  problemElement.textContent = expression;
  solutionElement.textContent = `✅ Correct answer: ${correctAnswer}`;
}

function showLevel3Solution() {
  const userAnswer = document.getElementById("level3-answer-1").value.trim();
  const feedback = document.getElementById("level3-solution-1");

  if (userAnswer === "") {
    feedback.textContent = "Please enter a number.";
  } else if (parseFloat(userAnswer) === currentLevel3Answer) {
    feedback.textContent = `✅ Correct! The answer is ${currentLevel3Answer}.`;
  } else {
    feedback.textContent = `❌ Incorrect. You entered ${userAnswer}, but the correct answer is ${currentLevel3Answer}.`;
  }

  feedback.style.display = "block";
}

  // fetch code for level 3 
  fetch('https://your-backend-service.up.railway.app/track-attempt', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      topic: 'Algebra',
      level: 'Level 3',
      question_text: questionText,
      user_answer: userAnswer,
      correct_answer: currentLevel3Answer,
      is_correct: isCorrect,
      source_page: 'mainpage',
      session_id: null
    })
  })
  .then(response => response.text())
  .then(data => console.log('Backend response:', data))
  .catch(error => console.error('Error sending attempt:', error));
}

// Algebra Section
let currentAlgebraAnswer1 = null;
let useXInNumerator = true; // toggles between formats

function generateAlgebraProblem1() {
  let a, b, c, xVal, x, d, problemText;

  if (useXInNumerator) {
    // Format A: (ax + c)/b = d → x is whole
    a = Math.floor(Math.random() * 10) + 1;     // 1–10
    xVal = Math.floor(Math.random() * 10) + 1;  // 1–10
    c = Math.floor(Math.random() * 10) + 1;     // 1–10
    b = Math.floor(Math.random() * 10) + 1;     // 1–10

    const numerator = a * xVal + c;
    d = numerator / b;

    if (!Number.isInteger(d)) return generateAlgebraProblem1(); // retry if not whole

    x = xVal;
    problemText = `Solve for x: (${a}x + ${c}) / ${b} = ${d}`;
  } else {
    // Format B: (a + b)/x = d → x is whole
    a = Math.floor(Math.random() * 10) + 1;     // 1–10
    b = Math.floor(Math.random() * 10) + 1;     // 1–10
    const sum = a + b;

    const validDivisors = [];
    for (let i = 1; i <= 10; i++) {
      if (sum % i === 0) validDivisors.push(i);
    }

    if (validDivisors.length === 0) return generateAlgebraProblem1(); // retry if no valid x

    xVal = validDivisors[Math.floor(Math.random() * validDivisors.length)];
    d = sum / xVal;

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
    feedback.textContent = `✅ Correct!`;
  } else {
    feedback.textContent = `❌ Incorrect. The correct answer is x = ${currentAlgebraAnswer1}.`;
  }

  feedback.style.display = "block";
}

  // fetch code for algebra
  fetch('https://your-backend-service.up.railway.app/track-attempt', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      topic: 'Algebra',
      level: 'Algebra',
      question_text: questionText,
      user_answer: userAnswer,
      correct_answer: currentAlgebraAnswer1,
      is_correct: isCorrect,
      source_page: 'mainpage',
      session_id: null
    })
  })
  .then(response => response.text())
  .then(data => console.log('Backend response:', data))
  .catch(error => console.error('Error sending attempt:', error));
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

 //  fetch code for rounding
  fetch('https://your-backend-service.up.railway.app/track-attempt', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      topic: 'Rounding',
      level: 'Rounding',
      question_text: questionText,
      user_answer: userAnswer,
      correct_answer: currentRoundingAnswer,
      is_correct: isCorrect,
      source_page: 'mainpage',
      session_id: null
    })
  })
  .then(response => response.text())
  .then(data => console.log('Backend response:', data))
  .catch(error => console.error('Error sending attempt:', error));
}

//Window Onload Functions
window.onload = function() {
// Level 1 buttons
  document.getElementById("new-level1-btn-1").addEventListener("click", generateLevel1Problem);
  document.getElementById("reveal-level1-btn-1").addEventListener("click", showLevel1Solution);
// Level 2 buttons
  document.getElementById("new-level2-btn-1").addEventListener("click", generateLevel2Problem);
  document.getElementById("reveal-level2-btn-1").addEventListener("click", showLevel2Solution);
// Level 3 buttons
  document.getElementById("new-level3-btn-1").addEventListener("click", generateLevel3Problem);
  document.getElementById("reveal-level3-btn-1").addEventListener("click", showLevel3Solution);
//Algebra buttons
  document.getElementById("new-algebra-btn-1").addEventListener("click", generateAlgebraProblem1);
  document.getElementById("reveal-algebra-btn-1").addEventListener("click", showAlgebraSolution1);
//Rounding buttons
  document.getElementById("new-rounding-btn").addEventListener("click", generateRoundingProblem);
  document.getElementById("reveal-rounding-btn").addEventListener("click", showRoundingSolution);
//Comprehensive quiz button
  document.getElementById("comprehensive-quiz-btn").addEventListener("click", launchComprehensiveQuiz);
  document.getElementById("comprehensive-quiz-btn").addEventListener("click", launchComprehensiveQuiz);
//Level 1 quiz button
  document.getElementById("quiz-level1-btn-1").addEventListener("click", () => {
  window.open("level1-quiz.html", "_blank");
});
}
// Trigger initial problems
generateLevel1Problem();
generateLevel2Problem();
generateLevel3Problem();
generateAlgebraProblem1();
generateRoundingProblem();

