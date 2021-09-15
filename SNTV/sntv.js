var slides = document.getElementsByClassName("imageSlider");
        var slide_index = 1;  
        var time = 8000;

        displaySlides(slide_index);
        setInterval( "nextSlide()" , time); 

        function nextSlide() { 
            if (slide_index > slides.length-1 ){ 
                slide_index = 1;
                displaySlides();  
            }else{
                slide_index++ ;
                displaySlides();
            }
        }  
          
        function displaySlides() {  
            var i;  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index - 1].style.display = "flex";  
        }  