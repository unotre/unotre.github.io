$(document).ready(function(){

  // Headroom nasconde l'header mentre si scrolla
  $('#header').headroom({
    "offset": 205,
    "tolerance": {
        "up" : 1000,
        "down" : 0
    },
    "classes": {
      "initial": "animated",
      "pinned": "slideDown",
      "unpinned": "slideUp"
    }
  });

  checkbox_relatore();
  $("#relatore").click(checkbox_relatore);

  $("#buttonpartecipa").click(click_partecipa) ;
  $("#buttoncontatta").click(click_contatta) ;

  window.addEventListener("message", function(event) {
    form_submitted(event.data);
  });

});

function checkbox_relatore() {
  if (this.checked) {
    $("#step2").removeClass("disabled");
    $("#buttonpartecipa").removeClass("hidden");
    $("#qualilavori").removeClass("hidden");
    $("#nonconosco").addClass("hidden");

  } else {
    $("#step2").addClass("disabled");
    $("#buttonpartecipa").addClass("hidden");
    $("#qualilavori").addClass("hidden");
    $("#nonconosco").removeClass("hidden");
    $("#buttonpartecipa").addClass("hidden");
    $("#qualilavori").addClass("hidden");
    $("#formpartecipa").addClass("hidden");
  }
}

function click_partecipa() {
  $("#buttonpartecipa").addClass("hidden");
  $("#qualilavori").addClass("hidden");
  $("#formpartecipa").removeClass("hidden");
  return false;
}

function click_contatta() {
  $("#buttoncontatta").addClass("hidden");
  $("#formcontatta").removeClass("hidden");
  return false;
}

function form_submitted(param) {
  if (param == "form_submitted" ) {
    $("#step3").removeClass("disabled");
    $("#formpartecipa").delay(3000).fadeOut(400);
    $("#lotrovato").addClass("hidden");
  }
}
