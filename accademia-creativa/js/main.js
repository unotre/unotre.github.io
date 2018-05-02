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

  // Slick
  $('.slideshow').slick({
    //setting-name: setting-value
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

  // Popup partecipante
  $('#popup_partecipante').popup({
    color: 'white',
    opacity: 1,
    transition: '0.3s',
    scrolllock: true,
    autozindex: true
  });

  $('.partecipante').each(function (index) {
    $(this).on('click', (function(){
      $('#popup_partecipante').popup('hide');
      // Popola il popup con i tuoi dati
      $('#popup_partecipante img').attr('src', $(this).data('partecipante-workimage'));
      $('#popup_partecipante h2').text($(this).data('partecipante-name'));
      $('#popup_partecipante p#popup_partecipante_bio').text($(this).data('partecipante-bio'));
      $('#popup_partecipante h3').text($(this).data('partecipante-title'));
      $('#popup_partecipante p#popup_partecipante_workdesc').text($(this).data('partecipante-workdesc'));
      // Binda tasti previous / next solo se esiste un sibling adiacente
      $('#popup_partecipante').removeData('this_partecipante_prev');
      $('#popup_partecipante').data('this_partecipante_prev', $(this).prev());
      $('#popup_partecipante').removeData('this_partecipante_next');
      $('#popup_partecipante').data('this_partecipante_next', $(this).next());
      $('#popup_partecipante #popup_partecipante_prev').off();
      $('#popup_partecipante #popup_partecipante_next').off();
      // Previous
      if ($(this).prev().hasClass('partecipante')) {
        $('#popup_partecipante #popup_partecipante_prev').on('click', (function() {
          $($('#popup_partecipante').data('this_partecipante_prev')).click();
        }));
        $('#popup_partecipante #popup_partecipante_prev').show();
      } else {
        $('#popup_partecipante #popup_partecipante_prev').hide();
      };
      // Next
      if ($(this).next().hasClass('partecipante')) {
        $('#popup_partecipante #popup_partecipante_next').on('click', (function() {
          $($('#popup_partecipante').data('this_partecipante_next')).click();
        }));
        $('#popup_partecipante #popup_partecipante_next').show();
      } else {
        $('#popup_partecipante #popup_partecipante_next').hide();
      };
      // Mostra il popup
      $('#popup_partecipante').popup('show');
    }));
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
