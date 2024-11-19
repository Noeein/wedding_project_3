document.getElementById("buka").addEventListener("click", function() {

  document.querySelector(".cover").classList.add("slide-up");

 
  setTimeout(function() {
      document.querySelector(".cover").classList.add("hide"); 
      document.body.classList.remove("lock-scroll"); 
  }, 1000); 

 
  setTimeout(function() {
      document.querySelector(".cover").style.display = "none"; 
  }, 1500);
});


let slideIndex = 0;
      showSlides();

      function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000);
      }

      ucapanForm.addEventListener('submit', function (e) {
        e.preventDefault()

        const nama = document.getElementById('namaUcapan').value;
        const pesan = document.getElementById('pesanUcapan').value;

        const ucapanItem = document.createElement('div');
        ucapanItem.classList.add('ucapan-item');
        ucapanItem.innerHTML = `<strong>${nama}:</strong><p>${pesan}</p>`;

        listUcapan.appendChild(ucapanItem);
        ucapanForm.reset();
    });

    const elements = document.querySelectorAll('.quote, .male, .female, .galery, .event, .closing, .rotate, .scale-up');

    // Buat Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('active')) {
          // Tambah kelas aktif saat terlihat di layar, tetapi hanya sekali
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.5 });  // Mengatur agar animasi dipicu ketika 50% elemen terlihat

    // Observasi setiap elemen
    elements.forEach(el => observer.observe(el));