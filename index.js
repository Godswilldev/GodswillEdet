$(document).ready(function () {
    $(window).scroll(function () {
     if (this.scrollY > 100) {
    $(".siden").addClass("sticky");
} else {
    $(".siden").removeClass("sticky")
}  
    })
    
    $('.works').magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {enabled: true}
})
});


// Dark Mode scripts
$(".derk").click(function () {
    $("body").toggleClass("body-dark");
    $(".section-title").toggleClass("section-title-dark")
    $(".den").toggleClass("section-title-dark")
    $("h3").toggleClass("h3-dark")
    $("h4").toggleClass("h3-dark")

})
