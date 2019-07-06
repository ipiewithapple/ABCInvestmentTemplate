$(document).ready(function () {

  // Menu show/hide

  $burger = $('.menu__burger');
  $close = $('.menu-close');
  $menu = $('.menu-page');
  $hideObj = $('.menu, .logo');

  $burger.on('click', function () {
    $menu.addClass('menu-pageIn');
    $hideObj.hide(500);
  });
  $close.on('click', function () {
    $menu.removeClass('menu-pageIn');
    $hideObj.show(500);
  });

  // Menu item hover

  $menuLink = $('.header__nav-item');
  $menuList = $('.header__nav-list');

  $menuLink.on('mouseover', function () {
    $menuLink.siblings().css('opacity', '0.3');
    $(this).css('opacity', '1');
  })

  $menuList.on('mouseleave', function () {
    $menuLink.css('opacity', '1');
  })

  // Accordion

  $consTitle = $('.consulting-item h2');
  $consDesc = $('.consulting-item  p');

  $consTitle.each(function (i) {
    $(this).data('id', i);
  });

  $consTitle.on('click', function () {
    $consTitle.not($(this)).attr('class', '');
    if($(this).data('id') == 0){
      $(this).toggleClass('consulting-item--active-1');
    }else if($(this).data('id') == 1){
      $(this).toggleClass('consulting-item--active-2');
    }else{
      $(this).toggleClass('consulting-item--active-3');
    }
    $consDesc.not($(this).next()).slideUp('slow');
    $(this).css('background', '');
    $(this).siblings().slideToggle('slow');
  });

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