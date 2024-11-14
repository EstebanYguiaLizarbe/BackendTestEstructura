const { response } = require('express');
const bcrypt = require('bcrypt');

const Usuario = require('../models/usuario');

// estoy usando node 20.9.0

const getUsuarios = (req, res) => {

    const usuarios = Usuario.find({}, 'nombre email role google img');

    res.json({usuarios: usuarios});    
}

const crearUsuario = async (req, res) => {
    const {email, password} = req.body;

    try {

        const existeEmail = await Usuario.findOne({ email });

        if ( existeEmail ) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya está registrado'
            });
        }

        const usuario = new Usuario( req.body );
    
        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );
    
    
        // Guardar usuario
        await usuario.save();

        // Generar el TOKEN - JWT
        const token = await generarJWT( usuario.id );


        res.json({
            ok: true,
            usuario,
            token
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        });
    }
}

module.exports = {
    getUsuarios,
    crearUsuario
}