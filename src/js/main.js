'use strict';
import 'babelify/polyfill';
import $ from 'jquery';
import shoutbox from './shoutbox.js';

$(document).ready(() => {
  // toggle nav on-click
  $('#menu-icon').click(() => {
    $('#top-nav ul').slideToggle(500);
  });

  // get forban
  $.get('/forban_link.html', (data) => {
    $('div#forban_link').html(data);
  });

  // get station counter
  $.get('/station_cnt.txt', (data) => {
    $('div#station').html(data);
  });
});
