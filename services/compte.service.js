import axios from "@/utils/axios";


export const get = (id) => axios.get(`/compte/${id}`);
export const add = (compte) =>  axios.post(`/compte/create`,compte);
export const update = (compte) => axios.put(`compte/update/${compte.id}`, compte);