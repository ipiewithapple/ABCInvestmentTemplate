$(document).ready(function () {

  // Menu show/hide

  $burger = $('.menu__burger');
  $close = $('.menu-close');
  $menu = $('.menu-page');
  $hideObj = $('.menu, .logo');

  $burger.on('click', function(){
    $menu.show();
    $hideObj.hide();
  });
  $close.on('click', function(){
    $menu.hide();
    $hideObj.show();
  });

  // Menu item hover

  $menuLink = $('.header__nav-item');
  $menuList = $('.header__nav-list');

  $menuLink.on('mouseover', function(evt){
    $menuLink.siblings().css('opacity', '0.3');
    $(this).css('opacity', '1');  
  })

  $menuList.on('mouseleave', function(evt){
    $menuLink.css('opacity', '1');  
  })

});