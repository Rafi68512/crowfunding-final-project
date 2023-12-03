// Import Library & Package
import Cookies from "js-cookie";

const TokenHelper = () => {
  const token = Cookies.get("access_token");
  // eslint-disable-next-line no-useless-catch
  try {
    if (!token) {
      // throw new Error("Access token not available");
      console.log("token is not available");
    }
    return token;
  } catch (error) {
    throw error;
  }
};

export default TokenHelper;
