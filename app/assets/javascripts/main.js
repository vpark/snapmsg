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
  
  var titleWords = $('div[id^="content-"]').hide(),
      i = 0;

  (function cycle() { 

      titleWords.eq(i).fadeIn(600)
                .delay(1000)
                .fadeOut(600, cycle);

      i = ++i % titleWords.length;

  })();
});