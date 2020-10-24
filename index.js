$(document).ready(function () {
    $(window).scroll(function () {
     if (this.scrollY > 100) {
    $(".siden").addClass("sticky");
} else {
    $(".siden").removeClass("sticky")
}  
    })
});


// Dark Mode scripts
$(".derk").click(function () {
    $("body").toggleClass("body-dark");
    $(".section-title").toggleClass("section-title-dark")
    $(".den").toggleClass("section-title-dark")

})
