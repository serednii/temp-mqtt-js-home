const monitor = document.querySelectorAll('.data-topic');
// const client = new Paho.MQTT.Client("broker.hivemq.com", 8000, "clientId-" + parseInt(Math.random() * 100, 10));
// const client = new Paho.MQTT.Client("broker.hivemq.com", 8000, "clientId-" + Math.random().toString(16).substr(2, 8));
const client = new Paho.MQTT.Client("iot.eclipse.org", Number(80), "/ws", "clientId")
// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// var options = {
//     onSuccess: onConnect,
//     onFailure: doFail
// };

const options = {
    onSuccess: onConnect,
    onFailure: doFail,
    useSSL: false, // Додайте це, якщо не використовуєте SSL
    timeout: 20,    // Таймаут в секундах
    cleanSession: true // Почати нову сесію
};

const objectTopicElement = [];

// connect the client
// client.connect(options);
client.connect(options);

// called when the client connects
const arrayTopic = document.querySelectorAll('[data-topic]');

function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    arrayTopic.forEach(function (e) {
        const topic = e.getAttribute('data-topic')
        client.subscribe(topic);
        const obj = {
            nameTopic: topic,
            element: e
        };
        objectTopicElement.push(obj);
    });
    console.log(arrayTopic);
    console.log("onConnect");
}

// console.log(objectTopicElement);
function doFail(e) {
    console.log(e);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:" + responseObject.errorMessage);
    }
}

// called when a message arrives
function onMessageArrived(message) {
    console.log("onMessageArrived:" + message.payloadString);

    const elIndex = objectTopicElement.findIndex(function (topic) {
        return topic.nameTopic === message.destinationName;
    });

    objectTopicElement[elIndex].lastTime = new Date().getTime(); //записуємо час коли прийшло повідомлення для кожного елемента
    objectTopicElement[elIndex].element.innerText = message.payloadString;
    const _temp = Number(message.payloadString);
    if (message.destinationName != "kotelservo-1/degres" && message.destinationName != "bak/rele" && message.destinationName != "bak/flag_rele" && message.destinationName != "kotel-servo-1/stled") {
        if (_temp <= -40) objectTopicElement[elIndex].element.style.color = "#0000ff";
        else if (_temp > -40 && _temp <= -30) objectTopicElement[elIndex].element.style.color = "#2530dc";
        else if (_temp > -30 && _temp <= -20) objectTopicElement[elIndex].element.style.color = "#414ad8";
        else if (_temp > -20 && _temp <= -10) objectTopicElement[elIndex].element.style.color = "#5b62d0";
        else if (_temp > -10 && _temp <= -5) objectTopicElement[elIndex].element.style.color = "#777cce";
        else if (_temp > -5 && _temp <= 0) objectTopicElement[elIndex].element.style.color = "#7379b0";
        else if (_temp > 0 && _temp <= 5) objectTopicElement[elIndex].element.style.color = "#7478af";
        else if (_temp > 5 && _temp <= 10) objectTopicElement[elIndex].element.style.color = "#737593";
        else if (_temp > 10 && _temp <= 15) objectTopicElement[elIndex].element.style.color = "#000000";
        else if (_temp > 15 && _temp <= 20) objectTopicElement[elIndex].element.style.color = "#f6c7c7";
        else if (_temp > 20 && _temp <= 30) objectTopicElement[elIndex].element.style.color = "#e69898";
        else if (_temp > 30 && _temp <= 40) objectTopicElement[elIndex].element.style.color = "#e65a5a";
        else if (_temp > 40 && _temp <= 50) objectTopicElement[elIndex].element.style.color = "#f03c3c";
        else if (_temp > 50 && _temp <= 60) objectTopicElement[elIndex].element.style.color = "#e92020";
        else if (_temp > 60 && _temp <= -70) objectTopicElement[elIndex].element.style.color = "#e91313";
        else if (_temp > 70) objectTopicElement[elIndex].element.style.color = "#ff0000";
    }
    // console.log(message.destinationName + "   " + message.payloadString);
}

const btn = document.querySelector('.kotel-form__send');
const btnTank = document.querySelector('.tank__send');

document.querySelector('.kotel-form__number')?.addEventListener('focus', function (e) {
    e.target.value = '';
});

document.querySelector('.tank__input')?.addEventListener('focus', function (e) {
    e.target.value = '';
});

btn?.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.previousElementSibling.value.match(/^\d{1,3}-/)) {
        //console.log(Number(e.target.previousElementSibling.value.match(/^\d{1,3}/)));
        const num = Number(e.target.previousElementSibling.value.match(/^\d{1,3}/));
        if (num >= 0 && num <= 180) {
            sendMessageTopic('kotel-servo-1', e.target.previousElementSibling.value);
            //console.log(e.target.previousElementSibling.value);
        } else {
            e.target.previousElementSibling.value = 'Error format 123- od 0 do 150';
        }
    } else {
        e.target.previousElementSibling.value = 'Error format 123- od 0 do 150';
    }
});

btnTank?.addEventListener('click', function (e) {
    e.preventDefault();
    sendMessageTopic('flag_obigriv', e.target.previousElementSibling.value);
    //console.log(e.target.previousElementSibling.value);
});

function sendMessageTopic(topic, message) {
    const mes = new Paho.MQTT.Message(message);
    mes.destinationName = topic;
    mes.qos = 0;
    client.send(mes);
}

const interval = setInterval(lastTimeMessage, 1000);
function lastTimeMessage() {
    let ff = false;
    objectTopicElement.forEach(function (e, i) {
        //перебираємо всі обєкти масива
        const lastTimeTemp = ((new Date().getTime() - objectTopicElement[i].lastTime) / 1000).toFixed(2); //Вираховуємо різницю в часі між тим, коли прийшло повідомлення і зараз
        if (lastTimeTemp !== 'NaN') objectTopicElement[i].element.nextElementSibling.innerText = lastTimeTemp; //друкуємо час коли прийшло остання повідомлення секунд назад
        if (lastTimeTemp > 15) {
            //console.log(lastTimeTemp);
            //console.log('************');
            ff = true;
        }
    });
    if (ff) location.reload();
}