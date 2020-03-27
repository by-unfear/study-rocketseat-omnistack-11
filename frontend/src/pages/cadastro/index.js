import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';
import logoImg from '../../assets/logo.svg';

export default function Cadastro(){
	const [ nome, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ whatsapp, setWhatsapp ] = useState('');	
	const [ cidade, setCidade ] = useState('');
	const [ uf, setEstado ] = useState('');
	const history = useHistory();
	
	async function envviarCadastro(event){
		event.preventDefault();
		const data = { nome, email, whatsapp, cidade, uf };
		try {
			const resposta = await api.post('ongs', data);
			alert(`Sua id de Acesso: ${resposta.data.id}`);
			history.push('/');
		}catch (err){
			alert('Erro no cadastro, tente novamente');
		}
	}
	return (
		<div className="cadastro-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be The Super Vilan"/>
					<h1>Cadastro</h1>
					<p>Faça seu cadastro, entre na plataform e ajude pessoas a encontrar os cados da sua Gangue</p>
					<Link className="back-link" to="/">
						<FiArrowLeft size={16} color="#E02041"/>
						Voltar ao a area de Login.
					</Link>
				</section>
				<form onSubmit={envviarCadastro}>
					<input 
						placeholder="Nome da Gangue"
						value={nome}
						onChange={event => setName(event.target.value)}
					/>
					<input 
						placeholder="Email" 
						type="email"
						value={email}
						onChange={event => setEmail(event.target.value)}
					/>
					<input 
						placeholder="Whatsapp"
						value={whatsapp}
						onChange={event => setWhatsapp(event.target.value)}
					/>
					<div className="input-group">
						<input 
							placeholder="Cidade"
							value={cidade}
							onChange={event => setCidade(event.target.value)}
						/>
						<input 
							placeholder="UF" 
							style={{ width:80 }}
							value={uf}
							onChange={event => setEstado(event.target.value)}
						/>
					</div>
					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
	);
} 