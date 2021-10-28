const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);
$(document).scroll(function () {
  scroll_pos = $(this).scrollTop();
  if (scroll_pos > vh - 90) {
    $(".icon-bar").addClass("unhide");
  } else {
    $(".icon-bar").removeClass("unhide");
  }
});
