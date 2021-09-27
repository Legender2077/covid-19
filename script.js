$(document).ready(function(){

        $('#menu').click(function(){
            $(this).toggleClass('fa-times');
            $('.navbar').toggleClass('nav-toggle');
        });

        $(window).on('scroll load',function(){

            $('#menu').removeClass('fa-times');
            $('.navbar').removeClass('nav-toggle');

            if($(window).scrollTop() > 0){
                $('.scroll-top').show();
            }else{
                $('.scroll-top').hide();
            }

            $('section').each(function(){

                let height = $(this).height();
                let offset = $(this).offset().top - 200;
                let top = $(window).scrollTop();
                let id = $(this).attr('id');

                if(top > offset && top < offset + height){
                    $('.navbar ul li a').removeClass('active');
                    $('.navbar').find(`[href="#${id}"]`).addClass('active');
                }
            });
        });

        $('a[href*="#"]').on('click',function(e){

            e.preventDefault();

            $('html, body').animate({

                scrollTop  :  $($(this).attr('href')).offset().top,

            },
            500,
            'linear'
            )

        })
});