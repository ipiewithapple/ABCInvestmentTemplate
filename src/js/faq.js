$(document).ready(function () {

  $faqTitle = $('.faq-item h2');
  $faqDiv = $('.faq-item div');

  $faqTitle.on('click', function(){
    $('.faq-item').not($(this).parent()).removeClass('faq-item--open');
    $(this).parent().toggleClass('faq-item--open');
    $faqDiv.not($(this).next()).slideUp('slow ');
    $(this).next().slideToggle();
  })

});