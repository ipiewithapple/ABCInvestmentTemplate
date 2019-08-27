$(document).ready(function(){

  $tarifsBtn = $('.join-btn');
  $tarifsClose = $('.tarifs-close');
  $tarifs = $('.tarifs');

  $tarifsBtn.on('click', () =>{
    $tarifs.addClass('tarifsIn');
  });

  $tarifsClose.on('click', () =>{
    $tarifs.removeClass('tarifsIn');
  });
 
 });