$(document).ready(function () {
  $("a").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var url = $(this).attr("href");
    $("body").animate({
      scrollTop: $("." + url.split("#")[1]).offset().top
  }, 1000);
});
});
