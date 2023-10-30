// Tanggal target countdown (tahun, bulan, tanggal)
let targetDate = new Date("2023-11-07T08:59:59").getTime();

// Fungsi untuk memperbarui countdown setiap detik
let countdownInterval = setInterval(function () {
  let now = new Date().getTime();
  let distance = targetDate - now;

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "";
  } else {
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update elemen HTML
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
}, 1000); // Setiap 1 detik
