function cekKelulusan() {
    const input = document.getElementById("inputPeserta").value.trim();
    if (!input) {
        alert("Silakan masukkan ID terlebih dahulu!");
        return;
    }

    const peserta = dataPeserta.find(p => p.id === input);

    if (!peserta) {
        alert("ID tidak ditemukan!");
    } else if (peserta.status === "Lulus") {
        const url = `lolos.html?nama=${encodeURIComponent(peserta.nama)}&posisi=${encodeURIComponent(peserta.posisi)}`;
        window.location.href = url;
    } else {
        const url = `gagal.html?nama=${encodeURIComponent(peserta.nama)}`;
        window.location.href = url;
    }
}
