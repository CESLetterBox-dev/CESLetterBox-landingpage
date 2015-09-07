'use strict';
import 'babelify/polyfill';
import $ from 'jquery';

var shoutbox = {
  mytime: null,

  refresh_shoutbox() {
    $.get('/chat_content.html', (data) => {
      $('div#shoutbox').html(data);
    });
  },

  refresh_time_sb() {
    // Refresh rate in milli seconds
    this.mytime = setTimeout('display_shoutbox()', 10000);
  },

  post_shoutbox() {
    $.post("/cgi-bin/psowrte.py" , $("#sb_form").serialize())
    .success(() => {
      this.refresh_shoutbox();
    });
    $('#shoutbox-input .message').val('');
  },

  display_shoutbox() {
    this.refresh_shoutbox();
    this.refresh_time_sb();
  },

  fnGetDomain(url) {
    return url.match(/:\/\/(.[^/]+)/)[1];
  }
};

$(document).ready(() => {
  // tells you there is a ShoutBox error
  $(document).ajaxError(() => {
    $('div#shoutbox').text( "Triggered ajaxError handler on shoutbox" );
  });

  // submits new text to ShoutBox
  $("#sb_form").submit((event) => {
    event.preventDefault();
    shoutbox.post_shoutbox();
  });

  $.getJSON("/config.json" , (data) => {
    var showbox = data.librarybox.module.shoutbox.status;

    if (showbox) {
      shoutbox.display_shoutbox();
    } else {
      document.getElementById("chatcontainer").style.display = "none";
    }
  });
});

module.exports = shoutbox;