$(document).ready(function(){

  // about accordion and scrolbar

  $aboutTitle = $('.about-item h2');
  $about = $('.about-item div');

  $about.addClass('scrollbar-rail');

  $aboutTitle.each(function (i) {
    $(this).data('id', i);
  });

  $aboutTitle.on('click', function () {
    $aboutTitle.not($(this)).attr('class', '');
    if($(this).data('id') == 0){
      $(this).toggleClass('about-item--active-1');
    }else if($(this).data('id') == 1){
      $(this).toggleClass('about-item--active-2');
    }else{
      $(this).toggleClass('about-item--active-3');
    }

    $('.scroll-wrapper').not($(this).siblings()).slideUp('slow');
    $(this).css('background', '');
    $(this).siblings().slideToggle('slow');
  });

  jQuery('.scrollbar-rail').scrollbar();

});
