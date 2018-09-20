 // JavaScript Document

var Usuario = require('./usuarioModel.js');
module.exports.insertarUsuario = function (callback) {
	let User1 = new Usuario({
		nombre: "gcastro",
		email: 'gcastro@live.com',
		password: '123456'
	});

	User1.save((error) => {
		if (error) callback(error);
		callback(null, "Usuario nuevo guardado");
	});
};

module.exports.eliminarUsuario = function (callback) {
	Usuario.remove({
		email: 'gcastro@live.com'
	}, (error) => {
		if (error) callback(error);
		callback(null, "Registro del usuario eliminado");
	});
};

module.exports.consultarUsuario = function (data, callback) {
	Usuario.findOne({
		email: data.email
	}, (err, user) => {
		if (user) {
			if (user.password === data.password)
				callback(null, user);
			else
				callback('Contraseña incorrecta');
		} else
			callback('Usuario no existe');
	});
};
