$(document).ready(function(){


  







   $('#menu').delay(300).animate({
      width: '0px',
      padding: '0px',
   });
   $('#web_logo, #cancel, #nav_menu').css({
      opacity: 0.0,
      display: "none",
      transition: '0.2s easein' 
   });
   $('.menu').click(function(){
      // alert('this is good');
      $('#menu').animate({
         width: '100%', 
         // display: 'block',
         padding: '0px 15px',
      });

      $('#web_logo, #cancel, #nav_menu').delay(300).css({
         display:'block',
         opacity: 1,
      });
   });

   $('#cancel').click(function(){
      // alert('this is good');
      $('#web_logo, #cancel, #nav_menu').css({ 
         opacity: 0.0, 
         display: 'none', 
      });
      $('#menu').delay(300).animate({
         width: '0vw', 
         // display: 'none',
         padding: '0px 0px',
      }, );


      $('#shine1').animate({
         right: '-481px',
         opacity: 0,
      });
      $('#shine2').animate({
         right: "-110px",
         opacity: 0,
      });
      $('.circle').animate({
         opacity: 0,
      });

      $('#shine1').delay(500).animate({
         right: "-315px",
         opacity: 1,
      });
      $('#shine2').delay(500).animate({
         right: '-267px',
         opacity: 1,
      });
      $('.circle').delay(500).animate({
         opacity: 1,
      });

      
      
   });


   // scew shine css.
   $('#shine1').delay(1000).animate({
      right: "-315px",
      opacity: 1,
   });
   $('#shine2').delay(1000).animate({
      right: '-267px',
      opacity: 1,
   });

   //circle
   $('.circle').delay(1000).animate({
      opacity: 1,
   });

   //drop menu
   $('.nav_drop_links').css({display: 'none', opacity: 0.0, });
   $('.nav_drop').click(function(){
      // alert('this is good');
      $('.nav_drop_links').css({display: 'none', opacity: 0.0, });
      $(this).children('.nav_drop_links').css({display: 'block',}).animate({opacity: 1});
   });

   $('.slide_box_image > img').css({
      opacity: 0.0 ,
      width: '0',
   });
   $('.slide_box_image > img').delay(500).animate({
      opacity: 1.0 ,
      width: '100%',
   });




   var prevScrollpos = window.pageYOffset;
    var mybutton = document.getElementById("href_top");

    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            if(currentScrollPos < 20 || currentScrollPos < 20){
                document.getElementById('navbar').style.cssText="top: 0px; position:  absolute";
            }else{
                document.getElementById('navbar').style.cssText="top: 0px; position: fixed ";
            }
        
        } else {
        document.getElementById("navbar").style.top = "-124px";
        }
        prevScrollpos = currentScrollPos;

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        } else {
        mybutton.style.display = "none";
        }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }


    // scroll top animation
    $('#href_top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
   
});





// let menu_box = document.getElementsById('menu');
// let menu =  document.getElementsById('nav_bg');
// menu.classText({});
// menu.onClick = show_menu();
// function show_menu(){
//    alert('this is good');
// }

  
