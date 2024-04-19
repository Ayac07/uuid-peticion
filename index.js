const { v4: uuidv4 } = require('uuid');

const uuidPeticion = (log4js, appenderName = 'default') => (req, res, next) => {
    const logger = log4js.getLogger(appenderName);
    try {
        const uuid = uuidv4();

        // Agregar la información de la petición al objeto req
        req.infoPeticion = {
            uuid: uuid,
            url: req.baseUrl, 
            logger: `[PROCESO ${uuid} PETICION: ${req.baseUrl}]`
        };
        next();
    } catch (error) {
        logger.error('Ocurrió un error en el Middleware de Uuid Peticion:', error);
    }
};

module.exports = uuidPeticion;