$(document).ready(function () {
        $(window).scroll(function () {
            if (this.scrollY > 50) {
                $(".siden").addClass("derk");
                $(".navbar").addClass("sticky");

                $('.goUp').fadeIn()
            } else {
                $(".siden").removeClass("derk")
                $(".navbar").removeClass("sticky")
                $('.goUp').fadeOut()
            }  
        })
        $(".menu-toggler").click(function () {
            $(".menu-toggler").toggleClass("active");
            $(".navbar-menu").toggleClass("active")
        })

        $(".navbar-menu a").click(function () {
            $(".menu-toggler").removeClass("active");
            $(".navbar-menu").removeClass("active")
        })
        
        $('.works').magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {enabled: true}
    })

    $('.goUp').click(function () {
        scroll(0, 0);
    })
});

// jQuery Ripples

$("section, footer").ripples({
    resolution: 100,
    dropRadius: 10,
    perturbance: 0.02,
    interactive: true,
});
$("section, footer").ripples("drop", 0.1, 0.1, 0.5, 0.5)
$("section, footer").ripples("play")



// Dark Mode scripts
$(".siden").click(function () {
    $("body").toggleClass("body-dark");
    $(".section-title").toggleClass("section-title-dark")
    $(".den").toggleClass("section-title-dark")
    $(".block").toggleClass("services-dark")
});
