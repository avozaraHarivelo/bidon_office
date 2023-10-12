import React from 'react'

export default function User() {
    return (
        <main role="main" className="main-content">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="row align-items-center my-4">
                            <div className="col">
                                <h2 className="h3 mb-0 page-title">Contacts</h2>
                            </div>
                            <div className="col-auto">
                                <button type="button" className="btn btn-secondary"><span className="fe fe-trash fe-12 mr-2"></span>Delete</button>
                                <button type="button" className="btn btn-primary"><span className="fe fe-filter fe-12 mr-2"></span>Create</button>
                            </div>
                        </div>
                        <div className="card shadow">
                            <div className="card-body">
                                <table className="table table-borderless table-hover">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="all2"/>
                                                        <label className="custom-control-label" htmlFor="all2"></label>
                                                </div>
                                            </th>
                                            <th>ID</th>
                                            <th>User</th>
                                            <th>Company</th>
                                            <th>Country</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="2474" />
                                                        <label className="custom-control-label" htmlFor="2474"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="avatar avatar-sm">
                                                    <img src="./assets/avatars/face-3.jpg" alt="..." className="avatar-img rounded-circle"/>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="mb-0 text-muted"><strong>Brown, Asher D.</strong></p>
                                                <small className="mb-0 text-muted">2474</small>
                                            </td>
                                            <td>
                                                <p className="mb-0 text-muted">Accumsan Consulting</p>
                                                <small className="mb-0 text-muted">Ap #331-7123 Lobortis Avenue</small>
                                            </td>
                                            <td>
                                                <p className="mb-0 text-muted"><a href="#" className="text-muted">(958) 421-0798</a></p>
                                                <small className="mb-0 text-muted">Nigeria</small>
                                            </td>
                                            <td className="text-muted">13/09/2020</td>
                                            <td><button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="text-muted sr-only">Action</span>
                                            </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#">Edit</a>
                                                    <a className="dropdown-item" href="#">Remove</a>
                                                    <a className="dropdown-item" href="#">Assign</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="2786"/>
                                                        <label className="custom-control-label" htmlFor="2786"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="avatar avatar-sm">
                                                    <img src="./assets/avatars/face-1.jpg" alt="..." className="avatar-img rounded-circle"/>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="mb-0 text-muted"><strong>Leblanc, Yoshio V.</strong></p>
                                                <small className="mb-0 text-muted">2786</small>
                                            </td>
                                            <td>
                                                <p className="mb-0 text-muted">Fringilla Ornare Placerat Consulting</p>
                                                <small className="mb-0 text-muted">287-8300 Nisl. St</small>
                                            </td>
                                            <td>
                                                <p className="mb-0 text-muted"><a href="#" className="text-muted">(899) 881-3833</a></p>
                                                <small className="mb-0 text-muted">Papua New Guinea</small>
                                            </td>
                                            <td className="text-muted">04/05/2019</td>
                                            <td><button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="text-muted sr-only">Action</span>
                                            </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#">Edit</a>
                                                    <a className="dropdown-item" href="#">Remove</a>
                                                    <a className="dropdown-item" href="#">Assign</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="2747"/>
                                                        <label className="custom-control-label" htmlFor="2747"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="avatar avatar-sm">
                                                    <img src="./assets/avatars/face-2.jpg" alt="..." className="avatar-img rounded-circle"/>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="mb-0 text-muted"><strong>Hester, Nissim L.</strong></p>
                                                <small className="mb-0 text-muted">2747</small>
                                            </td>
                                            <td>
                                                <p className="mb-0 text-muted">Tristique Ltd</p>
                                                <small className="mb-0 text-muted">4577 Cras St.</small>
                                            </td>
                                            <td>
                                                <p className="mb-0 text-muted"><a href="#" className="text-muted">(977) 220-6518</a></p>
                                                <small className="mb-0 text-muted">Central African Republic</small>
                                            </td>
                                            <td className="text-muted">21/08/2019</td>
                                            <td><button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="text-muted sr-only">Action</span>
                                            </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#">Edit</a>
                                                    <a className="dropdown-item" href="#">Remove</a>
                                                    <a className="dropdown-item" href="#">Assign</a>
                                                </div>
                                            </td>
                                        </tr>
                                       
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
