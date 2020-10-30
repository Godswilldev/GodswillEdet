$(document).ready(function () {
        $(window).scroll(function () {
            if (this.scrollY > 100) {
                $(".siden").addClass("sticky");
                $('.goUp').fadeIn()
    } else {
        $(".siden").removeClass("sticky")
        $('.goUp').fadeOut()
    }  
        })
        
        $('.works').magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {enabled: true}
    })

    $('.goUp').click(function () {
        scroll(0, 0)
    })
});

// jQuery Ripples

$("section, footer").ripples({
    resolution: 250,
    dropRadius: 20,
    perturbance: 0.04,
    interactive: true,
});
$("section, footer").ripples("drop", 2, 3, 4, 5)
$("section, footer").ripples("play")



// Dark Mode scripts
$(".derk").click(function () {
    $("body").toggleClass("body-dark");
    $(".section-title").toggleClass("section-title-dark")
    $(".den").toggleClass("section-title-dark")
    $(".block").toggleClass("services-dark")

})
