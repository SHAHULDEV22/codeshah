// <!-- active class script -->
$(document).ready(function(){
    $('ul li').click(function(){
        $('li').removeClass("active");
        $(this).addClass("active");
    });
});