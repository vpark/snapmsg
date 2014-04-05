$(document).ready(function(){
    
  //parallax code
  $window = $(window);
  $('[data-type="parallax"]').each(function(){
    var $bgobj = $(this); // assigning the object
     
    $window.scroll(function() {
      var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
             
      // Put together our final background position
      var coords = '50% '+ yPos + 'px';
 
      // Move the background
      $bgobj.css({ backgroundPosition: coords });
    }); 
  });
  
  var rwFontSize = $('.rw-words span').css('font-size');
  console.log(rwFontSize);
  $('.spacer').css('height', rwFontSize);
  
  $(window).resize(function() {
    var rwFontSize = $('.rw-words span').css('font-size');
    $('.spacer').css('height', rwFontSize);
  })
});