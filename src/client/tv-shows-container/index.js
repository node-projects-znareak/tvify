/**
 * Module Dependencies
 */

import $ from "jquery";

var $tvShowsContainer = $("#app-body").find(".tv-shows");

$tvShowsContainer.on("click", "button.like", function (ev) {
  var $this = $(this);
  const $article = $this.closest(".tv-show");
  const id = $article.data("id");

  $.post("/api/vote/" + id, () => {
    const counterSpan = $article.find("count");
    console.log(counterSpan);
    const counter = Number(counterSpan.html()) + 1;
    counterSpan.html(counter);

    $article.toggleClass("liked");
  });
});

export default $tvShowsContainer;
