<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JavaScript Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
            padding: 20px;
        }
        h1 {
            color: #5a2d88;
            text-align: center;
        }
        .info {
            margin-top: 20px;
            text-align: center;
        }
        .countdown {
            font-size: 24px;
            font-weight: bold;
            color: #ff7f50;
        }
    </style>
</head>
<body>

<h1>JavaScript Example</h1>

<div class="info">
    <p>Current day and time: <span id="current-time"></span></p>
    <p>Math operation result: <span id="math-result"></span></p>
    <p>Countdown: <span class="countdown" id="countdown-timer"></span></p>
</div>

<script>
    // Function to display the current day and time
    function showCurrentTime() {
        const currentDate = new Date();
        const day = currentDate.toLocaleString('en-us', { weekday: 'long' });
        const time = currentDate.toLocaleTimeString();

        document.getElementById("current-time").innerHTML = `${day}, ${time}`;
    }

    // Function to alert the user with a message
    function sendAlert() {
        alert("This is your alert message!");
    }

    // Math method: Calculate the square root of a number
    function mathOperation() {
        const number = 25;
        const squareRoot = Math.sqrt(number);
        document.getElementById("math-result").innerHTML = `The square root of ${number} is ${squareRoot}`;
    }

    // Delay a command using setTimeout
    function delayedMessage() {
        setTimeout(function() {
            alert("This message is delayed by 3 seconds!");
        }, 3000); // 3000 milliseconds = 3 seconds
    }

    // Countdown function
    function startCountdown() {
        let count = 10; // Starting countdown number
        const countdownElement = document.getElementById("countdown-timer");

        const countdownInterval = setInterval(function() {
            countdownElement.innerHTML = count;
            count--;

            if (count < 0) {
                clearInterval(countdownInterval);
     
