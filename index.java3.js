<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tee's Candles - JavaScript Functions</title>
    
    <link rel="stylesheet" href="css.8.css" type="text/css">
    
    <style>
    
    </style>
</head>
<body>
    <h1>Welcome to Tee's Candles</h1>
    <button onclick="showCurrentTime()">Show Current Day and Time</button>
    <button onclick="delayedMessage()">Get Special Offer</button>
    <button onclick="startCountdown(10)">Start Countdown for Flash Sale</button>
    <div id="countdownDisplay"></div>

    <h2>Random Candle Suggestion</h2>
    <button onclick="generateRandomCandleSuggestion()">Get Candle Suggestion</button>

    <h2>Number to Word Conversion (For Candle Sizes)</h2>
    <button onclick="convertNumberToTextExample()">Convert Number (e.g., 5) to Text</button>

    <script>
        // Function to show current day and time
        function showCurrentTime() {
            var currentDate = new Date();
            var currentDay = currentDate.toLocaleDateString(); // Gets the current day (locale format)
            var currentTime = currentDate.toLocaleTimeString(); // Gets the current time

            alert("Current Day and Time: " + currentDay + " " + currentTime);
        }

        // Math Method Example: Generate a random number and round it
        function generateRandomNumber() {
            var randomNumber = Math.random() * 100; // Generates a number between 0 and 100
            var roundedNumber = Math.round(randomNumber); // Rounds the number
            console.log("Generated Random Number (Rounded): " + roundedNumber);
            return roundedNumber;
        }

        // Delayed Function: This function runs after a specified time (3 seconds)
        function delayedMessage() {
            setTimeout(function() {
                alert("Hurry up! Special Offer Just for You! 30% Off on All Candles!");
            }, 3000); // 3000 milliseconds = 3 seconds
        }

        // Countdown Function: A countdown timer that updates every second
        function startCountdown(seconds) {
            var countdownTimer = setInterval(function() {
                document.getElementById("countdownDisplay").innerHTML = "Flash Sale Countdown: " + seconds + " seconds remaining";
                seconds--;

                // When the countdown reaches zero, stop the interval and display a message
                if (seconds < 0) {
                    clearInterval(countdownTimer);
                    document.getElementById("countdownDisplay").innerHTML = "Flash Sale Over!";
                    alert("The Flash Sale has ended. Stay tuned for future deals!");
                }
            }, 1000); // Updates every second (1000ms)
        }

        // Random Candle Suggestion
        function generateRandomCandleSuggestion() {
            var candleTypes = ['Scented Wick Candle', 'Wood Wick Candle', 'Soy Wax Candle', 'Aromatherapy Candle'];
            var candleScent = ['Lavender', 'Vanilla', 'Rosemary', 'Cinnamon', 'Jasmine'];

            var randomCandleType = candleTypes[Math.floor(Math.random() * candleTypes.length)];
            var randomCandleScent = candleScent[Math.floor(Math.random() * candleScent.length)];

            alert("We recommend trying our " + randomCandleType + " with a " + randomCandleScent + " scent!");
        }

        // Convert Number to Text: Convert a number into its textual representation for candle sizes
        function convertNumberToTextExample() {
            var size = 5; // You can change this number to test different values
            var numberWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
            if (size >= 0 && size <= 9) {
                alert("Candle size " + size + " is equivalent to '" + numberWords[size] + "' in words.");
            } else {
                alert("Number out of range for candle sizes.");
            }
        }
    </script>
</body>
</html>
