/* From https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion */

/*
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    this.classList.toggle("inactive");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}*/

$(".accordion").each(function(i,elem) {
  elem.addEventListener("click", function() {
    this.classList.toggle("active");
    this.classList.toggle("inactive");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});


$(".menulink").each(function(i,elem) {
  elem.addEventListener("click", function() {
    var clicked_name = "contents/" + this.innerHTML + ".txt";
    console.log(clicked_name);
    $("#content").load(clicked_name);
  });
});


/* dynamically load contents */
var btns = document.getElementsByClassName("menulink");
var i;
for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var clicked_name = "contents/" + this.innerHTML + ".txt";
    //console.log(clicked_name);
    $("#content").load(clicked_name);
  });
}