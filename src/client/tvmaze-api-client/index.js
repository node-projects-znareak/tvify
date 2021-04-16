/**
 * Module Dependencies
 */

import $ from "jquery";

export function getShows(fn) {
  $.ajax("http://api.tvmaze.com/shows", {
    success: function (shows, textStatus, xhr) {
      $.get("/api/votes", (res) => {
        const votes = res.data;
        shows = shows.map((show) => {
          const vote = votes.filter((vote) => vote.showId === show.id)[0];
          show.count = vote ? vote.count : 0;
          return show;
        });
        fn(shows);
      });
    },
  });
}

export function searchShows(busqueda, fn) {
  $.ajax("http://api.tvmaze.com/search/shows", {
    data: busqueda,
    success: function (res, textStatus, xhr) {
      fn(res);
    },
  });
}
