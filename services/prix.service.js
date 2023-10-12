import axios from "@/utils/axios";


export const get = (id) => axios.get(`/prix/${id}`);
export const add = (prix) =>  axios.post(`/prix/create`,prix);
export const update = (prix) => axios.put(`prix/update${prix.get("id")}`, prix);