$(document).ready(function () {
  // ############# nav

  $("nav .nav-btn").click(function () {
    let status = $("nav ul").attr("status");
    if (status == "off") {
      $("nav ul").attr("status", "on");
      $("nav ul").css({ transform: "translateX(0%)" });
    } else {
      $("nav ul").css({ transform: "translateX(-100%)" });
      $("nav ul").attr("status", "off");
    }
  });

  $("nav .nav-btn").blur(function () {
    setTimeout(function () {
      $("nav ul").attr("status", "off");
      $("nav ul").css({ transform: "translateX(-100%)" });
    }, 150);
  });

  $(window).scroll(function () {
    let scroll = $(this).scrollTop();

    if (scroll > 50) {
      $("nav").css({ background: "#165865" });
    } else {
      $("nav").css({ background: "transparent" });
    }

    if (scroll > 200) {
      $(".scrollTop").css({ display: "block" });
    } else {
      $(".scrollTop").css({ display: "none" });
    }
  });

  $(".scrollTop").click(function () {
    $(window).scrollTop(0);
  });
});
