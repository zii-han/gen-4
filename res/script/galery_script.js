document.addEventListener("DOMContentLoaded", function () {
  const mediaFiles = [
    { type: "image", src: "../img/kami/abdan.jpg" },
    { type: "image", src: "../img/kami/afdal.jpg" },
    { type: "image", src: "../img/kami/albert.jpg" },
    { type: "image", src: "../img/kami/fauzan.jpg" },
    { type: "image", src: "../img/kami/chalid.jpg" },
    { type: "image", src: "../img/kami/vino.jpg" },
    { type: "image", src: "../img/kami/david.jpg" },
    { type: "image", src: "../img/kami/delvin.jpg" },
    { type: "image", src: "../img/kami/dhaffa.jpg" },
    { type: "image", src: "../img/kami/xl.jpg" },
    { type: "image", src: "../img/kami/fadlan.jpg" },
    { type: "image", src: "../img/kami/rahman.jpg" },
    { type: "image", src: "../img/kami/faith.jpg" },
    { type: "image", src: "../img/kami/rafka.jpg" },
    { type: "image", src: "../img/kami/fayyad.jpg" },
    { type: "image", src: "../img/kami/kenzie.jpg" },
    { type: "image", src: "../img/kami/agiv.jpg" },
    { type: "image", src: "../img/kami/adhim.jpg" },
    { type: "image", src: "../img/kami/andre.jpg" },
    { type: "image", src: "../img/kami/hafiz.jpg" },
    { type: "image", src: "../img/kami/fadhil.jpg" },
    { type: "image", src: "../img/kami/zidan.jpg" },
    { type: "image", src: "../img/kami/nadhief.jpg" },
    { type: "image", src: "../img/kami/dika.jpg" },
    { type: "image", src: "../img/kami/nanda.jpg" },
    { type: "image", src: "../img/kami/ouji.jpg" },
    { type: "image", src: "../img/kami/revan.jpg" },
    { type: "image", src: "../img/kami/edi.jpg" },
    { type: "image", src: "../img/kami/andrean.jpg" },
    { type: "image", src: "../img/kami/sandi.jpg" },
    { type: "image", src: "../img/kami/yusra.jpg" },
    { type: "image", src: "../img/kami/yusuf.jpg" },
    { type: "video", src: "videos/.mp4" }
    ];

            const gallery = document.getElementById("gallery");

            mediaFiles.forEach(media => {
                let mediaElement;

                if (media.type === "image") {
                    mediaElement = document.createElement("img");
                    mediaElement.src = media.src;
                } else if (media.type === "video") {
                    mediaElement = document.createElement("video");
                    mediaElement.src = media.src;
                    mediaElement.muted = true;
                }

                mediaElement.alt = media.src;
                mediaElement.addEventListener("click", () => openModal(media.src, media.type));
                mediaElement.addEventListener("contextmenu", (event) => downloadFile(event, media.src));

                gallery.appendChild(mediaElement);
            });

            const modal = document.getElementById("modal");
            const modalImg = document.getElementById("modal-img");
            const modalVideo = document.getElementById("modal-video");
            const closeModal = document.getElementById("close");

            function openModal(src, type) {
                modal.style.display = "flex";

                if (type === "image") {
                    modalImg.src = src;
                    modalImg.style.display = "block";
                    modalVideo.style.display = "none";
                } else if (type === "video") {
                    modalVideo.src = src;
                    modalVideo.style.display = "block";
                    modalImg.style.display = "none";
                    modalVideo.play();
                }
            }

            function downloadFile(event, fileUrl) {
                event.preventDefault();
                const link = document.createElement("a");
                link.href = fileUrl;
                link.download = fileUrl.split('/').pop();
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }

            closeModal.addEventListener("click", () => {
                modal.style.display = "none";
                modalVideo.pause();
                modalVideo.src = "";
            });

            modal.addEventListener("click", (event) => {
                if (event.target === modal) {
                    modal.style.display = "none";
                    modalVideo.pause();
                    modalVideo.src = "";
                }
            });
        });
        
  function search() {
    alert("pencarian di non aktifkan");
  }