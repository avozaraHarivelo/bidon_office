import axios from "@/utils/axios";


export const get = () => axios.get(`/compte/get`);
export const add = (compte) =>  axios.post(`/compte/create`,compte);
export const update = (compte) => axios.put(`compte/update${compte.get("id")}`, compte);