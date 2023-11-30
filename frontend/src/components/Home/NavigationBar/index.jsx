import Logo from "../../../assets/logo.png";
import SearchIcon from "../../../assets/search.svg";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { IoCreate } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaList } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className=" h-20 bg-primary flex items-center px-10">
      <div className="flex items-center relative w-full">
        <Link to={"/"} className="mr-10">
          <img src={Logo} alt="logo" className="w-10 h-10" />
        </Link>
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
          <ProfileToggle />
        </div>
        {/* {open && <ProfileToggle />} */}
      </div>
    </div>
  );
};

const ProfileToggle = () => {
  const navigate = useNavigate();
  return (
    <Menu>
      <MenuHandler>
        <Avatar
          variant="circular"
          alt="tania andrew"
          className="cursor-pointer"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
      </MenuHandler>
      <MenuList>
        <MenuItem className="flex items-center gap-2">
          <CgProfile />

          <Typography variant="small" className="font-medium">
            My Profile
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <IoCreate />

          <Typography
            variant="small"
            className="font-medium"
            onClick={() => navigate("/create-donation")}
          >
            Create Donation
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <FaList />

          <Typography
            variant="small"
            className="font-medium"
            onClick={() => navigate("/list-user-donation")}
          >
            List Donation
          </Typography>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2 ">
          <IoLogOut />
          <Typography variant="small" className="font-medium">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavigationBar;
