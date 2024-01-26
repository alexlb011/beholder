import axios from "axios";

class MyAxios {
  async fetchData(path: string) {
    const apiPath = process.env.REACT_APP_API_PATH;
    const resposne = await axios.get(`${apiPath + path}`);
    return resposne.data;
  }
}

export default MyAxios;
