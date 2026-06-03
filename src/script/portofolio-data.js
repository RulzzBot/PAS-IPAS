const portofolios = [
    {
        id:1,
        title : "Landing Page",
        image : "src/img/project1.png",
        description : "Landing Page Jasa Angkut Barang Kudus merupakan website promosi yang dikembangkan untuk memperkuat identitas digital usaha jasa logistik dan pengangkutan barang. Website ini menyediakan informasi lengkap mengenai layanan, jangkauan pengiriman, keunggulan perusahaan, serta kontak pemesanan dalam satu halaman yang terstruktur dan mudah dinavigasi. Dibangun dengan desain modern dan responsif, proyek ini bertujuan meningkatkan visibilitas bisnis sekaligus memberikan pengalaman pengguna yang optimal.",
        urlProject : "https://rulzzbot.github.io/JASA-ANGKUT/"
    },
    {
        id:2,
        title : "Toko Online",
        image : "src/img/project2.png",
        description : "Toko Online Welder Shop merupakan sebuah website yang dirancang untuk memudahkan pelanggan dalam mencari, melihat, dan membeli berbagai kebutuhan pengelasan secara online. Website ini menyediakan informasi produk yang lengkap, mulai dari mesin las, perlengkapan keselamatan, hingga aksesoris pendukung, sehingga pelanggan dapat berbelanja dengan mudah, cepat, dan aman. ",
        urlProject : "https://rulzzbot.github.io/API_Currency/"
    },
    {
        id:3,
        title : "Currency Converter Website",
        image : "src/img/project3.png",
        description : "Website Currency Converter adalah sebuah aplikasi berbasis web yang digunakan untuk mengonversi nilai mata uang antar negara secara cepat dan praktis. Website ini memungkinkan pengguna untuk memasukkan nominal, memilih mata uang yang diinginkan, dan mendapatkan hasil konversi secara otomatis melalui sistem yang mudah digunakan dan responsif.",
        urlProject : "https://rulzzbot.github.io/API_Currency/"
    },
    {
        id:4,
        title : "Currency Converter Website",
        image : "src/img/project3.png",
        description : "Website Currency Converter adalah sebuah aplikasi berbasis web yang digunakan untuk mengonversi nilai mata uang antar negara secara cepat dan praktis. Website ini memungkinkan pengguna untuk memasukkan nominal, memilih mata uang yang diinginkan, dan mendapatkan hasil konversi secara otomatis melalui sistem yang mudah digunakan dan responsif.",
        urlProject : "https://rulzzbot.github.io/JASA-ANGKUT/"
    }
]

const cards = document.querySelectorAll(".card-p")

cards.forEach(card => {
    card.addEventListener("click", () => {
        const id = card.dataset.id
        window.location.href = `portofolio.html?id=${id}`
    })
})