import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import ListProyek from "./pages/ListProyek";
import CreateProyek from "./pages/CreateProyek";
import ListProyekUser from "./pages/ListProyekUser";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="profile" element={<Profile />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/list-donation" element={<ListProyek />}></Route>
      <Route path="/create-donation" element={<CreateProyek />}></Route>
      <Route path="/list-user-donation" element={<ListProyekUser />}></Route>
    </Routes>
  );
}

export default App;
