'use strict';
import 'babelify/polyfill';
import $ from 'jquery';

var updateStatsDisplay = (topMax = 10) => {
    var dlStatsDisplayUrl = `/dl_statistics_display.php?sortBy=counter&sortOrder=DESC&list_type=top&top-max=${topMax}&output_type=json`;

    var displayFiles = (data) => {
        var $filesTop = $('p#files-top-default');
        var tableBody = `<ul style="list-style: none; -webkit-padding-start:0px;">`;

        $.each(data, (file) => {
            tableBody += `<li>
                <span class="fp-tops-title">
                    <a href="/dl_statistics_counter.php?DL_URL=${file.url}">${file.filename}</a>
                </span>
                <br />
                <span class="fp-tops-count">
                    &nbsp;&nbsp;${file.counter$} download(s)
                </span>
            </li>`;
        })

        tableBody += `</ul>`;
        $filesTop.html(tableBody);
    }

    $.getJSON(dlStatsDisplayUrl, displayFiles);
};

module.exports = updateStatsDisplay;