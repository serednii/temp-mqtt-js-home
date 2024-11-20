

ymaps.ready(init);
function init() {

  var map = new ymaps.Map('map', {
      center: [ 29.86293697871366,-95.2850092837251],
      zoom: 12,  
       behaviors: ['drag']
  });

//first marker
  var placemark = new ymaps.Placemark([ 29.76293697871366, -95.2850092837251],{   
    hintContent:'<div class="map__hint">This is hint</div>',
    balloonContent:[
      '<div class="map__balloon">',
      '<img class="map__burger-img" src="../images/burger.png" alt="Бургер"/>',
      'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64',
      '</div>'
  ]
  },
  {
            iconLayout: 'default#image',
              iconImageHref: '../images/location.svg',
              iconImageSize: [33, 48],
              iconImageOffset: [-17, -48]
  });
// second marker
  var placemark1 = new ymaps.Placemark([48.98694094390437, 14.49513151610883],{   
    hintContent:'<div class="map__hint">This is hint</div>',
    balloonContent:[
      '<div class="map__balloon">',
      '<img class="map__burger-img" src="../images/burger.png" alt="Бургер"/>',
      'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64',
      '</div>'
  ]
  },
  {
               iconLayout: 'default#image',
              iconImageHref: '../images/location.svg',
              iconImageSize: [33, 48],
              iconImageOffset: [-17, -48]
  });
// // third marker
  var placemark2 = new ymaps.Placemark([48.93694094390437, 14.46513151610883],{   
    hintContent:'<div class="map__hint">This is hint</div>',
    balloonContent:[
      '<div class="map__balloon">',
      '<img class="map__burger-img" src="../images/burger.png" alt="Бургер"/>',
      'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64',
      '</div>'
  ]
  },
  {
               iconLayout: 'default#image',
              iconImageHref: '../images/location.svg',
              iconImageSize: [33, 48],
              iconImageOffset: [-17, -48]
  });


  map.geoObjects.add(placemark);
  map.geoObjects.add(placemark1);
  map.geoObjects.add(placemark2);
}


ymaps.ready(init);
function init() {

  var map = new ymaps.Map('map', {
      center: [ 29.86293697871366,-95.2850092837251],
      zoom: 12,  
       behaviors: ['drag']
  });

}