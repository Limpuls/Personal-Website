$(document).ready(function () {
  $("a").click(function (event) {
    if ($(this).attr("href") != "https://github.com/Limpuls?tab=repositories") {
        if ($(this).attr("href") != "https://limpuls.github.io/Javascript-Synth/") {
          if ($(this).attr("href") != "http://s1.laimispetravici.us/") {
            if ($(this).attr("href") != "https://nepal-project-cffb1.firebaseapp.com/") {
            
      if ($(this).attr("href") != "Resume.pdf") {

    event.preventDefault();
    event.stopPropagation();
    console.log(this);
    var url = $(this).attr("href");
    console.log(url);
    console.log($("." + url.split("#")[1]).offset().top);
    console.log($("." + url.split("#")[1]));
    $("html, body").animate({
      scrollTop: $("." + url.split("#")[1]).offset().top
  }, 1000);
}
}
}
}
};
})

var header = $(".home");
var nav = $("nav");
var cta = $(".cta");
var h = $("h");
var p = $("p");
TweenLite.from(header, 1, {y: 1000});
TweenLite.from(header, 1.5, {opacity: 100, delay: 0.9});
TweenLite.from(nav, 2, {opacity: 0})
TweenLite.from(cta, 1.3, {x: -400, delay: 0.80});
TweenLite.from(h, 1.5, {x: -400});
TweenLite.from(p, 1.7, {x: -400, delay: 0.1});

var controller = new ScrollMagic.Controller();
var ourScene = new ScrollMagic.Scene({
  triggerElement: ".body_container",
  duration: "60%"
})
  .setClassToggle(".body_container", "fade-in")
  .addTo(controller);


var pinScene = new ScrollMagic.Scene({
  triggerElement: ".body_container",
  triggerHook: 0,
  duration: 120
})
  .setPin(".body_container", {})
  .addTo(controller);


/*
$(".img_placeholder1").click(function() {
  var p = document.createElement("p")
  p.innerHTML = "zdareee";
  $(".description").append(p);
})
*/
});
//$('a[href$="ABC"]')...
//console.log($(this).attr("href") == "resume.pdf")
//console.log($('a[href$="resume.pdf"]').attr('href'))
