// Library & Package Import
import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

const handleErrorResponse = (error, action) => {
  console.error(`Error: saat ${action}`, error);
  throw error;
};

const RequestApi = async (method, url, data = {}, headers = {}, action) => {
  // console.log("sedang memanggil api dari ", method + url + data);
  console.log(`${method} ${url} ${data}`);
  try {
    const response = await axios({
      method,
      url: `${API_BASE_URL}/${url}`,
      data,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });

    console.log(response.data);

    return response.data;
  } catch (error) {
    return handleErrorResponse(error, action);
  }
};

export { RequestApi };
