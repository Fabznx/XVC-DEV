<!DOCTYPE html>
<html lang="en">

<head>
    <script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-auth.js"></script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>XVC-DEV | Login</title>
    <link rel="stylesheet" href="./css/login.css">
    <script src="https://kit.fontawesome.com/0684f9cef2.js" crossorigin="anonymous"></script>
    <link rel="icon" href="./img/favicon.ico">
</head>

<body>
    <div class="box">
        <form id="logForm" action="login.php" method="get">
            <h1>Login</h1>
            <input type="email" name="" placeholder="Email" required id="email">
            <input type="password" name="" placeholder="Password" required id="password">
            <button onclick="">Sign In</button>
            <h4>If you do not have an account yet, register here <a href="register.php">Register</a></h4>
        </form>
    </div>


    <footer>
        <p>XVC-DEV - Copyright &copy; 2021</p>
    </footer>
</body>

</html>