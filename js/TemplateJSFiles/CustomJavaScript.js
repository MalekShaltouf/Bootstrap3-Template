$(document).ready(function(){
    $('.carousel').carousel({
        interval:5000
    });
    /*[start]
     * activate niceScroll
     */
    $("html").niceScroll();

    /*change scroll width,color,border,speed,zinedx,disapleHrizantalScroll,*/
    // $("body,html").niceScroll({cursorcolor:"#F00", cursorwidth: "12px",zindex:9999,horizrailenabled:false});
    //   $("body,html").niceScroll({cursorwidth: "8px",background:"#00F",zindex:9999,horizrailenabled:false});


    //[End]

    /*[start]
     * here we want when click on gear icon => 
     * hide/show option-color div using JQuery
     */
    $(".gearIcon").click(function(){
        /* in order see whats the fade animation that
         * occurred in fadeToggle func open inspect element and 
         * select option-color element(so we note that fade animation idea based on Opacity).
         */
        $(".option-color").fadeToggle();
    });
    //end



    /*[start]
     * here we want to applied change website color using 
     * Elzero way
     */
     var ColorLi = $(".option-color ul li");
        ColorLi.eq(0).css("backgroundColor","#e8e842").end()
               .eq(1).css("backgroundColor","#E41B17").end()
               .eq(2).css("backgroundColor","#0097dc").end()
               .eq(3).css("backgroundColor","#cb01fd").end()
               .eq(4).css("backgroundColor","#20dc2f");

        ColorLi.eq(0).css("border","2px solid #FFF");

        var prevIcon = document.querySelector(".carousel-one .left img");
        var nextIcon = document.querySelector(".carousel-one .right img");
        var ImgSrc = "Images/Arrows-Icons/";
        ColorLi.click(function(){
            debugger;
            ColorLi.css("border","none");//in order to delete white border in previous selected color
            $("link[href*='theme']").attr("href",$(this).attr("data-cssThemePath"));
            $(this).css("border","2px solid #FFF");

            /*
             * here we want change Prev,next icon in slider
             * based on choosed color
             */
             
            switch($(this).data("color")){
                case "yellow":
                    prevIcon.setAttribute("src",ImgSrc + "icons8-back-54.png");
                    nextIcon.setAttribute("src",ImgSrc + "icons8-next-page-54.png");
                    break;
                case "red":
                    prevIcon.setAttribute("src",ImgSrc + "icons8-back-54-red.png");
                    nextIcon.setAttribute("src",ImgSrc + "icons8-next-page-54-red.png");
                    break;
                case "blue":
                    prevIcon.setAttribute("src",ImgSrc + "icons8-back-54-blue.png");
                    nextIcon.setAttribute("src",ImgSrc + "icons8-next-page-54-blue.png");
                    break;
                case "purple":
                    prevIcon.setAttribute("src",ImgSrc + "icons8-back-54-purple.png");
                    nextIcon.setAttribute("src",ImgSrc + "icons8-next-page-54-purple.png");
                    break;
                case "green":
                    prevIcon.setAttribute("src",ImgSrc + "icons8-back-54-green.png");
                    nextIcon.setAttribute("src",ImgSrc + "icons8-next-page-54-green.png");
                    break;                         
            }
        });
     //end

     /*[start]
      * here we want to activate scroll-up button
      * using jquery
      */
     
     $(window).scroll(function(){
         if($(this).scrollTop() >= 700){
             $(".scroll-up").show();
         }
         else{
            $(".scroll-up").hide();
         }
     });
     $(".scroll-up").click(function(){
        $("html,body").animate({scrollTop:0},600);
     });
     //[End]

     
   
});

/*[start]
* here we want to activate scroll-up button
* using pure js 
*/

// var htmlTagElement = document.querySelector("html");
// window.onscroll = function(){
//     if(htmlTagElement.scrollTop >= 700){
//         document.querySelector(".scroll-up").style.display = "block";
//     }
//     else
//     {
//         document.querySelector(".scroll-up").style.display = "none";
//     }
// }
//     document.querySelector(".scroll-up").onclick = function()
//     {  /*
//         * must be add scroll-behavior: smooth; to html element
//         * in css file in order to add smooth move to scroll such as:
//         * html{scroll-behavior: smooth;} 
//         */
//        htmlTagElement.scrollTop = 0;
//     }

//[End]

//Loading Screen using JQuery
//start
$(window).load(function(){
    $(".loading-overlay .sk-chase").fadeOut(2000,function(){
    $("body").css("overflow","visible");
        $(this).parent().fadeOut(2000,function(){
            $(this).remove();
        });
    });
    
});
//end


//Loading Screen using Pure Js
//start
// window.onload = function(){
//     var loadingOverlaySpinner = document.getElementsByClassName("sk-chase")[0];
    
//     loadingOverlaySpinner.classList.add("fadeOut");
//     setTimeout(function(){
//         loadingOverlaySpinner.parentElement.classList.add("fadeOut");
//         document.body.style.overflow = "visible";
//         loadingOverlaySpinner.parentElement.remove();
//     },1000);
     
// }
//end


/*[start]
     * here we want when click on gear icon => 
     * hide/show option-color div using pure javaScript
     */
    // var gearIcon = document.getElementsByClassName("gearIcon")[0];
    
    // gearIcon.onclick = function(){
    //     var optionColorDiv = document.getElementsByClassName("option-color")[0];
    //     optionColorDiv.classList.toggle("hide-show");//hide-show => is class exists in style.css

    // };
    //end



    /*[start]
     * this is way2 to applied change website idea
     * which this way depends on to store type of color
     * in li and get <link/> tag based on give it id such as:
     * A- <link id="layout" rel="stylesheet" href="default_theme.css"/>
     * B- <section class="option-box">

    // var ColorLi = $(".option-color ul li");

    // ColorLi.eq(0).css("backgroundColor","#e8e842");
    // ColorLi.eq(1).css("backgroundColor","#E41B17");
    // ColorLi.eq(2).css("backgroundColor","#0097dc");
    // ColorLi.eq(3).css("backgroundColor","#cb01fd");
    // ColorLi.eq(4).css("backgroundColor","#20dc2f");

    // ColorLi.eq(0).css("border","2px solid #FFF");

    // ColorLi.click(function(){
    //     ColorLi.css("border","none");//in order to delete white border in previous selected color
    //     var color = $(this).data("color"),
    //         linkTag = document.getElementById("layout");

            

    
          <div class="option-color">
            <h4>Color Option</h4>
            <ul class="list-unstyled">
              <li data-color = "yellow"></li>
              <li data-color = "red"></li>
              <li data-color = "blue"></li>
              <li data-color = "purple"></li>
              <li data-color = "green"></li>
            </ul>
          </div>
     *   
     
        switch(color){
            case "yellow":
                linkTag.setAttribute("href","default_theme.css");
                ColorLi.eq(0).css("border","2px solid #FFF");
                break;
            case "red":
                linkTag.setAttribute("href","red_theme.css");
                ColorLi.eq(1).css("border","2px solid #FFF");
                break;
            case "blue":
                linkTag.setAttribute("href","blue_theme.css");
                ColorLi.eq(2).css("border","2px solid #FFF");
                break;
            case "purple":
                linkTag.setAttribute("href","purple_theme.css");
                ColorLi.eq(3).css("border","2px solid #FFF");
                break;
           case "green":
                linkTag.setAttribute("href","green_theme.css");
                ColorLi.eq(4).css("border","2px solid #FFF");
                break;                    
        }
    });
    end
    */
/*
 */

/*
  *[start]
  *here we want when click on Feachers Link fron navBar 
  *we want when navigation to Feachers Section navigate
  *in smoothly way.
 */ 
var FeachersLink = document.querySelector('a[href^="#Feachers"]');
if(FeachersLink != null){
    FeachersLink.onclick = function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    }
}

/*[End]*/