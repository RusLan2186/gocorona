// ................BURGER................................................

$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.header__burger').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс) 
      $('.header__burger, .header__menu_body').toggleClass('active');
      // при открытом бургере блокируем прокрутку страницы
      $('body').toggleClass('lock');
   });
});

// закрытие бургера, при нажатии на меню
const headerLinks = document.querySelectorAll('.menu__link')
headerLinks.forEach((el) => {
   el.addEventListener('click', () => {
      $('.header__burger,.header__menu_body').toggleClass('active');
      $('body').toggleClass('lock');
   })
})

// ............................................................................................................

var time = 1, cc = 0.7;
$(window).scroll(function () {
   $('#counter').each(function () {
      var
         cPos = $(this).offset().top,
         topWindow = $(window).scrollTop();
      if (cPos < topWindow + 500) {
         if (cc < 2) {
            $('div').each(function () {
               var
                  i = 1,
                  num = $(this).data('num'),
                  step = 1000 * time / num,
                  that = $(this),
                  int = setInterval(function () {
                     if (i <= num) {
                        that.html(i);
                     }
                     else {
                        cc = cc + 2;
                        clearInterval(int);
                     }
                     i++;
                  }, step);
            });
         }
      }
   });
});


window.addEventListener('DOMContentLoaded', function () {
   // класс где лежит видео
   var video = document.querySelector('.experts__video ');

   video.addEventListener('click', function () {
      if (video.classList.contains('ready')) {

         return;
      }
      video.classList.add('ready');
      video.insertAdjacentHTML('afterbegin', '<iframe  src="https://www.youtube.com/embed/KCJ4pdavu-g?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ');
   });
});


// $('.back-to-top').click(function () {
//    $('body,html').animate({ scrollTop: 0 }, 800); // 800 - Скорость анимации
// });

// $(window).scroll(function () { // Отслеживаем начало прокрутки
//    let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

//    if (scrolled > 350) { // Если высота прокрутки больше 350 - показываем кнопку
//       $('.back-to-top').addClass('back');
//    } else {
//       $('.back-to-top').removeClass('back');
//    }
// });