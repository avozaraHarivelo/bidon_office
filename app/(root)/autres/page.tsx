import Compte from '@/components/forms/Compte'
import Prix from '@/components/forms/Prix'
import React from 'react'

export default function settings() {
    return (
        <main role="main" className="main-content">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h2 className="page-title">Paramètres</h2>
                        <p className="text-muted">C'est ici qu'on voit les paramètres de l'application</p>
                        <div className="card-deck">
                            <Compte/>
                            <Prix/>
                        </div>

                    </div>
                </div>
            </div>

        </main>
    )
}
