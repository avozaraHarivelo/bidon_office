"use client"

import React, { useEffect, useState } from 'react'

import { getAllTransactionNfc } from '@/services/transaction.service'

export default function Bidon() {
  const [transactions, setTransaction] = useState([]);

  useEffect(() => {
    getAllTransactionNfc().then(({ data }) => {
      setTransaction(data)
      })
  }, []);


  return (
    <main role="main" className="main-content">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12">
          <h2 className="h3 mb-3 page-title">Liste des transactions bidons</h2>
          <div className="row mb-4 items-align-center">
            <div className="col-md-auto ml-auto text-right">
              <button type="button" className="btn" data-toggle="modal" data-target=".modal-slide"><span className="fe fe-filter fe-16 text-muted"></span></button>
              <button type="button" className="btn"><span className="fe fe-refresh-ccw fe-16 text-muted"></span></button>
            </div>
          </div>
        
          <table className="table border table-hover bg-white">
            <thead>
              <tr role="row">
                <th>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="all"/>
                    <label className="custom-control-label" htmlFor="all"></label>
                  </div>
                </th>
                <th>ID</th>
                <th>Nom</th>
                <th>Nombre de bidon</th>
                <th>Total</th>
                <th>Payé par</th>
                <th>Date de paiment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             {transactions.map((transaction:any)=>(
               <tr key={transaction.id}>
               <td>
                 <div className="custom-control custom-checkbox">
                   <input type="checkbox" className="custom-control-input" />
                   <label className="custom-control-label"></label>
                 </div>
               </td>
               <td>{transaction.id}</td>
               <td>{transaction.nom}</td>
               <td>{transaction.bidon}</td>
               <td>{transaction.amount}</td>
               <td>{transaction.paymentBy}</td>
               <td>{transaction.creation}</td>
               <td>
                 <div className="dropdown">
                   <button className="btn btn-sm dropdown-toggle more-vertical" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     <span className="text-muted sr-only">Action</span>
                   </button>
                   <div className="dropdown-menu dropdown-menu-right">
                     <a className="dropdown-item" href="#">Edit</a>
                     <a className="dropdown-item" href="#">Remove</a>
                     <a className="dropdown-item" href="#">Assign</a>
                   </div>
                 </div>
               </td>
             </tr>
             ))}
             
            </tbody>
          </table>
          <nav aria-label="Table Paging" className="my-3">
            <ul className="pagination justify-content-end mb-0">
              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item active"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div> 
    </div>
    
    <div className="modal fade modal-shortcut modal-slide" role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="defaultModalLabel">Shortcuts</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body px-5">
            <div className="row align-items-center">
              <div className="col-6 text-center">
                <div className="squircle bg-success justify-content-center">
                  <i className="fe fe-cpu fe-32 align-self-center text-white"></i>
                </div>
                <p>Control area</p>
              </div>
              <div className="col-6 text-center">
                <div className="squircle bg-primary justify-content-center">
                  <i className="fe fe-activity fe-32 align-self-center text-white"></i>
                </div>
                <p>Activity</p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-6 text-center">
                <div className="squircle bg-primary justify-content-center">
                  <i className="fe fe-droplet fe-32 align-self-center text-white"></i>
                </div>
                <p>Droplet</p>
              </div>
              <div className="col-6 text-center">
                <div className="squircle bg-primary justify-content-center">
                  <i className="fe fe-upload-cloud fe-32 align-self-center text-white"></i>
                </div>
                <p>Upload</p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-6 text-center">
                <div className="squircle bg-primary justify-content-center">
                  <i className="fe fe-users fe-32 align-self-center text-white"></i>
                </div>
                <p>Users</p>
              </div>
              <div className="col-6 text-center">
                <div className="squircle bg-primary justify-content-center">
                  <i className="fe fe-settings fe-32 align-self-center text-white"></i>
                </div>
                <p>Settings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main> 
  )
}
