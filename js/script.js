$("button.cancel").on("click", function (event) {
  $("input").html("");
});

$("button.daftar").on("click", function (event) {
  $("form").on("submit", function (event) {
    event.preventDefault();
    window.alert("berhasil daftar bro!");
    $("input").html("");
  });
});
