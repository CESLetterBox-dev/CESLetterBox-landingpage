'use strict';
import 'babelify/polyfill';
import $ from 'jquery';

var updateVisitCountDisplay = function (topMax = 10) {
  var visitCountDisplayUrl = "/vc_display.php?sortBy=day&output_type=json&top_max=${topMax}";

  var displayVisits = (data) => {
      var $visit_count = $('p#visitors-top-statspage');

      var tbl_body = '<ul style="list-style: none; -webkit-padding-start:0px;">';

      $.each(data, (visit) => {
          tbl_body += `<li>
              <span class="sp-visitors-date">${visit.day} → </span><span class="sp-visitors-count">${visit.counter}</span>
          </li>`;
      })

      tbl_body += "</ul>";

      $visit_count.html(tbl_body);
  };

  $.getJSON(visitCountDisplayUrl, displayVisits);
};

module.exports = updateVisitCountDisplay;