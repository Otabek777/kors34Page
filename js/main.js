$(".header__burgir").click(function() {
    if($(".header__burgir").hasClass("active")) {
        $(".header__burgir").removeClass("rotate");
        $(".header__navbar").removeClass("open");
        setTimeout(function() {
            $(".header__burgir").removeClass("active");
        },300);
    } else {
        $(".header__burgir").addClass("active");
        $(".header__navbar").addClass("open");
        setTimeout(function() {
            $(".header__burgir").addClass("rotate");
        },300);
    };
});
if($(".counter")) {
    var quantity = $(".counter");
    quantity.children(".plus").click(function() {
        $(this).next(".num").val( function(i, oldval) {
            return ++oldval;
        });
    });
    quantity.children(".minus").click(function() {
        if($(this).prev(".num").val() != 1) {
            $(this).prev(".num").val( function(i, oldval) {
                return --oldval;
            });
        };
    });
};
if($(".product__tabBtn")) {
    function TabClick(num) {
        $("#tabBtn-"+num).click(function() {
            $(".product__tabBtn .btn").removeClass("active");
            $(".product__tabBlock").removeClass("active");
            $(this).addClass("active");
            $("#tabBlock-"+num).addClass("active");
        });
    };
    TabClick("1");
    TabClick("2");
}
