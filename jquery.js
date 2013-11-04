$(document).ready(function(){
$(".main-nav-link").mouseenter(function(){
    $(".main-nav-link").fadeTo(700,0.25);
    $(this).fadeTo(450,1);
    $(this).fadeTo(450,0.5);
    $(this).fadeTo(450,1);

});
 $(".main-nav-link").mouseleave(function(){
        $(".main-nav-link").fadeTo(700,1);
 });
$(".logo").click(function(){
    $(".logo").fadeOut(1000);
});

    $(".logo").click(function(){
        $(".logo").fadeIn(1000);
    });
});