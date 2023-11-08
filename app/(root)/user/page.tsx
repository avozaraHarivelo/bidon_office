"use client"

import { getAllUser } from '@/services/user.service';
import React, { useEffect, useState } from 'react'

export default function User() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUser().then(({ data }) => {
            setUsers(data)
        })
    }, []);
    return (
        <main role="main" className="main-content">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="row align-items-center my-4">
                            <div className="col">
                                <h2 className="h3 mb-0 page-title">Liste des utilisateurs</h2>
                            </div>
                            <div className="col-auto">
                                <button type="button" className="btn btn-primary"><span className="fe fe-filter fe-12 mr-2"></span>Creer</button>
                            </div>
                        </div>
                        <div className="card shadow">
                            <div className="card-body">
                                <table className="table table-borderless table-hover">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="all2" />
                                                    <label className="custom-control-label" htmlFor="all2"></label>
                                                </div>
                                            </th>
                                            <th>ID</th>
                                            <th>Nom de l'utilisateur</th>
                                            <th>Téléphone</th>
                                            <th>cin</th>
                                            <th>Adresse</th>
                                            <th>email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user:any, key:number) => (
                                            <tr key={key}>
                                                <td>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="2474" />
                                                        <label className="custom-control-label" htmlFor="2474"></label>
                                                    </div>
                                                </td>
                                                <td>
                                                </td>
                                                <td>
                                                    <p className="mb-0 text-muted"><strong>{user.nom}</strong></p>
                                                </td>
                                                <td>
                                                    {user.telephone}
                                                </td>
                                                <td>
                                                 {user.cin}
                                                </td>
                                                <td>
                                                  {user.adresse}
                                                </td>
                                                <td className="text-muted">{user.email}</td>
                                                <td>
                                                    <button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <span className="text-muted sr-only">Action</span>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Edit</a>
                                                        <a className="dropdown-item" href="#">Remove</a>
                                                        <a className="dropdown-item" href="#">Assign</a>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <nav aria-label="Table Paging" className="my-3">
                            <ul className="pagination justify-content-end mb-0">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>


        </main>
    )
}
