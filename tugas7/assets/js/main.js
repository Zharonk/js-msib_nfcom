$(document).ready(function () {
  $(".card").each(function () {
    $(this).click(function () {
      $("#gambar").remove();
      $("#suara").remove();
      const animal = $(this).find("h5").attr("id");
      $(this).prepend(`<img id="gambar" class="card-img-top" src="assets/images/${animal}.png" alt="${animal}">`);
      $(this).append(`<audio src="assets/audio/${animal}.mp3" autoplay id="suara"></audio>`);
    });
  });
});
