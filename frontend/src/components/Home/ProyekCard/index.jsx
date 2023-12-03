/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CardImage from "../../../assets/card-img.png";
import ProgressBar from "./ProgressBar";

const ProyekCard = ({ nama, deskripsi, goal }) => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);
  return (
    <>
      <div className="h-[360px] w-[290px] rounded-xl shadow-lg mb-5">
        <img src={CardImage} alt="" />
        <div className="mx-2 mt-2">
          <p className="text-xl font-extrabold">{nama}</p>
          <div className=" mt-3">
            <p className="text-sm text-center">
              Terkumpul <span className="text-primary font-bold">Rp1.686.257.152</span>
            </p>
            {/* <input type="range" className="w-full mt-3" /> */}
          </div>
        </div>
        <ProgressBar completed={completed} />
      </div>
    </>
  );
};

export default ProyekCard;
