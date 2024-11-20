

function register() {

    // Отримання даних з форми
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Створення об'єкту з даними
    var data = {
        username: username,
        password: password
    };
    console.log(data);
    // Відправка AJAX-запиту на сервер за допомогою fetch
    fetch('http://temperatura.smm.zzz.com.ua/register.php', {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(result => {
            // Обробка відповіді від сервера
            console.log(result);
            if (result.success) {
                alert(" Ви успішно зарегістровані: " + result.message);
            } else {
                alert("Помилка реєстрації: " + result.message);
            }
        })
        .catch(error => {
            console.error('Помилка:', error);
        });
}

export default register;




