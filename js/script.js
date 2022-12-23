$("#cancel").on("click", function (event) {
  $("#input").text(" ");
});

$(".daftar").on("click", (e) => {
  e.preventDefault();
  window.alert("Form akan terkirim! Terimakasih telah mendaftar!");
});
