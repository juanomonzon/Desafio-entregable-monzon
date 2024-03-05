const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const userDao = require('../dao/userDao');
const config = require('../config/config');

const register = (req, res) => {
    // Implementación del controlador para el registro
};

const login = (req, res, next) => {
    // Implementación del controlador para el inicio de sesión
};

const getCurrentUser = (req, res) => {
    // Implementación del controlador para obtener el usuario actual
};

module.exports = {
    register,
    login,
    getCurrentUser
};
