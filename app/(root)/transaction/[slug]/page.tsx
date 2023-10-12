import React from 'react'

export default function Transaction() {
  return (
    <main role="main" className="main-content">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12">
          <h2 className="h3 mb-3 page-title">Orders</h2>
          <div className="row mb-4 items-align-center">
            <div className="col-md">
              <ul className="nav nav-pills justify-content-start">
                <li className="nav-item">
                  <a className="nav-link active bg-transparent pr-2 pl-0 text-primary" href="#">All <span className="badge badge-pill bg-primary text-white ml-2">164</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-muted px-2" href="#">Pending <span className="badge badge-pill bg-white border text-muted ml-2">64</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-muted px-2" href="#">Processing <span className="badge badge-pill bg-white border text-muted ml-2">48</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-muted px-2" href="#">Completed <span className="badge badge-pill bg-white border text-muted ml-2">52</span></a>
                </li>
              </ul>
            </div>
            <div className="col-md-auto ml-auto text-right">
              <span className="small bg-white border py-1 px-2 rounded mr-2 d-none d-lg-inline">
                <a href="#" className="text-muted"><i className="fe fe-x mx-1"></i></a>
                <span className="text-muted">Status : <strong>Pending</strong></span>
              </span>
              <span className="small bg-white border py-1 px-2 rounded mr-2 d-none d-lg-inline">
                <a href="#" className="text-muted"><i className="fe fe-x mx-1"></i></a>
                <span className="text-muted">April 14, 2020 - May 13, 2020</span>
              </span>
              <button type="button" className="btn" data-toggle="modal" data-target=".modal-slide"><span className="fe fe-filter fe-16 text-muted"></span></button>
              <button type="button" className="btn"><span className="fe fe-refresh-ccw fe-16 text-muted"></span></button>
            </div>
          </div>
          <div className="modal fade modal-slide"  role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="defaultModalLabel">Filters</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <i className="fe fe-x fe-12"></i>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="p-2">
                    <div className="form-group my-4">
                      <p className="mb-2"><strong>Regions</strong></p>
                      <label htmlFor="multi-select2" className="sr-only"></label>
                      <select className="form-control select2-multi" id="multi-select2">
                        <optgroup label="Mountain Time Zone">
                          <option value="AZ">Arizona</option>
                          <option value="CO">Colorado</option>
                          <option value="ID">Idaho</option>
                          <option value="MT">Montana</option>
                          <option value="NE">Nebraska</option>
                          <option value="NM">New Mexico</option>
                          <option value="ND">North Dakota</option>
                          <option value="UT">Utah</option>
                          <option value="WY">Wyoming</option>
                        </optgroup>
                        <optgroup label="Central Time Zone">
                          <option value="AL">Alabama</option>
                          <option value="AR">Arkansas</option>
                          <option value="IL">Illinois</option>
                          <option value="IA">Iowa</option>
                          <option value="KS">Kansas</option>
                          <option value="KY">Kentucky</option>
                          <option value="LA">Louisiana</option>
                          <option value="MN">Minnesota</option>
                          <option value="MS">Mississippi</option>
                          <option value="MO">Missouri</option>
                          <option value="OK">Oklahoma</option>
                          <option value="SD">South Dakota</option>
                          <option value="TX">Texas</option>
                          <option value="TN">Tennessee</option>
                          <option value="WI">Wisconsin</option>
                        </optgroup>
                      </select>
                    </div>
                    <div className="form-group my-4">
                      <p className="mb-2">
                        <strong>Payment</strong>
                      </p>
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                        <label className="custom-control-label" htmlFor="customCheck1">Paypal</label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                        <label className="custom-control-label" htmlFor="customCheck2">Credit Card</label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1-1" defaultChecked />
                        <label className="custom-control-label" htmlFor="customCheck1">Wire Transfer</label>
                      </div>
                    </div>
                    <div className="form-group my-4">
                      <p className="mb-2">
                        <strong>Types</strong>
                      </p>
                      <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="customRadio1">End users</label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" defaultChecked />
                        <label className="custom-control-label" htmlFor="customRadio2">Whole Sales</label>
                      </div>
                    </div>
                    <div className="form-group my-4">
                      <p className="mb-2">
                        <strong>Completed</strong>
                      </p>
                      <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
                        <label className="custom-control-label" htmlFor="customSwitch1">Include</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn mb-2 btn-primary btn-block">Apply</button>
                  <button type="button" className="btn mb-2 btn-secondary btn-block">Reset</button>
                </div>
              </div>
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
                <th>Purchase Date</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Ship To</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="align-center">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input"/>
                    <label className="custom-control-label"></label>
                  </div>
                </td>
                <td>1331</td>
                <td>2020-12-26 01:32:21</td>
                <td>Kasimir Lindsey</td>
                <td>(697) 486-2101</td>
                <td>996-3523 Et Ave</td>
                <td>$3.64</td>
                <td> Paypal</td>
                <td><span className="dot dot-lg bg-success mr-2"></span></td>
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
              <tr>
                <td className="align-center">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input"/>
                    <label className="custom-control-label"></label>
                  </div>
                </td>
                <td>1156</td>
                <td>2020-04-21 00:38:38</td>
                <td>Melinda Levy</td>
                <td>(748) 927-4423</td>
                <td>Ap #516-8821 Vitae Street</td>
                <td>$4.18</td>
                <td> Paypal</td>
                <td><span className="dot dot-lg bg-warning mr-2"></span></td>
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
   
   
  </main>
  )
}
