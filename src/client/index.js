/**
 * Module Dependencies
 */

import $ from "jquery";
import page from "page";
import { getShows, searchShows } from "./tvmaze-api-client/index.js";
import renderShows from "./render/index.js";
import $tvShowsContainer from "./tv-shows-container/index.js";
import "./search-form/index.js";
import qs from "qs";

page("/", function (ctx, next) {
  $tvShowsContainer.find(".tv-show").remove();
  getShows(function (shows) {
    $tvShowsContainer.find(".loader").remove();
    localStorage.shows = JSON.stringify(shows);
    renderShows(shows);
  });
});

page("/search", function (ctx, next) {
  $tvShowsContainer.find(".tv-show").remove();
  var $loader = $('<div class="loader">');
  $loader.appendTo($tvShowsContainer);
  const busqueda = qs.parse(ctx.querystring);
  searchShows(busqueda, function (res) {
    $loader.remove();
    var shows = res.map(function (el) {
      return el.show;
    });

    renderShows(shows);
  });
});

var productionEnv = !!~window.location.host.indexOf("github.io");

if (productionEnv) {
  page.base("/tvify");
}

page();
