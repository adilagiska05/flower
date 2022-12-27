var $messages = $(".messages-content"),
  d,
  h,
  m,
  i = 0;

$(window).load(function () {
  $messages.mCustomScrollbar();
  setTimeout(function () {
    fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar("scrollTo", "bottom", {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate() {
  d = new Date();
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ":" + m + "</div>").appendTo(
      $(".message:last")
    );
  }
}

function insertMessage() {
  msg = $(".message-input").val();
  if ($.trim(msg) == "") {
    return false;
  }
  $('<div class="message message-personal">' + msg + "</div>")
    .appendTo($(".mCSB_container"))
    .addClass("new");
  setDate();
  $(".message-input").val(null);
  updateScrollbar();
  setTimeout(function () {
    fakeMessage();
  }, 1000 + Math.random() * 20 * 100);
}

$(".message-submit").click(function () {
  insertMessage();
}); 

$(window).on("keydown", function (e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
});

/* INI ADALAH KATA YANG AKAN BOT TULIS NANTI,JADI KALIAN UBAH AJA SESUAI APA PESAN YANG KALIAN KIRIM KE BOT */
var Fake = [
  "Silahkan ketik apa saja",
  "Hai",
  "Iya saya bot",
  "Kamu yang membuat saya🤖",
  "Tanpa batas",
  "Apa yang perlu saya bantu?",
  "Mudah kamu hanya menambahkan icon",
  "Ya sama sama",
  "Terima kasih,kamu lebih hebat bisa membuat saya😏",
  "ada,jangan bandingkan hidupmu dengan orang lain,karena tidak ada perbandingan antara bulan dan matahari,mereka akan bersinar saat waktunya tiba,begitupun hidupmu",
  "Terima kasih",
  "",
  "saya akan off jika kamu menyuruh saya off",
  "Bye:)",
];

function fakeMessage() {
  if ($(".message-input").val() != "") {
    return false;
  }
  $(
    '<div class="message loading new"><figure class="avatar"><img src="assets/image/smiling.png" /></figure><span></span></div>'
  ).appendTo($(".mCSB_container"));
  updateScrollbar();

  setTimeout(function () {
    $(".message.loading").remove();
    $(
      '<div class="message new"><figure class="avatar"><img src="assets/image/smiling.png" /></figure>' +
        Fake[i] +
        "</div>"
    )
      .appendTo($(".mCSB_container"))
      .addClass("new");
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + Math.random() * 20 * 100);
}