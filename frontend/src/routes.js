import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Perfil from './pages/perfil';
import IncidenteNovo from './pages/incidente-novo';

export default function Routes(){
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/cadastro" component={Cadastro} />
				<Route path="/perfil" component={Perfil} />
				<Route path="/incidente/novo" component={IncidenteNovo} />
			</Switch>
		</BrowserRouter>
	);
}