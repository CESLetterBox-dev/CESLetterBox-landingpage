'use strict';
import 'babelify/polyfill';
import $ from 'jquery';
import 'bootstrap';

var unix_timestamp = Math.round(new Date().getTime() / 1000)

$.getJSON("/vc_counter.php?client_date=" + unix_timestamp , (data) => {
    var visit_count = $('span#vc_count');
    var vc_body = '';
    visit_count.html(vc_body);
});