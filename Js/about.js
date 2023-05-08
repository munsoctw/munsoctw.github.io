$(document).ready(function() {

    $(".language_select .Ch_lg").click(function() {
        $(".Ch_lg").addClass("active").siblings().removeClass("active");
        $(".content .CH_language").addClass("active").siblings(".EN_language").removeClass("active");
    });
    $(".language_select .En_lg").click(function() {
        $(".En_lg").addClass("active").siblings().removeClass("active");
        $(".content .EN_language").addClass("active").siblings(".CH_language").removeClass("active");
    });
})