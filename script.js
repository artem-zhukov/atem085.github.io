$('.parallax-window').parallax({imageSrc: 'img/canDo.jpg'});


$(document).ready(function () {
    var listContDsc = document.getElementsByClassName("reviews-img_frame");
    for (var i in listContDsc) {
        if (i < listContDsc.length) {
            var heightDiv = document.getElementsByClassName("container_desc")[i].clientHeight;
            if (heightDiv >= 250) {
                document.getElementsByClassName("desc")[i].style.height = '200px';
                document.getElementsByClassName("desc")[i].style.overflow = 'hidden';
                document.getElementsByClassName("sh")[i].style.display = "block";
            }
        }
    }
    /*       var list = document.getElementsByClassName("desc");
     for (var i in list) {
     if (i < list.length) {
     console.log(document.getElementsByClassName("container_desc")[i]);
     document.getElementsByClassName("desc")[i].style.height = '200px';
     document.getElementsByClassName("desc")[i].style.overflow = 'hidden';
     document.getElementsByClassName("sh")[i].style.display = "block";
     }
     }*/

});

function showAllText(obj) {
    var idParent = ($(obj).parents('li')[0].id);
    document.getElementById(idParent).style.height = "auto";
    document.getElementById($(obj)[0].previousElementSibling.id).style.height = "auto";
    document.getElementById($(obj)[0].id).style.display = "none";
}


/*document.querySelector("#nav-toggle").addEventListener("click", function () {
    this.classList.toggle("active");
});*/

$(function($){
    $("#phone").mask("(999) 999-9999");
});



/*
$(window).load(function () {

    $('.nav_slide_button').click(function () {
        $('.pull').slideToggle();
/!*        $('.parallax-mirror').offset({top:785});*!/
    });
});
*/

