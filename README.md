# uuidPeticion Middleware

Middleware de Express para agregar un UUID único a cada solicitud y adjuntarlo al objeto `req` para fines de registro y seguimiento.

## Instalación

Para instalar el middleware `uuidPeticion`, puedes utilizar npm o yarn:

```bash
npm install uuid-peticion-middleware
```

o

```bash
yarn add uuid-peticion-middleware
```

## Uso

```javascript
const express = require('express');
const log4js = require('log4js');
const uuidPeticionMiddleware = require('uuid-peticion-middleware');

const app = express();
log4js.configure({
  appenders: {
    console: { type: 'console' },
    file: { type: 'file', filename: 'logs/app.log' }
  },
  categories: {
    default: { appenders: ['console'], level: 'debug' },
    file: { appenders: ['file'], level: 'debug' }
  }
});

app.use(uuidPeticionMiddleware(log4js, 'file')); // Agregar middleware con un nombre de appender específico
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

## API

### `uuidPeticionMiddleware(log4js, appenderName)`

Crea un middleware de Express que agrega un UUID único a cada solicitud y lo adjunta al objeto `req`.

- `log4js`: Instancia de Log4js para registrar mensajes de registro.
- `appenderName` (opcional): Nombre del appender de Log4js donde se registrarán los mensajes. Por defecto, utiliza el appender `'default'`.
