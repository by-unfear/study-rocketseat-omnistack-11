import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import './style.css';

import logoImg from '../../assets/logo.svg'
import vilanImg from '../../assets/vilans.png'

export default function Login() {
	const [ id, setID ] = useState('');
	const history = useHistory();
	async function fazerLogin(event){
		event.preventDefault();
		try {
			const resposta = await api.post('login', { id });
			localStorage.setItem('ongID', id)
			localStorage.setItem('ongNome', resposta.data.ongNome)
			alert(`Sua id de Acesso: ${resposta.data.ongNome}`);
			history.push('/perfil');
		}catch (err){
			alert('Erro id inválida, tente novamente');
		}
	}
	return (
		<div className="login-container">
			<section className="form">
				<img src={logoImg} alt="Be A Super Vilan" />
				<form onSubmit={fazerLogin}>
					<h1>Faça seu login</h1>
					<input 
						type="text" 
						placeholder="Sua ID"
						value={id}
						onChange={event => setID(event.target.value)}
					/>
					<button type="submit" className="button">Entrar</button>
					<Link to="/cadastro" className="back-link"><FiLogIn size={16} color="#E02041" />Não tenho cadastro</Link>
				</form>
			</section>
			<img src={vilanImg} alt="Vilans" />
		</div>
	);
} 