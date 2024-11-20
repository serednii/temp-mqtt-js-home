


const btnExit = document.querySelector('.btn-exit');

const wrapperForm = document.querySelector(".wrapper-form");


const loginBlock = document.querySelector('.login');
function autentification() {
    // Отримання даних з форми
    const login_username = document.getElementById("login_username").value;
    const login_password = document.getElementById("login_password").value;

    // Створення об'єкту з даними
    var login_data = {
        login_username: login_username,
        login_password: login_password
    };

    console.log(login_data);
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
        body: JSON.stringify(login_data),
    })
        .then(response => response.json())
        .then(result => {
            // Обробка відповіді від сервера
            console.log(result);
            if (result.success) {
                console.log(result.statusUser)
                if (result.statusUser === "admin") {
                    sessionStorage.setItem("statusUser", result.statusUser);
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

export function isAutentifikace() {
    loginBlock?.classList.remove('hidden');
    wrapperForm?.classList.add('hidden');
    // registrationForm?.classList.add('hidden');
    // authorizationForm?.classList.add('hidden');
    btnExit?.classList.remove('hidden');
}

export function notAutentifikace() {
    loginBlock?.classList.add('hidden');
    wrapperForm?.classList.remove('hidden');
    // registrationForm?.classList.remove('hidden');
    // authorizationForm?.classList.remove('hidden');
    btnExit?.classList.add('hidden');
}


export default autentification;



