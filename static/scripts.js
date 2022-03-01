$(document).ready(function(){
    $("body").hide().fadeIn(1700);

    $("#damian").click(function(){
        $("html, body").animate({ scrollTop: 0 }, "easeInOutBack");
    })

    $("#contact").click(function(){
        $('html, body').animate({scrollTop: $(document).height() }, "easeInOutBack");
    })
})