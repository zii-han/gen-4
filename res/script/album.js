document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxVideo = document.getElementById("lightbox-video");
  const close = document.querySelector(".close");

  items.forEach(item => {
    item.addEventListener("click", function () {
      lightbox.classList.add("active");

      if (item.tagName === "IMG") {
        lightboxImg.src = item.src;
        lightboxImg.style.display = "block";
        lightboxVideo.style.display = "none";
      } else if (item.tagName === "VIDEO") {
        lightboxVideo.src = item.querySelector("source").src;
        lightboxVideo.style.display = "block";
        lightboxImg.style.display = "none";
      }
    });

    item.addEventListener("contextmenu", function (event) {
      event.preventDefault(); // Mencegah menu klik kanan default
      if (item.tagName === "IMG") {
        let link = document.createElement("a");
        link.href = item.src;
        link.download = item.src.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  });

  close.addEventListener("click", function () {
    lightbox.classList.remove("active");
    lightboxVideo.pause();
  });

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      lightbox.classList.remove("active");
      lightboxVideo.pause();
    }
  });
});