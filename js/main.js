
    




/*






            <script type="text/javascript">
    jQuery(document).ready(function($){
        $( ".click" ).click(function() {
         $( "#hide" ).slideToggle(500);
});

 });








         $(document).ready(function() {
            
             $('.slider').slick({

                dots:true,
                arrows:false,
                autoplay:true,
                autoplaySpeed:1500,
                infinite: true,
                
                slidesToShow: 1,
                adaptiveHeight: true
             });

         });
</script>

    $('.hide').click(function(){
        $('.menu-main-menu-container').slideToggle('slow');
    });



 */


$("#slide").sliderResponsive({

   

    // transition delay

    slidePause: 10000,

   

    // animation speed

    fadeSpeed: 4000,

   

    // enable autoplay

    autoPlay: "on",

   

    // show navigation arrows

    showArrows: "off",

   

    // hide pagination bullets

    hideDots: "off",

   

    // show 'zoom on hover' effect

    hoverZoom: "off",

   

    // place the caption bar on the top

    titleBarTop: "off"

     

  });






  function test () {
    var hideMenu  =document.getElementById('hide');
     var x =hideMenu.style.display=='block';
        if(x==true){
            hideMenu.style.display='none';
        }
        else{
            hideMenu.style.display='block';
        }
}




































//function showMenu(){
                     //var menu = document.getElementBy('hi');

                     // menu.style.background="red";

      

                     /*
                     if (menu.style.display=='none') {
                            menu.style.display='block';
                     }else{

                            menu.style.display='none';
                     }
                 }

                 */