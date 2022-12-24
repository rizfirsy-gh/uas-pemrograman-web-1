$("button.daftar").click((e) => {
  e.preventDefault();

  if ($("input").val() === "") {
    return alert("Input tidak boleh kosong!");
  }
  $("form").empty();
  $("form").html(
    `<h1>Terimakasih!</h1>
    <br>
    <p>Data telah terkirim dan akan tervalidasi kurang dari 5 menit!</p>
    <br>
    <button>Isi form lagi</button>
    `
  );
});
