

console.log(document.cookie)
console.log(sessionStorage.getItem("status"))

const form = document.querySelector(".registrationForm");
const loginBlock = document.querySelector('.login');

if (sessionStorage.getItem("status") === 'admin') {
    loginBlock?.classList.remove('hidden');
    form?.classList.add('hidden');
} else {
    loginBlock?.classList.add('hidden');
    form?.classList.remove('hidden');
}

function register() {


    // Отримання даних з форми
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    // Створення об'єкту з даними
    var data = {
        username: username,
        password: password
    };
    console.log(data)
    // Відправка AJAX-запиту на сервер за допомогою fetch
    fetch('./register.php', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(result => {
            // Обробка відповіді від сервера
            console.log(result)
            if (result.success) {



                if (result.status === "admin") {
                    sessionStorage.setItem("status", result.status);
                    sessionStorage.setItem("user", result.user);
                    loginBlock?.classList.remove('hidden');
                    form?.classList.add('hidden');
                }
            } else {
                alert("Помилка реєстрації: " + result.message);
            }
        })
        .catch(error => {
            console.error('Помилка:', error);
        });
}
