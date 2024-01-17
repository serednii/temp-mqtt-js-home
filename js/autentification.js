

// console.log(document.cookie)
// console.log(sessionStorage.getItem("status"))

const wrapperForm = document.querySelector(".wrapper-form");
const registrationForm = document.querySelector(".registrationForm");
const authorizationForm = document.querySelector(".authorizationForm");

const loginBlock = document.querySelector('.login');
const btnExit = document.querySelector('.btn-exit');


if (sessionStorage.getItem("status") === 'admin') {
    isAutentifikace();
} else {
    notAutentifikace();
}


btnExit?.addEventListener('click', () => {
    sessionStorage.setItem("status", "");
    sessionStorage.setItem("user", "");
    notAutentifikace();
})

function autentification() {


    // Отримання даних з форми
    const login_username = document.getElementById("login_username").value;
    const login_password = document.getElementById("login_password").value;


    // Створення об'єкту з даними
    var login_data = {
        login_username: login_username,
        login_password: login_password
    };
    console.log(login_data)
    // Відправка AJAX-запиту на сервер за допомогою fetch
    fetch('http://temperatura.smm.zzz.com.ua/register.php', {
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
        body: JSON.stringify(login_data),
    })
        .then(response => response.json())
        .then(result => {
            // Обробка відповіді від сервера
            console.log(result)
            if (result.success) {

                if (result.statusUser === "admin") {
                    sessionStorage.setItem("statusUser", result.status);
                    sessionStorage.setItem("user", result.user);
                    isAutentifikace();
                }
            } else {
                alert("Помилка авторизації: " + result.message);
            }
        })
        .catch(error => {
            console.error('Помилка:', error);
        });
}





function isAutentifikace() {
    loginBlock?.classList.remove('hidden');
    wrapperForm?.classList.add('hidden');
    // registrationForm?.classList.add('hidden');
    // authorizationForm?.classList.add('hidden');
    btnExit?.classList.remove('hidden');
}

function notAutentifikace() {
    loginBlock?.classList.add('hidden');
    wrapperForm?.classList.remove('hidden');
    // registrationForm?.classList.remove('hidden');
    // authorizationForm?.classList.remove('hidden');
    btnExit?.classList.add('hidden');
}