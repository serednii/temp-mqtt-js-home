<?php
require 'connect.php';
// Проверка соединения

if ($connect->connect_error) {
    //die("Connection failed: " . $conn->connect_error);
    echo json_encode(["success" => false, "message" => "Connection failed", "error" => $conn->connect_error]);
    exit;
}

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *, Authorization');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Credentials: true');
header("Content-Type: application/json; charset=UTF-8");

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

// Получение данных из формы регистрации (ваш HTML-формат)
$username = $data['username'];
$password = $data['password'];
$login_username = $data['login_username'];
$login_password = $data['login_password'];
//$email= $data['email'];


//Регістрація нового користувача
if ($data['username'] && $data['password']) {

    // Поиск пользователя в базе данных
    $sql = "SELECT * FROM users WHERE username='$username'";
    $result = $connect->query($sql);


    if ($result->num_rows > 0) {
        // Пользователь найден 
        echo json_encode(["success" => false, "message" => "Користувач с таким логіном вже існує"]);
        exit;
    } else {
        // Вставка данных в базу данных
        $hashed_password = password_hash(trim($password), PASSWORD_DEFAULT);
        //$sql = "INSERT INTO users (trim(username), trim(password)) VALUES ('$username', '$password')";
        $sql = "INSERT INTO users (username, password) VALUES ('$username', '$hashed_password')";
        if ($connect->query($sql) === TRUE) {
            echo json_encode(["success" => true, "message" => "Регистрация успешна!"]);
        } else {
            //  echo "Ошибка при регистрации: " . $conn->error;
            echo json_encode(["success" => false, "message" => "Ошибка при регистрации: ", "error" => $connect->error]);
        }

    }


    //Аутентифікація  нового користувача
} elseif ($data['login_username'] && $data['login_password']) {
    // Поиск пользователя в базе данных
    $sql = "SELECT * FROM users WHERE username='$login_username'";
    $result = $connect->query($sql);


    if ($result->num_rows > 0) {
        // Пользователь найден 
        $row = $result->fetch_assoc();
        file_put_contents('login-data.txt', "--" . $row['password'] . "--" . $login_password . "--" . $row['username'] . "\r\n", FILE_APPEND);
        // Перевірка паролю
        if (password_verify(trim($login_password), $row['password'])) {
            //return $row;
            echo json_encode(["success" => true, "message" => "Авторизація успішна", "user" => $row['username'], "statusUser" => "admin"]);
            exit;
        } else {
            echo json_encode(["success" => false, "message" => "такий пароль не існує: "]);
            exit;
        }
    } else {
        echo json_encode(["success" => false, "message" => "такого користувача не існує: "]);
    }

    file_put_contents('login-data.txt', $username . "  " . $password . "  " . "login-test" . "\r\n", FILE_APPEND);













    //if (empty($username) || empty($password)) {
    //  echo json_encode(["success" => false, "message" => "Будь ласка, введіть ім'я користувача та пароль"]);
    // exit;
//}
//if ($username == 'mykola' && $password == '123456') {
    //   echo json_encode(["success" => true, "message" => "Реєстрація успішна", "user"=> "mykola", "status"=>"admin"]);
    // exit;
//}else{
//echo json_encode(["success" => false, "message" => "Будь ласка, введіть правильно ім'я користувача та пароль"]);
//exit;
//}



}

//// Закрытие соединения
$connect->close();



?>