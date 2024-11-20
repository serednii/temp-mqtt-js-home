// const body = document.querySelector('body')

// const calc = body.querySelectorAll('.calculator')
// const calc1 = body.querySelector('.calculator1')

// // const items = calc.querySelectorAll('.calculator .item input')
// const items1 = document.querySelectorAll('.calculator1 .item input')
// const elll = calc[0].getElementsByClassName('item')

// calc.forEach(element=>{
//     element.addEventListener('click', function(e){
//         console.log(e.target)
//         console.log(this)
        
//          const btn = e.target.closest('.list').querySelectorAll('.item')
//          btn.forEach((element) =>{
//             element.classList.toggle('red')
//          })
//     })
// })

// // body.addEventListener('click', (e)=> {
// //    const parent = e.target.closest('.calculator')
// //     if(parent){
// //         const buttons = parent.querySelectorAll('.item')
// //         buttons && buttons.forEach(element => {
// //             element.classList.toggle('red')
// //         });
// //     }
// // })

// // body.addEventListener('click', function(e){
// //     // console.log(e.target.closest('.calculator'));
// //     const calcTemp = e.target.closest('.calculator');
// //     if(calcTemp) {
// //         calcTemp.classList.toggle('red')
// //         calcTemp.querySelector('.rezult').innerText='njkghbijh'
// //     }
// // })


// // console.log(Array.from(items))
// console.log(Array.from(elll))
// console.log({a:5})



// // items.forEach((e,i) => {
// //    e.addEventListener('click', function(el) {
// //     // e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
// //        items1[i].defaultValue = el.target.defaultValue
// //    })
// // })

// const a = '6'
// const b = 6


// // calc.addEventListener('click', (e) =>{
// //     items.forEach((el,i) => {

// //         console.log(el)
// //         if(el === e.target){
// //             items1[i].defaultValue = items[i].defaultValue
// //             console.log(i)
// //         }
        
// //     })


// // })







// function fun([a,b,c, ...r]){
// console.log(a,b,c,r)
// }

// const fun1 = function () {
    
// }

// const fun2 =( e) =>{
// return es
// } 
// const fun3 = e => e

// const obj = {
//     name: 'terr',
//     age: 7
// }

// const m =[6,7,9,4,1,2]

// console.log(...m)
// const [v,g,...j]= m

// console.log(v,g,j)
// fun(m)
// const {name,age} = obj
// console.log(name,'/',age)

// function multByFactor (value, multiplier =1){
//     return value * multiplier
// }

// console.log(multByFactor(20, 3));
// console.log(multByFactor(5))

// }

// const obj ={
//     x: 5, 
//     y: 6,
// }

// function objPrint({x}, [f,d,...e]){
    //     console.log(x)
    //     console.log(f,d,e)
    //     console.log(x)
    // }
    
    // const xx = 5, yy = 6;
    // objPrint({x: xx, y: yy}, [xx, 5, yy, 10, 14])
    // const arr=[4,6,1, 12, 44]
    
    // for(let i=0; i < arr.length; i++){
    //     // console.log(arr[i])
        
    // }

    // arr.forEach((a,b,c) =>{
    //     // console.log(a,b,c)
    //     if(a>10 && b<3){
    //         console.log(a)
    //     }
    // })


// document.querySelector('.submit').onsubmit = (e)=>{
//     e.preventDefault();
//     console.log('kjhijlhoiu')
// }





const form = document.querySelector('.form')
const btn = document.querySelector('.btn')
const tableTr = document.querySelectorAll('tbody tr')
const inputs = document.querySelectorAll('.form_student input')
console.log(inputs)
btn.addEventListener('click', (e) => clickBtn(e))
function clickBtn (e){
    e.preventDefault()
    inputs.forEach((e,i) =>{
       tableTr[i].children[0].innerText = i
       tableTr[i].children[1].innerText = e.name
       tableTr[i].children[2].innerText = e.value
    })

    const fd = new FormData(form)


    // tableTr[0].children[2].innerText = fd.get('name')
    // tableTr[1].children[2].innerText = fd.get('lastname')
    // tableTr[2].children[2].innerText = fd.get('email')
    // tableTr[3].children[2].innerText = fd.get('tel')
    // tableTr[4].children[2].innerText = fd.get('birthDate')
    // tableTr[5].children[2].innerText = fd.get('address')
    // tableTr[6].children[2].innerText = fd.get('city')

    const obj = {}
    const arr = []

    for(const pair of fd.entries()){
    //  console.log(pair)  
     arr.push(pair) 
     obj[pair[0]]= pair[1]
    }

    // console.log(arr)
    // console.log(obj)
    // printTableArr(arr)
    // printTableObj(obj)
}

function printTableArr(data){
    data.forEach((e,i) => {
        tableTr[i].children[0].innerText = i
        tableTr[i].children[1].innerText = e[0]
        tableTr[i].children[2].innerText = e[1]
    });
}

function printTableObj(data){
    console.log(data)
    // data.forEach((e,i) => {
        // tableTr[0].children[0].innerText = 0
        // tableTr[0].children[1].innerText = 'name'
        tableTr[0].children[2].innerText = data.name
        tableTr[1].children[2].innerText = data.lastname
        tableTr[2].children[2].innerText = data.email
        tableTr[3].children[2].innerText = data.tel
        tableTr[4].children[2].innerText = data.birthDate
        tableTr[5].children[2].innerText = data.address
        tableTr[6].children[2].innerText = data.city

        let i = 0 
        for (const [key, value] of Object.entries(data)) {
            tableTr[i].children[0].innerText = i
            tableTr[i].children[1].innerText = key
            tableTr[i].children[2].innerText = value
            i++
          }
    // });
}


// const form = document.querySelector('.form1');
// const btn = document.querySelector('.btn');
// const tableTr = document.querySelectorAll('tbody tr');
// console.log(tableTr);
// btn.addEventListener('click', (e)=> clickBtn(e));


// function clickBtn(e){
//     e.preventDefault()
//     const fd = new FormData(form)

//     const arr = [];
//     const obj = {};

//     x = 'arr1'
//     // debugger
//     for(let pair of fd.entries()){
//         console.log(pair);
//         arr.push(pair);
//         obj[pair[0]]=pair[1];
//         obj[x] = pair;
//     }


//     for (var key of fd.values()) {
//         console.log(key);
//         }

//     console.log(arr);
//     console.log(obj);
//     printTable(arr);
// }


// function printTable(data){
//     data.forEach((e,i) => {
//         tableTr[i].children[0].innerText = i
//         tableTr[i].children[1].innerText = e[0]
//         tableTr[i].children[2].innerText = e[1]
//     });
// }


ymaps.ready(init);
function init() {

  var map = new ymaps.Map('map', {
      center: [ 29.86293697871366,-95.2850092837251],
      zoom: 9,  
       behaviors: ['drag']
  });

//first marker
  var placemark = new ymaps.Placemark([ 29.76293697871366, -95.2850092837251],{   
    hintContent:'<div class="map__hint">This is hint</div>',
    balloonContent:[
      '<div class="map__balloon">',
      '<img class="map__burger-img" src="../images/contact/maps/burger.png" alt="Бургер"/>',
      'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64',
      '</div>'
  ]
  },
  {
               iconLayout: 'default#image',
              iconImageHref: '../images/contact/location.png',
              iconImageSize: [33, 48],
              iconImageOffset: [-17, -48]
  });
//second marker
  // var placemark1 = new ymaps.Placemark([48.98694094390437, 14.49513151610883],{   
  //   hintContent:'<div class="map__hint">This is hint</div>',
  //   balloonContent:[
  //     '<div class="map__balloon">',
  //     '<img class="map__burger-img" src="../images/contact/maps/burger.png" alt="Бургер"/>',
  //     'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64',
  //     '</div>'
  // ]
  // },
  // {
  //              iconLayout: 'default#image',
  //             iconImageHref: '../images/contact/location.png',
  //             iconImageSize: [33, 48],
  //             iconImageOffset: [-17, -48]
  // });
// third marker
  // var placemark2 = new ymaps.Placemark([48.93694094390437, 14.46513151610883],{   
  //   hintContent:'<div class="map__hint">This is hint</div>',
  //   balloonContent:[
  //     '<div class="map__balloon">',
  //     '<img class="map__burger-img" src="../images/contact/maps/burger.png" alt="Бургер"/>',
  //     'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64',
  //     '</div>'
  // ]
  // },
  // {
  //              iconLayout: 'default#image',
  //             iconImageHref: '../images/contact/location.png',
  //             iconImageSize: [33, 48],
  //             iconImageOffset: [-17, -48]
  // });


  map.geoObjects.add(placemark);
  map.geoObjects.add(placemark1);
  map.geoObjects.add(placemark2);
}
