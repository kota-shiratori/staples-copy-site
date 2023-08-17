$(".menu_contents").on("inview", function () {
  $(".tablinks_first").addClass("active");
  $(".tabcontent-first").css("display", "block");
  $("#menu-underlay").toggleClass("active");
});

$(".header__sp-category nav li.has-child ul").on("inview", function () {
  $("#menu-underlay").toggleClass("active");
});

//ドロップダウンの設定を関数でまとめる
function mediaQueriesWin() {
  var width = $(window).width();
  if (width <= 992) {
    //横幅が992px以下の場合
    $(".has-child>a").off("click"); //has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
    $(".has-child>a").on("click", function () {
      //has-childクラスがついたaタグをクリックしたら
      var parentElem = $(this).parent(); // aタグから見た親要素の<li>を取得し
      $(parentElem).toggleClass("active"); //矢印方向を変えるためのクラス名を付与して
      $(parentElem).children("ul").stop().slideToggle(500); //liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
      return false; //リンクの無効化
    });
  } else {
    //横幅が992px以上の場合
    $(".has-child>a").off("click"); //has-childクラスがついたaタグのonイベントをoff(無効)にし
    $(".has-child").removeClass("active"); //activeクラスを削除
    $(".has-child").children("ul").css("display", ""); //スライドトグルで動作したdisplayも無効化にする
  }
}

// ページがリサイズされたら動かしたい場合の記述
$(window).resize(function () {
  mediaQueriesWin(); /* ドロップダウンの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  mediaQueriesWin(); /* ドロップダウンの関数を呼ぶ*/
});

$(".sp_account").on("click", function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $("main").removeClass("open");
    $(".sp_nav").removeClass("open");
    $(".overlay").removeClass("open");
  } else {
    $(this).addClass("active");
    $("main").addClass("open");
    $(".sp_nav").addClass("open");
    $(".overlay").addClass("open");
  }
});
$(".overlay").on("click", function () {
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
    $(".menu-trigger").removeClass("active");
    $("main").removeClass("open");
    $(".sp_nav").removeClass("open");
  }
});
$(document).on("click", function (e) {
  if (!$(e.target).closest(".sp_account").length) {
    $(".sp_nav").removeClass("open");
  }
});

$(function () {
  // ①マウスをボタンに乗せた際のイベントを設定
  $("#menu li").hover(
    function () {
      // ②乗せたボタンに連動したメガメニューをスライドで表示させる
      $(this).find(".menu_contents").stop().slideDown();
      // ③マウスをボタンから離した際のイベントを設定
    },
    function () {
      // ④マウスを離したらメガメニューをスライドで非表示にする
      $(this).find(".menu_contents").stop().slideUp();
    }
  );
});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

$(function () {
  $(".tablinks").click(function () {
    $(".drop2").slideToggle(300);
  });
});
