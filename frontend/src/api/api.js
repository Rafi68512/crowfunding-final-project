import Cookies from "js-cookie";
import { RequestApi } from "../helper/RequestApi";

const loginUser = async (credentials) => {
  try {
    const responseLogin = await RequestApi("POST", "login", credentials, {}, "Mencoba Login");

    const access_token = responseLogin.data.access_token;
    const userId = responseLogin.data.login_user.ketua_petani_id;
    Cookies.set("access_token", access_token, { expires: 7 });
    Cookies.set("userId", userId, { expires: 7 });

    return responseLogin.data;
  } catch (error) {
    console.error("Terjadi kesalahan saat mencoba login ", error);
    throw error;
  }
};

const getAllProyek = async () => {
  try {
    // const token = TokenHelper();

    const responseData = await RequestApi(
      "GET",
      `proyek`,
      {},
      {},
      "Mencoba mencoba get all proyek"
    );

    return responseData;
  } catch (error) {
    console.error("Terjadi kesalahan saat mencoba get all proyek  ", error);
    throw error;
  }
};

const createProyek = async (data) => {
  try {
    // const token = TokenHelper();

    const responseData = await RequestApi(
      "POST",
      `proyek`,
      data,
      {},
      "Mencoba mencoba get all proyek"
    );

    return responseData;
  } catch (error) {
    console.error("Terjadi kesalahan saat mencoba get all proyek  ", error);
    throw error;
  }
};

export { loginUser, getAllProyek, createProyek };
