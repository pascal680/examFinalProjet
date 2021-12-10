import React from 'react'

const Boutons = ({ getAllClients, getAllClientsHommes, getAllClientsOntariens }) => {
    return (
        <div className="buttons">
            <button onClick={getAllClients}>Fetch tous les clients</button>
            <button onClick={getAllClientsHommes}>Fetch hommes</button>
            <button onClick={getAllClientsOntariens}> Fetch ontariens</button>
        </div >
    )
}

export default Boutons
