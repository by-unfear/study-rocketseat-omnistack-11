import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';
import logoImg from '../../assets/logo.svg';

export default function IncidenteNovo() {
	const history = useHistory();

	const [titulo, setTitulo] = useState('');
	const [descricao, setDescricao] = useState('');
	const [valor, setValor] = useState('');

	const ongID = localStorage.getItem('ongID');

	async function salvarNovoIncident(event) {
		event.preventDefault();

		const data = {
			titulo,
			descricao,
			valor
		};
		console.log(data);

		try {
			const resposta = await api.post('incidents', data, {
				headers: {
					Authorization: ongID
				}
			});
			alert(`Incidente cadastrado: ${resposta.data.incidentID}`);
			history.push('/perfil');
		} catch (error) {
			alert('Não foi possivel cadastrar');
		}

	}
	return (
		<div className="novo-incidente-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be The Super Vilan" />
					<h1>Cadastrar novo caso</h1>
					<p>Descreva o novo cado para encontrar o heroi</p>
					<Link className="back-link" to="/perfil">
						<FiArrowLeft size={16} color="#E02041" />
						Voltar para a home
					</Link>
				</section>
				<form onSubmit={salvarNovoIncident}>
					<input
						placeholder="Titulo do caso"
						value={titulo}
						onChange={event => setTitulo(event.target.value)}
					/>
					<textarea
						placeholder="Descrição"
						value={descricao}
						onChange={event => setDescricao(event.target.value)}
					/>
					<input
						placeholder="Valor em reais"
						value={valor}
						onChange={event => setValor(event.target.value)}
					/>
					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
	);
} 