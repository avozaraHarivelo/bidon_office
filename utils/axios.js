import { getCookies } from 'next-client-cookies/server';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/creditbidon/v1', // Remplacez par l'URL de base de votre API
});


  
export default instance;
