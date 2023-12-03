import Hero from "../components/Home/Hero";
import NavigationBar from "../components/Home/NavigationBar";
import ProyekCard from "../components/Home/ProyekCard";
import "../styles/carousel.css";
import CardSlider from "../components/Home/CardSlider";
import AddsCarousel from "../components/Home/AddsCarousel";
import Kategori from "../components/Home/Kategori";
import SosialIcon from "../assets/sosial.png";
import KemanusiaaanIcon from "../assets/kemanusiaan.png";
import PendidikanIcon from "../assets/pendidikan.png";
import RumahIbadahIcon from "../assets/rumah-ibadah.png";
import LainnyaIcon from "../assets/lainnya.png";
import Footer from "../components/Home/Footer";
import FeedBack from "../components/Home/FeedBack";
import { useEffect, useState } from "react";
import { getAllProyek } from "../api/api";
import useEmblaCarousel from "embla-carousel-react";

const Home = () => {
  const [proyek, setProyek] = useState();
  const [emblaRef] = useEmblaCarousel({ slidesToScroll: "auto", containScroll: "trimSnaps" });
  // const SLIDE_COUNT = 8;

  useEffect(() => {
    getAllProyek().then((result) => {
      setProyek(result);
      console.log("ini result", result);
    });
  }, []);
  return (
    <>
      <NavigationBar />
      <Hero />
      <h1 className="text-3xl font-bold ms-10 mt-5">Program Spesial DonaLink</h1>
      <div className=" mt-5 gap-5 ">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {proyek?.map((data) => {
                return (
                  <div className="embla__slide" key={data.id}>
                    <ProyekCard nama={data.nama} deskripsi={data.deskripsi} goal={data.goal} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold ms-10 mt-5">Bersama Melindungi Dengan Program Ini</h1>
      <div className="m-10">
        <AddsCarousel />
      </div>
      <h1 className="text-3xl font-bold ms-10 mt-5">Bantu Kategori Pilihanmu</h1>
      <div className="flex justify-between mx-10 mt-5">
        <Kategori icon={SosialIcon} title="Kegiatan Sosial" />
        <Kategori icon={KemanusiaaanIcon} title="Kemanusiaan" />
        <Kategori icon={RumahIbadahIcon} title="Rumah Ibadah" />
        <Kategori icon={PendidikanIcon} title="Pendidikan" />
        <Kategori icon={LainnyaIcon} title="Lainnya" />
      </div>

      <div className=" mt-5 gap-5 ">
        <CardSlider>
          <ProyekCard />
        </CardSlider>
      </div>
      <h1 className="text-3xl font-bold ms-10 mt-5">Doa-doa #OrangBaik</h1>
      <CardSlider>
        <FeedBack />
      </CardSlider>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
