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
  $triangle = $('.consulting-item  p::before');

  $consTitle.each(function (i) {
    $(this).data('id', i);
  });

  $consTitle.on('click', function () {
    $consDesc.not($(this).next()).slideUp('slow');
    $(this).css('background', '');
    $(this).siblings().slideToggle('slow');
  });

});