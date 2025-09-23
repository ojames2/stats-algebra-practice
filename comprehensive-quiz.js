let comprehensiveQuestions = [];
let formatTrackers = {
  level1: true,
  level2: true,
  level3: 0,
  algebra: true,
  rounding: true
};

function generateComprehensiveQuiz() {
  comprehensiveQuestions = [];
  const quizContainer = document.getElementById("quiz-questions");
  quizContainer.innerHTML = "";

  const categories = ["level1", "level2", "level3", "algebra", "rounding"];

  for (let i = 0; i < 10; i++) {
    const category = categories[i % categories.length];
    let questionText = "", correctAnswer;

    switch (category) {
      case "level1": {
        let a, b, c, d, e;
        do {
          a = rand(1, 10); b = rand(1, 10); c = rand(1, 10); d = rand(1, 10); e = rand(1, 10);
          if (formatTrackers.level1) {
            const numerator = a + b * c;
            const denominator = d + e;
            correctAnswer = numerator / denominator;
            questionText = `Question ${i + 1}: Evaluate (${a} + ${b} × ${c}) ÷ (${d} + ${e})`;
          } else {
            correctAnswer = a + (b * c) / d + e;
            questionText = `Question ${i + 1}: Evaluate ${a} + ${b} × ${c} ÷ ${d} + ${e}`;
          }
        } while (!Number.isInteger(correctAnswer));
        formatTrackers.level1 = !formatTrackers.level1;
        break;
      }

      case "level2": {
        const perfectSquares = [4, 9, 16, 25, 36, 49, 64, 81, 100];
        const target = perfectSquares[rand(0, perfectSquares.length - 1)];
        const a = rand(1, target - 1);
        const b = target - a;

        if (formatTrackers.level2) {
          correctAnswer = Math.sqrt(target);
          questionText = `Question ${i + 1}: What is √(${a} + ${b})?`;
        } else {
          correctAnswer = target * target;
          questionText = `Question ${i + 1}: What is (${a} + ${b})²?`;
        }
        formatTrackers.level2 = !formatTrackers.level2;
        break;
      }

      case "level3": {
        let a, b, c, d;
        do {
          a = rand(1, 10); b = rand(1, 10); c = rand(1, 10); d = rand(1, 10);
          switch (formatTrackers.level3) {
            case 0:
              if (!Number.isInteger(Math.sqrt(a + b))) continue;
              correctAnswer = Math.sqrt(a + b) / (c + d);
              questionText = `Question ${i + 1}: What is √(${a} + ${b}) ÷ (${c} + ${d})?`;
              break;
            case 1:
              correctAnswer = Math.pow(a + b, 2) / (c + d);
              questionText = `Question ${i + 1}: What is (${a} + ${b})² ÷ (${c} + ${d})?`;
              break;
            case 2:
              if (!Number.isInteger(Math.sqrt(c + d))) continue;
              correctAnswer = (a + b) / Math.sqrt(c + d);
              questionText = `Question ${i + 1}: What is (${a} + ${b}) ÷ √(${c} + ${d})?`;
              break;
            case 3:
              correctAnswer = (a + b) / Math.pow(c + d, 2);
              questionText = `Question ${i + 1}: What is (${a} + ${b}) ÷ (${c} + ${d})²?`;
              break;
          }
        } while (!Number.isInteger(correctAnswer));
        formatTrackers.level3 = (formatTrackers.level3 + 1) % 4;
        break;
      }

      case "algebra": {
        let a, b, c, d, xVal;
        if (formatTrackers.algebra) {
          a = rand(1, 10); xVal = rand(1, 10); c = rand(1, 10); b = rand(1, 10);
          const numerator = a * xVal + c;
          d = numerator / b;
          if (!Number.isInteger(d)) { i--; continue; }
          correctAnswer = xVal;
          questionText = `Question ${i + 1}: Solve for x: (${a}x + ${c}) / ${b} = ${d}`;
        } else {
          a = rand(1, 10); b = rand(1, 10);
          const sum = a + b;
          const divisors = Array.from({ length: 10 }, (_, i) => i + 1).filter(x => sum % x === 0);
          if (divisors.length === 0) { i--; continue; }
          xVal = divisors[rand(0, divisors.length - 1)];
          d = sum / xVal;
          correctAnswer = xVal;
          questionText = `Question ${i + 1}: Solve for x: (${a} + ${b}) / x = ${d}`;
        }
        formatTrackers.algebra = !formatTrackers.algebra;
        break;
      }

      case "rounding": {
        const number = formatTrackers.rounding
          ? (Math.random() * 100).toFixed(3)
          : (Math.random() * 100).toFixed(4);
        correctAnswer = parseFloat(number).toFixed(2);
        questionText = `Question ${i + 1}: Round ${number} to two decimal places`;
        formatTrackers.rounding = !formatTrackers.rounding;
        break;
      }
    }

    comprehensiveQuestions.push({ questionText, correctAnswer });

    const questionDiv = document.createElement("div");
    questionDiv.className = "quiz-question";

    const label = document.createElement("label");
    label.textContent = questionText;

    const input = document.createElement("input");
    input.type = "number";
    input.className = "quiz-answer";
    input.dataset.index = i;

    questionDiv.appendChild(label);
    questionDiv.appendChild(input);
    quizContainer.appendChild(questionDiv);
  }
}

function gradeComprehensiveQuiz(event) {
  event.preventDefault();
  let score = 0;
  const feedbackList = document.getElementById("feedback-list");
  feedbackList.innerHTML = "";

  const inputs = document.querySelectorAll(".quiz-answer");
  inputs.forEach((input, index) => {
    const userAnswer = parseFloat(input.value);
    const correctAnswer = comprehensiveQuestions[index].correctAnswer;
    const feedback = document.createElement("p");

    if (isNaN(userAnswer)) {
      feedback.textContent = `Question ${index + 1}: ❌ No answer provided. Correct answer is ${correctAnswer}.`;
    } else if (userAnswer === correctAnswer) {
      feedback.textContent = `Question ${index + 1}: ✅ Correct!`;
      score++;
    } else {
      feedback.textContent = `Question ${index + 1}: ❌ Incorrect. You answered ${userAnswer}, correct answer is ${correctAnswer}.`;
    }

    feedbackList.appendChild(feedback);
  });

  const percent = Math.round((score / comprehensiveQuestions.length) * 100);
  document.getElementById("score-percent").textContent = `Score: ${percent}%`;
  document.getElementById("score-fraction").textContent = `You got ${score} out of ${comprehensiveQuestions.length} correct.`;
  document.getElementById("quiz-results").style.display = "block";
}

function retakeComprehensiveQuiz() {
  document.getElementById("quiz-results").style.display = "none";
  generateComprehensiveQuiz();
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function () {
  generateComprehensiveQuiz();
  document.getElementById("comprehensive-quiz-form").addEventListener("submit", gradeComprehensiveQuiz);
  document.getElementById("retake-quiz-btn").addEventListener("click", retakeComprehensiveQuiz);
};

