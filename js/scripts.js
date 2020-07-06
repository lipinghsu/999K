$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 500)
            $(".navBar").addClass("sticky");
        else
            $(".navBar").removeClass("sticky");
    });
    $('.menu-toggler').click(function(){
        $(this).toggleClass("active");
        $(".navBar-menu").toggleClass("active");
    });
});
