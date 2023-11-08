"use client"

import { getCurrentUser, update } from '@/services/user.service';
import React, { useEffect, useState } from 'react'

const formData = (fields: any) => {
  return {
    id: fields.id.value,
    email: fields.email.value,
    telephone: fields.telephone.value,
    adresse: fields.adresse.value,
    nom: fields.nom.value,
    cin: fields.cin.value,
  };
};

export default function Profile() {

  const [fields, setFields] = useState({
    id: { value: 0, error: '' },
    nom: { value: '', error: '' },
    email: { value: '', error: '' },
    telephone: { value: '', error: '' },
    adresse: { value: '', error: '' },
    cin: { value: '', error: '' },
  });



  useEffect(() => {
    // Effectuez une demande GET pour obtenir les valeurs
    getCurrentUser().then((response) => {
      setFields({
        id: { value: response.id, error: '' },
        nom: { value: response.nom, error: '' },
        email: { value: response.email, error: '' },
        telephone: { value: response.username, error: '' },
        adresse: { value: response.adresse, error: '' },
        cin: { value: response.cin, error: '' },
      });
    })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFields({
      ...fields,
      [id]: { value, error: '' }
    });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let formIsValid = true;
    const newFields = { ...fields };

    if (fields.nom.value.trim() === '') {
      newFields.nom.error = 'Le nom d\'utilisateur est requis.';
      formIsValid = false;
    }

    if (fields.email.value.trim() === '') {
      newFields.email.error = 'L\'email est requis.';
      formIsValid = false;
    }

    setFields(newFields);

    if (formIsValid) {
      update(formData(fields)).then((response) => {
        console.log(response);
      }).catch((error) => {
        // Gérer les erreurs ici
      });
    }

  }


  return (
    <main role="main" className="main-content">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <h2 className="h3 mb-4 page-title">Profil</h2>
            <div className="my-4">
              <form onSubmit={handleSubmit}>
                <div className="row mt-5 align-items-center">
                  <div className="col-md-3 text-center mb-5">
                    <div className="avatar avatar-xl">
                      <img src={`https://avatars.dicebear.com/api/initials/${fields.nom.value}.svg`} alt="..." className="avatar-img rounded-circle" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="row align-items-center">
                      <div className="col-md-7">
                        <h4 className="mb-1">{fields.nom.value}</h4>
                        <p className="small mb-3"><span className="badge badge-dark">Madagascar</span></p>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-7">
                        <p className="text-muted"> Ce compte est l'administrateur de CREDIT BIDON</p>
                      </div>
                      <div className="col">
                        <p className="small mb-0 text-muted">{fields.adresse.value}</p>
                        <p className="small mb-0 text-muted">{fields.telephone.value}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="nom">Nom d'utilisateur</label>
                    <input type="text" id="nom" className="form-control" value={fields.nom.value} onChange={handleChange} placeholder="Nom d'utilisateur" />
                    {fields.nom.error && <div className="text-danger">{fields.nom.error}</div>}
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" value={fields.email.value} onChange={handleChange} placeholder="Votre email" />
                    {fields.email.error && <div className="text-danger">{fields.email.error}</div>}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="telephone">Numéro téléphone</label>
                  <input type="tel" className="form-control" id="telephone" value={fields.telephone.value} onChange={handleChange} placeholder="Votre numéro de téléphone" />
                  {fields.telephone.error && <div className="text-danger">{fields.telephone.error}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="adresse">Adresse</label>
                  <input type="text" className="form-control" id="adresse" value={fields.adresse.value} onChange={handleChange} placeholder="Votre adresse" />
                  {fields.adresse.error && <div className="text-danger">{fields.adresse.error}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="cin">Carte d'identité national</label>
                  <input type="text" className="form-control" id="cin" value={fields.cin.value} onChange={handleChange} placeholder="Votre cin" />
                  {fields.cin.error && <div className="text-danger">{fields.cin.error}</div>}
                </div>

                <button type="submit" className="btn btn-primary">Sauvegarder</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
