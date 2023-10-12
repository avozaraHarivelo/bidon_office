"use client"

import React, { useEffect, useState } from 'react'
import axios from "@/utils/axios"

import { get as getPrix} from '@/services/prix.service';

export default function Prix() {
    const [fields, setFields] = useState({
        id: { value: 1, error: '' },
        bidon: { value: '', error: '' },
        loyer: { value: '', error: '' },
    });

    useEffect(() => {
        console.log(axios.defaults.headers.common)
        // Effectuez une demande GET pour obtenir les valeurs
        getPrix(1).then((response) => {
            const data = response.data;
            // Mettez à jour l'état avec les valeurs récupérées de l'API
            setFields({
              id: { value: 1, error: '' },
              bidon: { value: data.bidon, error: '' },
              loyer: { value: data.loyer, error: '' },
            });
          })
          .catch((error) => {
        //    console.log(error)
          });
      }, []); 

    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setFields({
            ...fields,
            [id]: { value, error: '' }, // Réinitialise l'erreur lorsqu'un champ est modifié
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        // Validation finale avant d'envoyer la demande
        let formIsValid = true;

        if (!fields.bidon.value) {
            setFields({
                ...fields,
                bidon: {
                    ...fields.bidon,
                    error: 'Le prix du bidon est requis',
                },
            });
            formIsValid = false;
        }

        if (!fields.loyer.value) {
            setFields({
                ...fields,
                loyer: {
                    ...fields.loyer,
                    error: 'Le loyer de la borne fontaine est requis',
                },
            });
            formIsValid = false;
        }

        if (formIsValid) {
            // Si le formulaire est valide, vous pouvez envoyer la demande
            const data = {
                bidon: fields.bidon.value,
                loyer: fields.loyer.value,
            };
            console.log(data);

            //   axios.put('/votre-endpoint-de-mise-à-jour', data)
            //     .then((response) => {
            //       // Gérer la réponse ici
            //     })
            //     .catch((error) => {
            //       // Gérer les erreurs ici
            //     });
        }
    };

    return (
        <div className="card shadow mb-4">
            <div className="card-header">
                <strong className="card-title">Prix</strong>
            </div>
            <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="bidon" className="col-sm-5 col-form-label">Bidon (Le litre)</label>
                    <div className="col-sm-7">
                        <input
                            type="number" // Utilisez le type "number" pour le prix
                            className="form-control"
                            id="bidon"
                            placeholder="Prix du litre"
                            value={fields.bidon.value}
                            onChange={handleChange}
                        />
                        {fields.bidon.error && <div className="text-danger">{fields.bidon.error}</div>}
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="loyer" className="col-sm-5 col-form-label">Loyer borne fontaine (Journalier)</label>
                    <div className="col-sm-7">
                        <input
                            type="number" // Utilisez le type "number" pour le loyer
                            className="form-control"
                            id="loyer"
                            placeholder="Loyer"
                            value={fields.loyer.value}
                            onChange={handleChange}
                        />
                        {fields.loyer.error && <div className="text-danger">{fields.loyer.error}</div>}
                    </div>
                </div>

                <div className="form-group mb-2">
                    <button type="submit" className="btn btn-primary">Modifier</button>
                </div>
            </form>
            </div>
          
        </div>
    );
}
