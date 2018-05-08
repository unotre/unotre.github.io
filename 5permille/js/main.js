$(document).ready(function(){

  // ==============================================
  // Copyright 2004 by CodeLifter.com
  // Free for all; but please leave in this header.
  // ==============================================

  var Quotation = new Array() // do not change this!

  Quotation[0] = "Il cinque <br/>per millantare.";
  Quotation[1] = "Forza <br/>dichiara!";
  Quotation[2] = "A buon <br/>rendere.";
  Quotation[3] = "La scelta <br/>(troppo) giusta.";
  Quotation[4] = "Meno responsabilità, <br/>più emozioni.";
  Quotation[5] = "Fai seguire i fatti <br/>alle dichiarazioni.";
  Quotation[6] = "Dichiarare <br/>con stile.";
  Quotation[7] = "Hai qualcosa <br/>da dichiarare!";
  Quotation[8] = "A buon <br/>rendere.";
  Quotation[9] = "Meno dichiarazioni, <br/>più azioni.";
  Quotation[10] = "La migliore <br/>destinazione.";

  var whichQuotation = Math.round(Math.random()*(Quotation.length - 1));

  $('#quotation').html(Quotation[whichQuotation]);

  // Fittext per codice fiscale
  $('.codicefiscale h1').fitText(0.9);

  // Headroom nasconde l'header mentre si scrolla
  $('#header').headroom({
    "offset": 200,
    "tolerance": {
        "up" : 0,
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
      $('#popup_partecipante p#popup_partecipante_bio').html($(this).data('partecipante-bio'));
      $('#popup_partecipante h3').text($(this).data('partecipante-title'));
      $('#popup_partecipante p#popup_partecipante_workdesc').html($(this).data('partecipante-workdesc'));
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
        $('#popup_partecipante #popup_partecipante_prev').removeClass('disabled');
      } else {
        $('#popup_partecipante #popup_partecipante_prev').addClass('disabled');
      };
      // Next
      if ($(this).next().hasClass('partecipante')) {
        $('#popup_partecipante #popup_partecipante_next').on('click', (function() {
          $($('#popup_partecipante').data('this_partecipante_next')).click();
        }));
        $('#popup_partecipante #popup_partecipante_next').removeClass('disabled');
      } else {
        $('#popup_partecipante #popup_partecipante_next').addClass('disabled');
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
