import Image from 'next/image'
import styles from './page.module.css'

export default function Dashboard() {
  return (
    <main role="main" className="main-content">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="row align-items-center mb-2">
              <div className="col">
                <h2 className="h5 page-title">Welcome!</h2>
              </div>
            </div>

          </div>
        </div>
      </div>

    </main>

  )
}
