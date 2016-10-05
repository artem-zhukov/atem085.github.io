function img_frame_hover(){
    jQuery(".ourTeam .img_frame").hover(
        function () {
            description_height = 300 /*jQuery(this).find(".description").height() + 10*/;
            jQuery("ul", this).not(':animated').animate({top: -description_height}, 'fast')
        },
        function () {
            jQuery("ul", this).animate({top: 0}, 'fast')
        }
    );
}

jQuery(function(){
    img_frame_hover();

    jQuery('.img_frame .container_car').each( function(){
        img_width = jQuery(this).find("img").width();
        img_height = jQuery(this).find("img").height();

        jQuery(this).width(img_width);
        jQuery(this).height(img_height);

        jQuery(this).parent(".img_frame").not("li").width(img_width);
    });

    var carouselData ={
        teamCarousel:{
            ul_width:0,
            current_position:0,
            ul_position:0,
            carouselWidth:0

        },
        reviewCarousel:{
            ul_width:0,
            current_position:0,
            ul_position:0,
            carouselWidth:0
        }
    };

    var li_width = 350;
    var teamCarousel = '.ourTeam';
    var reviewCarousel = '.reviews';
    var listCarousel = document.getElementsByClassName("carousel_mask");
    for(var i in listCarousel){
        if (i<listCarousel.length){
        var str = document.getElementsByClassName("carousel_mask")[i].previousElementSibling.id;
        str = '.'+str;
        str =(str).substring(0, str.length - 15);
        if (str == teamCarousel){
            carouselData.teamCarousel.ul_width = jQuery(str + " ul.carousel_items").children().length * li_width;
            jQuery(str +" ul.carousel_items").css('width', carouselData.teamCarousel.ul_width);
        } else if (str == reviewCarousel){
            carouselData.reviewCarousel.ul_width = jQuery(str + " ul.carousel_items").children().length * li_width;
            jQuery(str +" ul.carousel_items").css('width', carouselData.reviewCarousel.ul_width);
        }
        }
    };



/*    var ul_width = jQuery("ul.carousel_items").children().length * li_width;
    jQuery("ul.carousel_items").css('width', ul_width);*/

    jQuery(".carousel").hover(
        function () {
            jQuery(".carousel_btn_left").not(':animated').show();
            jQuery(".carousel_btn_right").not(':animated').show();
        },
        function () {
            jQuery(".carousel_btn_left").not(':animated').hide();
            jQuery(".carousel_btn_right").not(':animated').hide();
        }
    );


    //Убрать все дублирование!!!!!!


    jQuery(".carousel_btn_left").click(function(){
        //Добавить название блока, где находиться карусель
        var str = $(this)[0].id;
        str = '.'+str;
        str =(str).substring(0, str.length - 14);

        if (str == teamCarousel) {
            carouselData.teamCarousel.ul_position = jQuery(str +" ul.carousel_items").position();
            if (carouselData.teamCarousel.ul_position.left < 0) {
                jQuery(str + " ul.carousel_items").not(':animated').animate({left: '+=335'}, {
                    duration: 'slow',
                    easing: 'easeOutExpo'
                });
            }
        } else if (str == reviewCarousel) {
            carouselData.reviewCarousel.ul_position = jQuery(str +" ul.carousel_items").position();

            if (carouselData.reviewCarousel.ul_position.left < 0) {
                jQuery(str + " ul.carousel_items").not(':animated').animate({left: '+=335'}, {
                    duration: 'slow',
                    easing: 'easeOutExpo'
                });
            }
        }
        return false;
    });

    jQuery(".carousel_btn_right").click(function(){
        //Добавить название блока, где находиться карусель
        var str = $(this)[0].id;
        str = '.'+str;
        str =(str).substring(0, str.length - 15);

        if (str == teamCarousel){
        carouselData.teamCarousel.ul_position = jQuery( str+ " ul.carousel_items").position();
        carouselData.teamCarousel.carouselWidth = jQuery(str +" .carousel").width() + 20;
        carouselData.teamCarousel.current_position = carouselData.teamCarousel.ul_width -(-carouselData.teamCarousel.ul_position.left) - carouselData.teamCarousel.carouselWidth;

/*        var ul_position = jQuery("ul.carousel_items").position();
        var carouselWidth = jQuery(str +" .carousel").width() + 20;
        var current_position = ul_width - (-ul_position.left) - carouselWidth;*/

        if(carouselData.teamCarousel.current_position > 0){
            jQuery(str +" ul.carousel_items").not(':animated').animate({ left: '-=335' }, {
                duration: 'slow',
                easing: 'easeOutExpo'});
        }

        } else if (str == reviewCarousel){

            carouselData.reviewCarousel.ul_position = jQuery( str+ " ul.carousel_items").position();
            carouselData.reviewCarousel.carouselWidth = jQuery(str +" .carousel").width() + 20;
            carouselData.reviewCarousel.current_position = carouselData.reviewCarousel.ul_width -(-carouselData.reviewCarousel.ul_position.left) - carouselData.reviewCarousel.carouselWidth;

            if(carouselData.reviewCarousel.current_position > 0){
                jQuery(str +" ul.carousel_items").not(':animated').animate({ left: '-=335' }, {
                    duration: 'slow',
                    easing: 'easeOutExpo'});
            }
        }

        return false;
    });

});