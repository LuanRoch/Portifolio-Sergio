jQuery(document).ready(function ($) {
    window.onscroll = function () {
        if (window.pageYOffset > 140) {
            $("#header").addClass("active");
        } else {
            $("#header").removeClass("active");
        }
    };
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    this.classList.toggle("start");

    
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}