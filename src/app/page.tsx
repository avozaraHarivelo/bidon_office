import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <main role="main" className="main-content">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="row align-items-center my-4">
              <div className="col">
                <h2 className="h3 mb-0 page-title">Add Contact</h2>
              </div>
              <div className="col-auto">
                <button type="button" className="btn btn-primary">
                  Save Change
                </button>
              </div>
            </div>
            <form>
              <hr className="my-4" />
              <h5 className="mb-2 mt-4">Personal</h5>
              <p className="mb-4">
                Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus
              </p>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="firstname">Firstname</label>
                  <input type="text" id="firstname" className="form-control" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="lastname">Lastname</label>
                  <input type="text" id="lastname" className="form-control" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-8">
                  <label htmlFor="inputEmail4">Email</label>
                  <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputPhone">Phone</label>
                  <input type="text" className="form-control" id="inputPhone" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="custom-placeholder">Date of Birth</label>
                  <input
                    className="form-control input-placeholder"
                    id="custom-placeholder"
                    type="text"
                    name="placeholder"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState5">Gender</label>
                  <select id="inputState5" className="form-control">
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputLang">Language</label>
                  <select id="inputLang" className="form-control">
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                  </select>
                </div>
              </div>
              <hr className="my-4" />
              <h5 className="mb-2 mt-4">Company</h5>
              <p className="mb-4">
                Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus
              </p>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="firstname">Company Name</label>
                  <input type="text" id="firstname" className="form-control" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="lastname">Department</label>
                  <input type="text" id="lastname" className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress5">Address</label>
                <input type="text" className="form-control" id="inputAddress5" />
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="custom-zip">Zip code</label>
                  <input className="form-control input-zip" id="custom-zip" />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState5">Country</label>
                  <select id="inputState5" className="form-control">
                    <option value="">Select country...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState5">State</label>
                  <select id="inputState5" className="form-control">
                    <option  value="">Choose state...</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
              <hr className="my-4" />
              <div className="form-row">
                <div className="col-md-6">
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customPass"
                      defaultChecked
                    />
                    <label className="custom-control-label" htmlFor="customPass">
                      Create account and email generated password
                    </label>
                  </div>
                </div>
                <div className="col-md-6 text-right">
                  <button type="button" className="btn btn-primary">
                    Save Change
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </>
  
  )
}
