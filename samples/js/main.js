//alert(7);

$(document).on('ready', function(){
  
  // $('#section-one').animate({
  //   'opacity': 1
  // },10000);
 
    $(".button4").click(function(){
        
        // $('#section-one').toggle();
        //$('#section-one').slideToggle();

      $('#section-one').animate({
        'opacity': 1
       },2000);
    });

}); // Closes your doc.ready
