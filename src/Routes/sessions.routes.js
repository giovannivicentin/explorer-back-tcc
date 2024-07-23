const { Router } = require('express');

const SessionsController = require('../Controllers/SessionsController');

// eslint-disable-next-line new-cap
const sessionsRoutes = Router();

const sessionsController = new SessionsController();

sessionsRoutes.post('/', sessionsController.create);

module.exports = sessionsRoutes;
