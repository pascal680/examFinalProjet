import React, { useState, useEffect } from 'react'
import Boutons from './Boutons'

const ListClients = () => {
    const [clients, setClients] = useState([])


    useEffect(async () => {
        const res = await fetch("http://localhost:8080/clients")
        const listClients = await res.json()
        console.log(listClients, "listClients")
        setClients(listClients)
    }, [])

    const getAllClients = async () => {
        const res = await fetch("http://localhost:8080/clients")
        const listClients = await res.json()
        console.log(listClients, "listClients")
        setClients(listClients)
    }

    const getClientsHommes = async () => {
        const res = await fetch("http://localhost:8080/clients/homme")
        const listClients = await res.json()
        console.log(listClients, "listClients")
        setClients(listClients)
    }

    const getClientsOntariens = async () => {
        const res = await fetch("http://localhost:8080/clients/ontariens")
        const listClients = await res.json()
        console.log(listClients, "listClients")
        setClients(listClients)
    }

    const displayListClients = clients.map(client =>
        <tr key={client.id}>
            <td>{client.id}</td>
            <td>{client.firstName}</td>
            <td>{client.lastName}</td>
            <td>{client.gender}</td>
            <td>{client.birthDate}</td>
        </tr>
    )


    return (
        <div>
            <div className="div1">
                <Boutons getAllClients={getAllClients} getAllClientsHommes={getClientsHommes} getAllClientsOntariens={getClientsOntariens} />
            </div>
            <div className="div2">
                <table>
                    {displayListClients}
                </table>
            </div>
        </div>
    )
}

export default ListClients
