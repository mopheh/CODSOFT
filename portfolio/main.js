//jshint esversion:8

$(document).ready(function () {
  setTimeout(function () {
    $("body").removeClass("no-scroll-y")

    $(".preloader").fadeOut(3000)
  }, 1000)
})

$(".check-btn").click(() => {
  $("body").toggleClass("no-scroll-y")
})

let options = {
  startAngle: -1.55,
  size: 120,
  value: 0.85,
  fill: {
    gradient: ["#732E51", "#e867a9"],
  },
}
$(".circle .bar")
  .circleProgress(options)
  .on("circle-animation-progress", function (event, progress, stepValue) {
    $(this)
      .parent()
      .find("span")
      .text(String(stepValue.toFixed(2).substr(2)) + "%")
  })
$(".js .bar").circleProgress({
  value: 0.6,
})
$(".ejs .bar").circleProgress({
  value: 0.7,
})
$(".mongodb .bar").circleProgress({
  value: 0.6,
})
$(".react .bar").circleProgress({
  value: 0.5,
})
$(".node .bar").circleProgress({
  value: 0.6,
})
$(".php .bar").circleProgress({
  value: 0.5,
})
