"use client"

import { login } from '@/services/auth.service';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";


export default function SignIn() {
  const router = useRouter();
  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');
  const cookies = useCookies();


const isValidToken = (token:string) => {
 
    if (!token) return false;
    try {
      const decodedToken: any = jwt_decode(token);
      return decodedToken.exp > new Date().getTime() / 1000;
    } catch (error) {
      cookies.remove("token");
      return false;
    }
  };

  const handleTelephoneChange = (e: any) => {
    setTelephone(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    
    e.preventDefault();

    try {
      login({ telephone, password }).then(( data ) => {
        if (isValidToken(data.token) && data.roles.includes("ROLE_ADMIN")) {
          cookies.set('token', data.token);
          router.push("/");
        } else {
        console.log("erreur d 'authentification");
        }
      }) 
    } catch (error) {
      // Gérez les erreurs ici (par exemple, affichez un message d'erreur)
      console.error('Erreur de connexion :', error);
    }
  };



  return (
    <div className="wrapper vh-100">
      <div className="row align-items-center h-100">
        <form className="col-lg-3 col-md-4 col-10 mx-auto text-center" onSubmit={handleSubmit}>
          <a className="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
            <svg
              version="1.1"
              id="logo"
              className="navbar-brand-img brand-sm"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 120 120"
              xmlSpace="preserve"
            >
              <g>
                <polygon className="st0" points="78,105 15,105 24,87 87,87 	" />
                <polygon className="st0" points="96,69 33,69 42,51 105,51 	" />
                <polygon className="st0" points="78,33 15,33 24,15 87,15 	" />
              </g>
            </svg>
          </a>
          <h1 className="h6 mb-3">Sign in</h1>
          <div className="form-group">
            <label htmlFor="inputEmail" className="sr-only">Numéro téléphone</label>
            <input
              type="text"
              id="telephone"
              className="form-control form-control-lg"
              placeholder="Téléphone"
              required
              value={telephone}
              onChange={handleTelephoneChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword" className="sr-only">Mot de passe</label>
            <input
              type="password"
              id="password"
              className="form-control form-control-lg"
              placeholder="Mot de passe"
              required
              value={password}
              onChange={handlePasswordChange}
            />


          </div>
          {/* <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Stay logged in </label>
          </div> */}
          <button className="btn btn-lg btn-primary btn-block" type="submit">Se connecter</button>
          <p className="mt-5 mb-3 text-muted">© 2023</p>
        </form>
      </div>
    </div>
  )
}
