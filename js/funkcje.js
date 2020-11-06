jQuery(function($)
		{
		//resetowanie scrolla
		$.scrollTo(0);
		
		//wywołąnie funkcji srcrollTo dla poszczególnych id w kodzie strony
		$('#link1').click(function() {$.scrollTo($('#aboutus'), 500);});
		$('#link2').click(function() {$.scrollTo($('#oferta'), 500);});
		$('#link3').click(function() {$.scrollTo($('#realizacje'), 500);});
		$('#link4').click(function() {$.scrollTo($('#galeria'), 500);});
		$('#link5').click(function() {$.scrollTo($('#kontakt'), 500);});
		$('.scrollup').click(function() {$.scrollTo($('body'), 1000);});
		
            
         //pokaż skrolla przy przewijaniu okna   
            
            $(window).scroll(function()
		{
			if($(this).scrollTop()>300) $('.scrollup').fadeIn();
				else $('.scrollup').fadeOut();
				
		}
		);
            
		}
		
		);
       
		var nr = 1;
         function changepic(param)
        {
           
            
        var path = "<img src=\"images/" + nr + ".jpg\">";
            if (param=='p')
                {
                    
                if (nr==ile_zdj) nr=1;
                    else
                    {
                        nr++;
                    }
                }
            if (param=='l')
                {
                   
                    if (nr==1) nr=ile_zdj
                    else
                        {
                            nr--;
                        }
                }
                    
            path = "<img src=\"images/" + nr + ".jpg\">";
            
            
            document.getElementById("brw").innerHTML=path;
        
        }
        
        function closebrowser()
        {
            stopslideshow();
            document.getElementById("browser1").style.display="none";
        }
	
        function openbrowser()
        {
             document.getElementById("browser1").style.display="block";
        }
        
        //pokaz zdjęć
        var nr=0;
        var plik="";
        var ile_zdj=5;
        var timer=0;
        var flaga=0;
        
        function stopslideshow()
        {
            clearTimeout(timer);
            //zmiana właściwości przycisku play
            document.getElementById("play_btn").setAttribute("onclick","slideshow()");
            document.getElementById("play_btn").style.backgroundColor = "white";
            document.getElementById("play_btn").style.color = "black";
           
            //zmiana właściwości przycisku stop
            
            
            
            setTimeout(zmien_stop);
            
            
            
        }
        
        function zmien_stop()
        {
            if (flaga==0)
                {
            document.getElementById("stop_btn").style.backgroundColor = "white";
            document.getElementById("stop_btn").style.color = "black"; 
            flaga==1;
                }
            else
            {
            document.getElementById("stop_btn").style.backgroundColor = "black";
            document.getElementById("stop_btn").style.color = "white";
            }
            
        }
        
        
        
        function slideshow()
        {
            nr++;
            if (nr>ile_zdj) nr=1;
            plik = "<img src=\"images/"+nr+".jpg\">";
            document.getElementById("brw").innerHTML=plik;
            timer = setTimeout("slideshow()", 3000);
            
            document.getElementById("play_btn").setAttribute("onclick",";");
            document.getElementById("play_btn").style.backgroundColor = "black";
            document.getElementById("play_btn").style.color = "white";  
            
            
        }
        