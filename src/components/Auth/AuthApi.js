import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const signIn = async (formValues) => {
  const get = await (await API.post("/users/signin", formValues)).data
      console.log('gettt', get)
  return get
};
export const signUp = async (formValues) => {
 const get = await (await API.post("/users/signup", formValues)).data
 console.log('gettt', get)
  return get
};


