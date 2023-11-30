import FacebookIcon from "../../../assets/facebook.svg";
import LinkedinIcon from "../../../assets/linkedin.svg";
import TwitterIcon from "../../../assets/twitter.svg";
import TelegramIcon from "../../../assets/telegram.svg";
import GithubIcon from "../../../assets/github.svg";

const Footer = () => {
  return (
    <div>
      <div>
        <p className="text-hint text-center text-lg my-10">
          Tentang DonaLink | Syarat & Ketentuan | Pusat Bantuan
        </p>
      </div>
      <div className="flex justify-center gap-10">
        <div className="h-20 w-20 rounded-xl bg-greybg flex justify-center items-center p-5">
          <img src={FacebookIcon} alt="facebook" />
        </div>
        <div className="h-20 w-20 rounded-xl bg-greybg flex justify-center items-center p-5">
          <img src={TwitterIcon} alt="facebook" />
        </div>
        <div className="h-20 w-20 rounded-xl bg-greybg flex justify-center items-center p-5">
          <img src={LinkedinIcon} alt="facebook" />
        </div>
        <div className="h-20 w-20 rounded-xl bg-greybg flex justify-center items-center p-5">
          <img src={TelegramIcon} alt="facebook" />
        </div>
        <div className="h-20 w-20 rounded-xl bg-greybg flex justify-center items-center p-5">
          <img src={GithubIcon} alt="facebook" />
        </div>
      </div>
      <div>
        <p className="text-hint text-center text-lg my-10">
          Copyright © 2023 DonaLink. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
