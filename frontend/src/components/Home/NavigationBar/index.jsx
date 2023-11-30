import Logo from "../../../assets/logo.png";
import SearchIcon from "../../../assets/search.svg";

const NavigationBar = () => {
  return (
    <div className=" h-20 bg-primary flex items-center px-10">
      <div className="flex items-center relative w-full">
        <div className="mr-10">
          <img src={Logo} alt="logo" className="w-10 h-10" />
        </div>
        <div className="relative mr-20">
          <input
            type="search"
            className="h-9 w-[500px] bg-secondary rounded-2xl px-5 text-white placeholder:text-gray-100 active:ring-white active:border-white focus:ring-white focus:border-white"
            placeholder="cari yang ingin kamu bantu!"
          />
          <img src={SearchIcon} alt="" className="absolute right-3 top-2" />
        </div>

        <div className="flex gap-10 text-white">
          <p>Beranda</p>
          <p>Tentang</p>
          <p>Berita</p>
          <p>Kontak</p>
        </div>
        <div className="absolute right-0">
          <div className="w-10 h-10 bg-greybg rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
