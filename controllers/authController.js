const passport = require('passport');
const Sequelize = require('sequelize');


exports.login = function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {

            return;
        }
        req.logIn(user, function(err) {
            if (err) {

                return next(err);
            }

            // return res.redirect('/dashboard');
            return true;
        });
    })(req, res, next);
};

// Función para revisar si el usuario esta logueado o no
exports.usuarioAutenticado = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/');
}