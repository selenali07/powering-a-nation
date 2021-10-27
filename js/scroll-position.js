$(document).ready(function () {
  $(".navbar").addClass("transparent-nav");
});
let scroll_pos = 0;
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);
$(document).scroll(function () {
  scroll_pos = $(this).scrollTop();
  if (scroll_pos > vh - 100) {
    $(".navbar").removeClass("transparent-nav");
    console.log(1);
  } else {
    $(".navbar").addClass("transparent-nav");
    console.log(0);
  }
});
