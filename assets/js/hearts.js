$(document).ready(function () {
  var love = setInterval(function () {
    // Limit the number of hearts on screen
    if ($(".heart").length >= 40) return;

    // Generate heart properties
    var r_size = Math.floor(Math.random() * 32.5) + 5; // Keep sizes consistent
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_time = Math.random() * 7 + 7; // Slower range: 7s to 14s
    var r_bg;

    // Assign 15% hearts with #fed136
    if (Math.random() < 0.15) {
      r_bg = "#fed136";
    } else {
      var r_bg_base = Math.floor(Math.random() * 25) + 100;
      r_bg = `rgba(255,${r_bg_base - 25},${r_bg_base},1)`;
    }

    // 10% hearts wobble
    var wobbleEffect = Math.random() < 0.10 ? "wobble" : "love";

    // Append heart
    $(".bg_heart").append(
      "<div class='heart' style='width:" +
        r_size +
        "px;height:" +
        r_size +
        "px;left:" +
        r_left +
        "%;background:" +
        r_bg +
        ";animation:" +
        wobbleEffect +
        " " +
        r_time +
        "s ease'></div>"
    );

    // Cleanup out-of-view hearts
    $(".heart").each(function () {
      var top = $(this).css("top").replace(/[^-\d\.]/g, "");
      if (top <= -100) {
        $(this).detach();
      }
    });
  }, 1000); // Slower rate: 1 heart per second
});