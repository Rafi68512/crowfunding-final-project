import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import ListProyek from "./pages/ListProyek";
import CreateProyek from "./pages/CreateProyek";
import ListProyekUser from "./pages/ListProyekUser";
import Payment from "./pages/Payment";
import DescProyek from "./pages/ProyekDetail";
// import ProyekDetail from "./pages/ProyekDetail";

function App() {
  return (
    <Routes>
      <Route path="desc" element={<DescProyek />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="profile" element={<Profile />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/list-donation" element={<ListProyek />}></Route>
      <Route path="/create-donation" element={<CreateProyek />}></Route>
      <Route path="/list-user-donation" element={<ListProyekUser />}></Route>
      <Route path="/payment" element={<Payment />} />
      {/* <Route path="/detail/proyek" element={<ProyekDetail />} /> */}
    </Routes>
  );
}

export default App;
