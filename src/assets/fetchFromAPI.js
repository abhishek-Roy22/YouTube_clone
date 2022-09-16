import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "32",
  },
  headers: {
    "X-RapidAPI-Key": "d2834b2edbmshd2f7508746aaf79p1ea93ajsn2d94d9e9f36f",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
