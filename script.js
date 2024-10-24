// JavaScript untuk smooth scroll saat link di navigasi diklik
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah aksi default link
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript untuk interaksi pada tombol "See More"
document.querySelectorAll('.see-more-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Tambahkan aksi sesuai kebutuhan, misalnya:
        alert('Button "See More" diklik');
    });
});