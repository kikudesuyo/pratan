import axios from "axios";

export const fetchData = async (
  endpoint: string,
  params: { [key: string]: string | number | boolean }
) => {
  const res = await axios.get(endpoint, { params: params, timeout: 3000 });
  return res.data;
};
