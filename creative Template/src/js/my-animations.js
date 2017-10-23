$(document).ready(function(){
            //Change the navbar background color based on the scroll amount 
            $(window).scroll(function() {
                if ($(this).scrollTop() >= 880) { // this refers to window
                    $('nav.navbar').css('background' , 'rgba(51,51,51,0.9)');
                }else{
                    $('nav.navbar').css('background' , 'transparent');
                }
            });

            //AGENCY SECTION ANIMATION
            $("#agency").waypoint(function(){
                $("#agency").addClass('animated fadeInDown');
            } , {offset : '100%'});       

            $("#agency1").waypoint(function(){
                $("#agency1").addClass('animated jello');
            } , {offset : '100%'});        

            $("#agency2").waypoint(function(){
                $("#agency2").addClass('animated bounce');
            } , {offset : '100%'});        

            $("#agency3").waypoint(function(){
                $("#agency3").addClass('animated bounce');
            } , {offset : '100%'});        

            $("#agency4").waypoint(function(){
                $("#agency4").addClass('animated jello');
            } , {offset : '100%'});

            //NEWS SECTION ANIMATION
            $("#news1").waypoint(function(){
                $("#news1").addClass('animated fadeInLeft');
            } , {offset : '100%'});

            $("#news2").waypoint(function(){
                $("#news2").addClass('animated fadeInDown');
            } , {offset : '100%'});

            $("#news3").waypoint(function(){
                $("#news3").addClass('animated fadeInUp');
            } , {offset : '100%'});

            $("#news4").waypoint(function(){
                $("#news4").addClass('animated fadeInRight');
            } , {offset : '100%'});

            //BLOG SECTION ANIMATION
            $("#blog").waypoint(function(){
                $("#blog").addClass('animated fadeIn');
            } , {offset : '100%'});

            $("#blog1").waypoint(function(){
                $("#blog1").addClass('animated fadeInLeft');
            } , {offset : '100%'});

            $("#blog2").waypoint(function(){
                $("#blog2").addClass('animated fadeInUp');
            } , {offset : '100%'});

            $("#blog3").waypoint(function(){
                $("#blog3").addClass('animated fadeInDown');
            } , {offset : '100%'});

            $("#blog4").waypoint(function(){
                $("#blog4").addClass('animated fadeInRight');
            } , {offset : '100%'});

            // QUICK SECTION ANIMATION
            
            $("#quick1").waypoint(function(){
                $("#quick1").addClass('animated fadeInLeft');
            } , {offset : '100%'});

            $("#quick2").waypoint(function(){
                $("#quick2").addClass('animated fadeInRight');
            } , {offset : '100%'});


            // KEY SECTION ANIMATION
            $("#phone").waypoint(function(){
                $("#phone").addClass('animated fadeInLeft');
            } , {offset : '100%'});

            $("#key-section-title").waypoint(function(){
                $("#key-section-title").addClass('animated fadeInLeft');
            } , {offset : '100%'});            

            $("#key-section-text").waypoint(function(){
                $("#key-section-text").addClass('animated fadeInLeft');
            } , {offset : '100%'});

            $("#key-section-box-1").waypoint(function(){
                $("#key-section-box-1").addClass('animated fadeInLeft');
            } , {offset : '100%'});

            $("#key-section-box-2").waypoint(function(){
                $("#key-section-box-2").addClass('animated fadeInLeft');
            } , {offset : '100%'});

            $("#key-section-box-3").waypoint(function(){
                $("#key-section-box-3").addClass('animated fadeInLeft');
            } , {offset : '100%'});
        });

        // TEAM SECTION
        $("#team").waypoint(function(){
            $("#team").addClass('animated fadeIn');
        } , {offset : '100%'});

        $("#team1").waypoint(function(){
            $("#team1").addClass('animated fadeInLeft');
        } , {offset : '100%'});

        $("#team2").waypoint(function(){
            $("#team2").addClass('animated fadeInUp');
        } , {offset : '100%'});

        $("#team3").waypoint(function(){
            $("#team3").addClass('animated fadeInDown');
        } , {offset : '100%'});

        $("#team4").waypoint(function(){
            $("#team4").addClass('animated fadeInRight');
        } , {offset : '100%'});

        //Contact Section
        $("#form-inputs").waypoint(function(){
            $("#form-inputs").addClass('animated fadeInRight');
        } , {offset : '100%'});

        $("#form-text-area").waypoint(function(){
            $("#form-text-area").addClass('animated fadeInLeft');
        } , {offset : '100%'});

        $("#form-button").waypoint(function(){
            $("#form-button").addClass('animated fadeInUp');
        } , {offset : '100%'});

