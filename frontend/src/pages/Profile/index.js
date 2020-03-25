import React, { useEffect, useState } from 'react';

import './styles.css';

import logoImg from '../../assets/logo.svg';

import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

export default function Profile() {

    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');


    /**
     * O useEffect serve para disparar uma funcao em algum determinado momento de um componente
     * O useEffect recebe 2 parametros, primeiro a funcao que quero que seja executada
     * o segundo quando a funcao vai ser executada
     */
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            //concat
            // await api.delete('incidents/'.concat(id), {
            //     headers: {
            //         Authorization: ongId,
            //     }
            // });
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });
        } catch (error) {
            alert('Erro ao deletar o caso, tente novamente');
        }

        setIncidents(incidents.filter(incident => incident.id !== id));
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>

                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}