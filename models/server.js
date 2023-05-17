const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth: '/api/auth',
            usuarios: '/api/usuarios',
            renew: '/api/renew',
            estacionamientos: '/api/estacionamientos',
            reservas: '/api/reservas'
        }

        // Conectar a base de datos
        this.conectarDB()

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection()
    }

    middlewares() {

        // CORS
        this.app.use(cors());

        this.app.use(express.json());

        // Directorio Público
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.usuarios, require('../routes/usuarios'));
        this.app.use(this.paths.renew, require('../routes/renew'));
        this.app.use(this.paths.estacionamientos, require('../routes/estacionamiento'));
        this.app.use(this.paths.reservas, require('../routes/reserva'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;
