let flag = 0
let num1 = ''
let num2 = ''
let dia = ''
const rez = document.querySelector('.rezult')
function p(e){
    console.log(e)
}
// ************************************************
function click1(){
const el = this.value
if(el === 'CE'){
    flag = 0
    num1 = ''
    num2 = ''
    dia = ''
    rez.innerText = '0'
}


if (flag === 0){//записуємо числа в змінну num1
 num1 = addElNam(el, num1)//складає в змінну num1 числа 
    if(el === '+' || el === '-' || el === '*' || el === '/'){//перевіряємо кнопки + - * /
        flag = 1
        rez.innerText = '0'
        dia = el// запам'ятовуємо вибрану дію
    }

}else if(flag === 1){//записуємо числа в змінну num2
    num2 = addElNam(el, num2)
    if(el === '='){ //перевіряємо кнопку дорівнює
        if(dia === '+'){
            rez.innerText = (Number(num1) + Number(num2)).toFixed(8)
        }else if(dia === '-'){
            rez.innerText = (Number(num1) - Number(num2)).toFixed(8)
        }else if(dia === '/'){
            rez.innerText = (Number(num1) / Number(num2)).toFixed(8)
        }else if(dia === '*'){
            rez.innerText = (Number(num1) * Number(num2)).toFixed(8)
        }
        num1 = ''
        num2 = ''
    }
    
}

}
// ************************************************

function addElNam(el,num){

    if(Number(el) || el === '0' || el === '.'){//пропускаємо числа 0..9 і крапку
       
        num+=el 
        if(num.length>1){

          if(num[0] === '0'&& num[1] !== '.'){ //видаляємо лишні нулі з переді
              num=num.substr(1)
          }
          if(num[0] === '.'){ //додаємо нуль перед крапкою, якщо не поставили
              num='0'+ num
          }
        }
  rez.innerText = num //

}
return num //

}



// document.querySelector('input').onclick = function (){
//     console.log(this.value)
// }
const buttons = document.querySelectorAll('.item input')
p(buttons)



// for(let i=0; i<buttons.length; i++){
//     buttons[i].addEventListener('click', click1)
// }

buttons.forEach((e)=>{
    e.addEventListener('click', click1)
})
