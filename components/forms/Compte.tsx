"use client"

import React, { useState } from 'react'

export default function Compte() {

    const [fields, setFields] = useState({
        id: { value: '', error: '' },
        login: { value: '', error: '' },
        password: { value: '', error: '' },
        phoneTelma: { value: '', error: '' },
    });

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

        if (!fields.login.value) {
            setFields({
                ...fields,
                login: {
                    ...fields.login,
                    error: 'Le nom d\'utilisateur est requis',
                },
            });
            formIsValid = false;
        }

        if (!fields.password.value) {
            setFields({
                ...fields,
                password: {
                    ...fields.password,
                    error: 'Le mot de passe est requis',
                },
            });
            formIsValid = false;
        }

        if (!fields.phoneTelma.value) {
            setFields({
                ...fields,
                phoneTelma: {
                    ...fields.phoneTelma,
                    error: 'Le numéro de téléphone est requis',
                },
            });
            formIsValid = false;
        }

        if (formIsValid) {
            // Si le formulaire est valide, vous pouvez envoyer la demande
            const data = {
                login: fields.login.value,
                password: fields.password.value,
                phoneTelma: fields.phoneTelma.value,
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
                <strong className="card-title">Compte</strong>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="login" className="col-sm-4 col-form-label">Nom d'utilisateur (PAOMA)</label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control"
                                id="login"
                                placeholder="Nom d'utilisateur"
                                value={fields.login.value}
                                onChange={handleChange}
                            />
                            {fields.login.error && <div className="text-danger">{fields.login.error}</div>}
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-4 col-form-label">Mot de passe (PAOMA)</label>
                        <div className="col-sm-8">
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Mot de passe"
                                value={fields.password.value}
                                onChange={handleChange}
                            />
                            {fields.password.error && <div className="text-danger">{fields.password.error}</div>}
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="phoneTelma" className="col-sm-4 col-form-label">Numéro EQIMA (MVOLA)</label>
                        <div className="col-sm-8">
                            <input
                                className="form-control input-phoneus"
                                id="phoneTelma"
                                placeholder="034 /038"
                                value={fields.phoneTelma.value}
                                onChange={handleChange}
                            />
                            {fields.phoneTelma.error && <div className="text-danger">{fields.phoneTelma.error}</div>}
                        </div>
                    </div>

                    <div className="form-group mb-2">
                        <button type="submit" className="btn btn-primary">Modifier</button>
                    </div>
                </form>
            </div>
        </div>
    )
}