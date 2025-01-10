const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_SECRET } = require("../config.js");

module.exports = {
    checkJwt: (req, res, next) => {
        // Récupérer le JWT depuis l'en-tête Authorization
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Token manquant.' });
        }

        // Vérifier et décoder le token
        jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                console.error('Erreur de vérification du token:', err);
                return res.status(403).json({ message: 'Token invalide.' });
            }
            req.user = user;
            next();
        });
    }
};
