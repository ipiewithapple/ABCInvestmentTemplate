$(document).ready(function(){

 // Consulting accordion

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

});