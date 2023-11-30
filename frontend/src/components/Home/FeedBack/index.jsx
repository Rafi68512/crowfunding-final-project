import LikeIcon from "../../../assets/like.svg";

const FeedBack = () => {
  return (
    <div className="w-[290px] h-[280px] rounded-xl shadow-lg p-5 my-5">
      <div className="flex gap-5 items-center">
        <div className="w-14 h-14 bg-greybg rounded-full"></div>
        <div>
          <p className="font-bold text-xl">Aina</p>
          <p className="text-2xs text-hint">21 menit yang lalu</p>
          <p className="text-2xs text-hint">Alat medis dan pangan untuk Gaza</p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-greybg my-5"></div>
      <div>
        <p>
          Bismillah, semoga bermanfaat. Our prayers will always be with you, Palestinian brother &
          sister
        </p>
      </div>
      <div className="w-full h-[1px] bg-greybg my-5"></div>

      <div className="flex gap-5 justify-center">
        <img src={LikeIcon} alt="" />
        <p className="text-lg text-hint">Aaminn</p>
      </div>
    </div>
  );
};

export default FeedBack;
