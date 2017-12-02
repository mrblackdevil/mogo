// Nav button
$(document).ready(function() {
  var btn = $('.header__nav-trigger')
  btn.click(function(event) {
    $('.header__nav').toggleClass('active');
  });
});
// Плавный скролл вниз
jQuery(document).ready(function($) {
 $('a.header__list-link').click(function(event) {
   var elementClick = $(this).attr('href');
   var dest = $(elementClick).offset().top;
   $('html,body').animate({scrollTop: dest}, 1100);
   });
   });

// Accordion
$(function() {

  $( "#accordion" ).accordion();

  // Hover states on the static widgets
  $( "#dialog-link, #icons li" ).hover(
    function() {
      $( this ).addClass( "ui-state-hover" );
    },
    function() {
      $( this ).removeClass( "ui-state-hover" );
    }
  );
});
// search
  $(document).ready(function() {
      var btnSearch = $('a.header__search--trigger');
      btnSearch.click(function(event) {
        $('input#search').css('transform', 'translateY(0%)');
      });
  });

// Ajax Send Form
$(document).ready(function() {
  $("#main-form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
// $('#myModal').modal('show');    Вызывает модальное окно
alert('Good');
$('#main-form').trigger("reset");
});
    return false;
  });
})
//

/* Responsive-Tabs doc/GitHub    ->  http://dbmast.ru/samyj-lyogkij-plagin-jquery-dlya-sozdaniya-vkladok-tabov
website how us it             ->  http://dbmast.ru/files/dm-tabs/dmtabs.html
*/

//

/* Magnific Popup  doc/GitHub        ->  https://github.com/dimsemenov/Magnific-Popup
website how us it                 ->  http://dimsemenov.com/plugins/magnific-popup/documentation.html
js file generator default all in  ->  http://dimsemenov.com/plugins/magnific-popup//
*/
$('.test-popup-link').magnificPopup({
  type: 'image'
});
$('.map__main-link').magnificPopup({
  type: 'iframe',


  iframe: {
    patterns: {
      dailymotion: {

        index: 'dailymotion.com',

        id: function(url) {
          var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
          if (m !== null) {
            if(m[4] !== undefined) {

              return m[4];
            }
            return m[2];
          }
          return null;
        },

        src: 'https://snazzymaps.com/embed/31898'

      }
    }
  }


});
//

/* Slider Slick  doc/GitHub          ->  https://github.com/kenwheeler/slick/
website how us it                 ->  http://kenwheeler.github.io/slick/
*/
$(document).ready(function(){
  $('.work__slider, .gallery__slider').slick({
    dots: false,
    infinite: true,
    arrow: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<i class="fa fa-chevron-right">',
    prevArrow: '<i class="fa fa-chevron-left">',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
});
//

/* Scroll Page Back  doc/GitHub      ->  https://github.com/oasan/toTop
website how us it                 ->  https://www.jqueryscript.net/demo/Scroll-Page-To-Top-jQuery-toTop/
*/
$(document).ready(function(){
  $('.totop').tottTop({
scrollTop: 1000, // The height of the document which will show a button
duration: 1000, // scroll animation duration
scrtollTopBtnDuration: 400 // button show animation duration
});
});
//

/* Countdown Timer   doc/GitHub      ->  https://github.com/kbwood/countdown
website how us it                 ->  http://keith-wood.name/countdown.html
*/
$(function () {
  var austDay = new Date();
  austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
  $('#defaultCountdown').countdown({until: austDay});
  $('#year').text(austDay.getFullYear());
});
//

/* Tippy js        doc/GitHub      ->  https://atomiks.github.io/tippyjs/
website how us it              ->   https://popper.js.org/
*/
//

/* Маска для телефона  doc/GitHub      ->  http://digitalbush.com/projects/masked-input-plugin/
website how us it                      ->  https://github.com/digitalBush/jquery.maskedinput
Edit in jquery.js
*/
jQuery(function($){
   $("#date").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});
   $("#phone").mask("(999) 999-9999");
   $("#tin").mask("99-9999999");
   $("#ssn").mask("999-99-9999");
});
//

/* select2  doc/GitHub     ->  https://select2.org/
website how us it          ->  https://github.com/select2/select2
Edit in jquery.js
*/
//

/* AdaptiveMenu  doc/GitHub     ->  https://www.jqueryscript.net/menu/Left-to-right-Push-Menu-With-jQuery-CSS3.html
website how us it               ->  -
*/
$(document).ready(function() {
  $menuLeft = $('.pushmenu-left');
  $nav_list = $('#nav_list');
  $nav_list.click(function() {
    $(this).toggleClass('active');
    $('.pushmenu-push').toggleClass('pushmenu-push-toright');
    $menuLeft.toggleClass('pushmenu-open');
  });
});
//
/*DropDown -> https://codepen.io/mrblackdevil/pen/eeyRpE
*/
var colors = ['1abc9c', '2c3e50', '2980b9', '7f8c8d', 'f1c40f', 'd35400', '27ae60'];

colors.each(function (color) {
  $$('.color-picker')[0].insert(
    '<div class="square" style="background: #' + color + '"></div>'
  );
});

$$('.color-picker')[0].on('click', '.square', function(event, square) {
  background = square.getStyle('background');
  $$('.custom-dropdown select').each(function (dropdown) {
    dropdown.setStyle({'background' : background});
  });
});
//
/*Video Background   Jquery --> https://www.jqueryscript.net/other/Awesome-Video-Background-Plugin-with-HTML5-Youtube-API-YTPlayer.html*/


//
/*Fotorama   http://fotorama.io/
  GitHub     https://github.com/artpolikarpov/fotorama/issues/532
*/

/*Плагины которые могут быть полезны*/
/* jQuery Dependent Dropdowns Demo    doc/GitHub      ->  https://github.com/shorifali/static-dependent-dropdowns-jquery
website how us it                                     ->  https://shorifali.github.io/static-dependent-dropdowns-jquery/app
Данный плагин вносит зависимость от выбора первого пункта далее открывает другой
*/

/* VideoBackground    doc/GitHub      ->  https://github.com/pupunzi/jquery.mb.YTPlayer
website how us it                     ->  https://pupunzi.com/mb.components/mb.YTPlayer/demo/demo.html
*/


/* Parallax        doc/GitHub      ->  https://github.com/wagerfield/parallax
website how us it                  ->  http://matthew.wagerfield.com/parallax/
*/

/* SVG PopUP http://tsumbaluk.in.ua/jquery-svg-popup
*/

/* css parallax background images       https://www.cssscript.com/pure-css-parallax-background-images/
   Tiny Parallax Background Plugin      https://github.com/JB1905/parlx
                                        https://www.jqueryscript.net/demo/Parallax-Background-jQuery-parlx/
*/
