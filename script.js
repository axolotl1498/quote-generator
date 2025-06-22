const quotes = [
  { text: "Jangan menunggu waktu yang tepat. Mulailah sekarang.", author: "Anonim" },
  { text: "Kesuksesan bukanlah akhir, kegagalan bukanlah kehancuran.", author: "Winston Churchill" },
  { text: "Hidup adalah 10% apa yang terjadi padamu dan 90% bagaimana kamu meresponsnya.", author: "Charles R. Swindoll" },
  { text: "Kerja keras mengalahkan bakat saat bakat tidak bekerja keras.", author: "Tim Notke" },
  { text: "Belajarlah seolah kamu akan hidup selamanya.", author: "Mahatma Gandhi" },
  { text: "Satu-satunya batasan kita untuk hari esok adalah keraguan kita hari ini.", author: "Franklin D. Roosevelt" },
  { text: "Kegagalan adalah kesempatan untuk memulai lagi dengan lebih cerdas.", author: "Henry Ford" }
];

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random].text;
  document.getElementById("author").innerText = "- " + quotes[random].author;
}
