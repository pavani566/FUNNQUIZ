<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>B.Tech First Year Resource Hub</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
        }
        header {
            background-color: #007BFF;
            color: white;
            padding: 20px;
            text-align: center;
        }
        header h1 {
            margin: 0;
        }
        nav {
            display: flex;
            justify-content: center;
            background-color: #333;
        }
        nav a {
            color: white;
            padding: 14px 20px;
            text-decoration: none;
            text-align: center;
        }
        nav a:hover {
            background-color: #575757;
        }
        .container {
            padding: 20px;
        }
        .section {
            margin: 20px 0;
        }
        .section h2 {
            color: #007BFF;
        }
        .section ul {
            list-style-type: none;
            padding: 0;
        }
        .section ul li {
            background-color: #fff;
            margin: 5px 0;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        footer {
            text-align: center;
            padding: 10px;
            background-color: #333;
            color: white;
        }

        /* Quiz Section */
        #quiz-section {
            background-color: #ffffff;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        #quiz-question {
            font-size: 18px;
            margin-bottom: 10px;
        }
        #quiz-answer {
            margin-bottom: 20px;
        }

        /* Calculator Section */
        #calculator {
            padding: 15px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        #calculator input {
            padding: 10px;
            width: 60%;
            font-size: 18px;
            margin-right: 10px;
        }
        #calculator button {
            padding: 10px 20px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        #calculator button:hover {
            background-color: #0056b3;
        }

        /* Timetable Section */
        #timetable {
            background-color: #ffffff;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        #timetable input {
            padding: 8px;
            margin: 5px;
        }
        #timetable button {
            padding: 10px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
        }
        #timetable button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

<header>
    <h1>B.Tech First Year Resource Hub</h1>
    <p>Your one-stop resource for study materials, tools, and tips for success!</p>
</header>

<nav>
    <a href="#quiz">Quiz</a>
    <a href="#calculator">Calculator</a>
    <a href="#timetable">Timetable</a>
</nav>

<div class="container">
    <!-- Quiz Section -->
    <section id="quiz" class="section">
        <h2>Study Quiz</h2>
        <div id="quiz-section">
            <div id="quiz-question"></div>
            <input type="text" id="quiz-answer" placeholder="Enter your answer...">
            <button onclick="checkAnswer()">Submit Answer</button>
            <div id="quiz-feedback"></div>
        </div>
    </section>

    <!-- Calculator Section -->
    <section id="calculator" class="section">
        <h2>Quick Formula Calculator</h2>
        <div id="calculator">
            <input type="number" id="calc-input" placeholder="Enter number...">
            <button onclick="calculate()">Calculate Square</button>
            <div id="calc-result"></div>
        </div>
    </section>

    <!-- Timetable Section -->
    <section id="timetable" class="section">
        <h2>Interactive Timetable</h2>
        <div id="timetable">
            <label for="subject">Subject:</label>
            <input type="text" id="subject" placeholder="Enter subject">
            <label for="time">Time:</label>
            <input type="text" id="time" placeholder="Enter time">
            <button onclick="addToTimetable()">Add to Timetable</button>
            <div id="timetable-display"></div>
        </div>
    </section>
</div>

<footer>
    <p>&copy; 2025 B.Tech First Year Resource Hub. All rights reserved.</p>
</footer>

<script>
    // Quiz functionality
    const questions = [
        { question: "What is the capital of India?", answer: "New Delhi" },
        { question: "What is 2 + 2?", answer: "4" },
        { question: "Who is the father of Computer Science?", answer: "Alan Turing" }
    ];
    let currentQuestionIndex = 0;

    function showQuestion() {
        document.getElementById("quiz-question").innerText = questions[currentQuestionIndex].question;
    }

    function checkAnswer() {
        const userAnswer = document.getElementById("quiz-answer").value;
        const correctAnswer = questions[currentQuestionIndex].answer;
        const feedback = userAnswer.toLowerCase() === correctAnswer.toLowerCase() ? "Correct!" : `Incorrect. The correct answer is ${correctAnswer}.`;
        document.getElementById("quiz-feedback").innerText = feedback;
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        showQuestion();
    }

    // Initializing quiz on page load
    showQuestion();

    // Calculator functionality
    function calculate() {
        const number = document.getElementById("calc-input").value;
        const result = number * number;
        document.getElementById("calc-result").innerText = `Square of ${number} is ${result}`;
    }

    // Timetable functionality
    const timetable = [];

    function addToTimetable() {
        const subject = document.getElementById("subject").value;
        const time = document.getElementById("time").value;
        timetable.push({ subject, time });
        document.getElementById("subject").value = '';
        document.getElementById("time").value = '';
        displayTimetable();
    }

    function displayTimetable() {
        let timetableHTML = '<ul>';
        timetable.forEach(entry => {
            timetableHTML += `<li>${entry.subject} at ${entry.time}</li>`;
        });
        timetableHTML += '</ul>';
        document.getElementById("timetable-display").innerHTML = timetableHTML;
    }
</script>

</body>
</html>
