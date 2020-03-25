const express = require('express');
const routes = express.Router();

const ongs = require('./ctrl/ongs');
const incidents = require('./ctrl/incidents');
const profile = require('./ctrl/profile');
const login = require('./ctrl/login');

//Rotas Ongs
routes.get('/ongs', ongs.lst);
routes.get('/ongs/:id', ongs.get);
routes.post('/ongs', ongs.add);
routes.put('/ongs/:id', ongs.upt);
routes.delete('/ongs/:id', ongs.del);

//Rotas Incidents
routes.get('/incidents', incidents.lst);
routes.get('/incidents/:id', incidents.get);
routes.post('/incidents', incidents.add);
routes.put('/incidents/:id', incidents.upt);
routes.delete('/incidents/:id', incidents.del);

//Rota profile
routes.get('/profile', profile.get);

//Rota login
routes.post('/login', login.create);

module.exports = routes;

