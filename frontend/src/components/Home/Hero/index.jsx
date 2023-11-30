import HeroImage from "../../../assets/banner-proyek.png";
import MessageIcon from "../../../assets/message-icon.svg";

const Hero = () => {
  return (
    <div className="relative">
      <img src={HeroImage} alt="" className="w-full object-contain" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div>
          <h1 className="font-bold text-white text-3xl mb-5">Ingin Menggalang Dana?</h1>
          <div className="h-10 w-72 bg-primary rounded-3xl mx-auto mb-5 flex justify-center  items-center  font-bold text-white cursor-pointer">
            Donasi Sekarang
          </div>
          <div className="h-10 w-72 bg-white rounded-3xl mx-auto flex justify-center items-center gap-1  font-bold text-primary cursor-pointer">
            <img src={MessageIcon} alt="icon" className="w-5 h-5 " />
            Tanya Tentang Donasi
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
