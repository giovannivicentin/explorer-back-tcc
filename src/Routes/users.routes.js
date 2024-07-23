const { Router } = require('express');

const UsersController = require('../Controllers/UsersController');

// eslint-disable-next-line new-cap
const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post('/', usersController.create);

module.exports = usersRoutes;
