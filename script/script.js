function cekKelulusan() {
    const input = document.getElementById("inputPeserta").value.trim().toLowerCase();
    
    const peserta = dataPeserta.find(p =>
        p.id.toLowerCase() === input || p.nama.toLowerCase() === input
    );
    if(!peserta){
        window.location.href = "salah.html";
    }else{
        if (peserta && peserta.status === "Lulus") {
            const url = `lolos.html?nama=${encodeURIComponent(peserta.nama)}&posisi=${encodeURIComponent(peserta.posisi)}`;
            window.location.href = url;
        } else if (peserta && peserta.status === "Tidak Lulus") {
            const url = `gagal.html?nama=${encodeURIComponent(peserta.nama)}`;
            window.location.href = url;
        }
    }

}
