$(document).ready(function(){
  
  $('.parallax').parallax();
  
  // SIDE MENU
  $('.button-collapse').sideNav({
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
  
  // CONTACT MODAL
  $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200 // Transition out duration
    });
  
  // CONTACT
  var name = String.fromCharCode(99, 111, 100, 101, 109, 122, 121);
  
  // SUBMIT
  $("#form-send").on("click", function() {
    var message = $("#contact-form").serialize();
    $.ajax({
        url: '//formspree.io/' + name + '@' + 'gmail' + '.' + 'com', 
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    $('#modal-contact').closeModal();
    Materialize.toast('Thank you for getting in touch!', 5000);
    return true;
});

  // SCROLLING ACTIONS
  window.onscroll = function(){
    var position = $("body").scrollTop();
    // waving
    if (position < 300) {
      waveChange(250);
    } else if (position > 300 && position < 350) {
      waveChange(500);
    } else if (position > 350 && position < 400) {
      waveChange(750);
    } else if (position > 400 && position < 450) {
      waveChange(1000);
    } else if (position > 450 && position < 500) {
      waveChange(0);
    } else if (position > 500 && position < 550) {
      waveChange(1000);
    } else if (position > 550 && position < 600) {
      waveChange(750);
    } else if (position > 600 && position < 650) {
      waveChange(500);
    } else if (position > 650 && position < 700) {
      waveChange(250);
    } else if (position > 700 && position < 750) {
      waveChange(500);
    } else if (position > 750 && position < 800) {
      waveChange(750);
    } else if (position > 800 && position < 850) {
      waveChange(1000);
    } else if (position > 850 && position < 900) {
      waveChange(0);
    } else if (position > 900 && position < 950) {
      waveChange(1000);
    } else if (position > 950 && position < 1000) {
      waveChange(750);
    } else if (position > 1000 && position < 1050) {
      waveChange(500);
    } else if (position > 1050 && position < 1100) {
      waveChange(250);
    } else if (position > 1100 && position < 1150) {
      waveChange(500);
    } else if (position > 1150 && position < 1200) {
      waveChange(750);
    } else if (position > 1200 && position < 1250) {
      waveChange(1000);
    } else if (position > 1250 && position < 1300) {
      waveChange(0);
    } else if (position > 1300 && position < 1350) {
      waveChange(1000);
    } else if (position > 1350 && position < 1400) {
      waveChange(750);
    } else if (position > 1400 && position < 1450) {
      waveChange(500);
    } else if (position > 1450 && position < 1500) {
      waveChange(250);
    } else if (position > 1500 && position < 1550) {
      waveChange(500);
    } else if (position > 1550 && position < 1600) {
      waveChange(750);
    } else if (position > 1600 && position < 1650) {
      waveChange(1000);
    } else if (position > 1650 && position < 1700) {
      waveChange(0);
    }
    
    // lightbulb
    if (position % 300 < 100) {
      $('.lightbulb').css("background-position", "160px");
    } else if (position % 300 < 200) {
      $('.lightbulb').css("background-position", "320px");
    } else {
      $('.lightbulb').css("background-position", "0px");
    }
    // pen
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      $('.pen').css("background-position", "0px");
    } else {
      $('.pen').css("background-position", "325px");
    }
  };
  
  // WAVE IMG FUNCTION
  var waveChange = function(num) {
    $('.wave').css("background-position", num+"px");
  }
  
});