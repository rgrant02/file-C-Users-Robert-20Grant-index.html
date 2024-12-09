<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Learn about wick candles, their types, and how they work.">
    <title>Wick Candles</title>
    <link rel="stylesheet" href="style.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        /* Navigation Bar Styles */
        nav {
            background-color: #333;
            overflow: hidden;
        }

        nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
        }

        nav ul li {
            flex: 1;
        }

        nav ul li a {
            display: block;
            padding: 14px 20px;
            color: white;
            text-align: center;
            text-decoration: none;
        }

        nav ul li a:hover {
            background-color: #575757;
        }

        /* Responsive Nav Bar for Small Screens */
        @media (max-width: 600px) {
            nav ul {
                flex-direction: column;
                display: none;
            }

            nav ul li a {
                padding: 10px;
            }

            nav ul.show {
                display: block;
            }

            #menuToggle {
                display: block;
                background-color: #333;
                color: white;
                padding: 10px;
                text-align: center;
                cursor: pointer;
            }
        }
    </style>
</head>
<body>

    <header>
        <h1>Wick Candles</h1>
    </header>

    <!-- Navigation Bar -->
    <nav>
        <div id="menuToggle">☰ Menu</div>
        <ul id="menu">
            <li><a href="#intro">Introduction</a></li>
            <li><a href="#types">Types of Wick Candles</a></li>
            <li><a href="about.html">About Wick Candles</a></li>
            <li><a href="contact.html">Contact Us</a></li>
        </ul>
    </nav>

    <!-- Content Sections -->
    <section id="intro">
        <h2>What Are Wick Candles?</h2>
        <p>Wick candles are candles that use a wick—a slender piece of material, typically made of braided cotton, hemp, or other natural fibers, to create and sustain the flame when lit.</p>
    </section>

    <section id="types">
        <h2>Types of Wick Candles</h2>
        <p>Different types of wicks, such as flat, braided, or twisted, affect the burning characteristics of the candle.</p>
    </section>

    <section id="images">
        <h2>Wick Candle Examples</h2>
        <img src="https://example.com/candle-image.jpg" alt="Wick candle burning" width="300" height="400">
    </section>

    <footer>
        <p>&copy; 2024 Wick Candles, All Rights Reserved.</p>
    </footer>

    <!-- JavaScript for toggling the menu -->
    <script>
        // Get references to the menu and toggle button
        const menuToggle = document.getElementById('menuToggle');
        const menu = document.getElementById('menu');

        // Add event listener to toggle the menu
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('show');
        });
    </script>

</body>
</html>
