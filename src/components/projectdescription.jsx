import react from "react";

const projectdescription = () => {
    return (
        <div className="p-8 bg-white rounded shadow">
            <h2 className="text-2x1 font-bold mb-4">Deskripsi projek</h2>
            <img 
            src="./src/img/th.jpeg"
            alt="Gambar "
            className="mb-4 rounded-md"
            />
            <p>
            Crowdfunding web atau platform crowdfunding adalah suatu cara penggalangan dana melalui internet untuk suatu proyek atau kampanye tertentu. Konsepnya adalah mengumpulkan uang dari berbagai investor secara kolektif dengan jumlah yang kecil untuk mencapai target dana yang besar. Crowdfunding web menjembatani antara proyek dan investor dengan menyediaan platform yang dapat diakses oleh siapa saja. 
            Platform crowdfunding ini memberikan kesempatan bagi para kreator atau pelaku usaha untuk memperoleh dana yang cukup untuk melaksanakan proyeknya tanpa harus meminjam uang dari bank atau investor besar. Sementara itu, investor juga mendapatkan keuntungan dari peluang investasi untuk ide dan proyek yang menarik tanpa harus memiliki modal besar. Setiap platform crowdfunding memiliki aturan yang berbeda-beda termasuk jenis proyek yang akan diterima, batas minimum atau maksimum investasi, dan persyaratan lainnya. 
            Selain itu, penggalangan dana melalui crowdfunding web juga seringkali menyertakan imbalan untuk setiap penggalangan dana yang dilakukan seperti produk gratis atau diskon pada saat proyek tersebut selesai. Dalam era digital saat ini, platform crowdfunding semakin populernya karena memungkinkan orang untuk memberikan kontribusi pada proyek atau kampanye yang mereka sukai atau mendukung. Crowdfunding web memberikan solusi efektif bagi kreator dan investor yang mencari alternatif pembiayaan proyek yang lebih mudah dan terjangkau.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Donasi Sekarang
        </button>

        </div>
    );
};

export default projectdescription;