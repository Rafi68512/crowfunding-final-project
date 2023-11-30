import CardImage from "../../../assets/card-img.png";

const ProyekCard = () => {
  return (
    <div className="h-[360px] w-[290px] rounded-xl shadow-lg mb-5">
      <img src={CardImage} alt="" />
      <div className="mx-2 mt-2">
        <p className="text-xl font-extrabold">Satukan Solidaritas, Bantu Korban Konflik di Gaza</p>
        <div className=" mt-3">
          <p className="text-sm text-center">
            Terkumpul <span className="text-primary font-bold">Rp1.686.257.152</span>
          </p>
          <input type="range" className="w-full mt-3" />
        </div>
      </div>
    </div>
  );
};

export default ProyekCard;
