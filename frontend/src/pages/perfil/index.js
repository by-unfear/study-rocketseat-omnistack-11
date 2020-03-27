import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import './style.css';

import logoImg from '../../assets/logo.svg';

export default function Perfil() {
	const history = useHistory();

	const [incidents, atualizarIncidentes] = useState([]);

	const ongNome = localStorage.getItem('ongNome');
	const ongID = localStorage.getItem('ongID');

	useEffect(() => {
		api.get('profile', {
			headers: {
				Authorization: ongID
			}
		}).then(
			resposta => {
				atualizarIncidentes(resposta.data);
			}
		);
	}, [ongID]);

	async function deletarIncident(id) {
		try {
			await api.delete(`incidents/${id}`, {
				headers: {
					Authorization: ongID
				}
			});
			atualizarIncidentes(
				incidents.filter(incident => incident.incidentID !== id)
			);
		} catch (error) {
			alert('Erro ao tentar deletar o incidente');
		}
	}

	function acaoLogOut() {
		localStorage.clear();
		history.push('/');
	}

	return (
		<div className="perfil-container">
			<header>
				<img src={logoImg} alt="Logo" />
				<span>Bem vindo, {ongNome}</span>
				<Link className="button" to="/incidente/novo">Cadastrar novo caso</Link>
				<button onClick={acaoLogOut}>
					<FiPower size={16} color="#E02041" />
				</button>
			</header>
			<h1>Casos cadastrados</h1>
			<ul>
				{incidents.map(incident => (
					<li key={incident.incidentID}>
						<strong>Caso:</strong>
						<p>{incident.incidentTitulo}n</p>
						<strong>Descrição:</strong>
						<p>{incident.incidentDescricao}</p>
						<strong>Valor:</strong>
						<p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.incidentValor)}</p>
						<button onClick={() => deletarIncident(incident.incidentID)} type="button"><FiTrash2 size={20} color="#a8a8b3" /></button>
					</li>
				))}
			</ul>
		</div>
	);
} 