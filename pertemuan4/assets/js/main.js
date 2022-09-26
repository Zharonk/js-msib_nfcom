const pembeli = document.getElementById("namaPembeli");
const barang = document.getElementById("namaBarang");
const hargaBarang = document.getElementById("hargaBarang") ;
const jumlahBarang = document.getElementById("jumlahBarang");
const valuta = document.getElementById('valas');

document.getElementById("formKonversi").addEventListener("input", () => {
    if (pembeli.value !== "" && barang.value !== "" && hargaBarang.value !== "" && jumlahBarang.value !== "") valuta.removeAttribute("disabled");
    else valuta.setAttribute("disabled", "");
});

valuta.addEventListener("change", () => {
    const result = hargaBarang.value / (valuta.value * jumlahBarang.value);

    document.getElementById("hasil").innerHTML = `
        <div class="card">
            <div class="card-body">
                <p class="card-text">
                    <b>Data Pembelian</b>
                    <br />Nama Pembeli: ${pembeli.value}
                    <br />Nama Barang: ${barang.value}
                    <br />Harga Barang: Rp. ${hargaBarang.value}
                    <br />Jumlah Barang: ${jumlahBarang.value}
                    <br />Valuta Asing: ${valuta.value}
                    <br />Total Bayar: ${result}
                </p>
            </div>
        </div>
    `;
});