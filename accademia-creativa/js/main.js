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

  enable_cb();
  $("#relatore").click(enable_cb);

  window.addEventListener("message", function(event) {
    console.log("Hello from " + event.data);
    form_submitted(event.data);
  });

});

function enable_cb() {
  if (this.checked) {
    $("#step2").removeClass("disabled");
    $("#formpartecipa").removeClass("hidden");
  } else {
    $("#step2").addClass("disabled");
    $("#formpartecipa").addClass("hidden");
  }
}

function form_submitted(param) {
  console.log("Ciao corradinnnnyyy: " + param);
  if (param == "form_submitted" ) {
    $("#step3").removeClass("disabled");
  }
}
