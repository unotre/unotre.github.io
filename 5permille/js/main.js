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

  // Traccia i click sui bottoni
  $('#scrivi1').click(function() {
    ga('send', 'event', 'Scrivi', 'click', '5 per mille');
    fbq('track', 'InitiateCheckout');
  });

  $('#scrivi2').click(function() {
    ga('send', 'event', 'Scrivi', 'click', '5 per mille');
    fbq('track', 'InitiateCheckout');
  });

  $('#condividi').click(function() {
    ga('send', 'event', 'Condividi', 'click', '5 per mille');
    fbq('track', 'Lead');
  });

});
