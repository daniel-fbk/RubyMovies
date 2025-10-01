import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: "en-us",
  },
});

const get = async (url, params = {}) => {
  try {
    const result = await api.get(url, {
      params: { ...api.defaults.params, ...params },
    });
    return result.data;
  } catch (error) {
    throw error;
  }
};

export default get;
