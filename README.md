# Documentación Back-End - Control de Usuarios

-----

## Autor
- [Daniel Alanis](https://github.com/danielalejandroalanis)

-----

## Ambiente de prueba

    - OS Local: Linux Mint 19
    - Node Version: v14.17.1
    - NPM version: v6.14.13

## Tecnologías utilizadas:

    - NodeJS
    - MongoDB
    - Visual Studio Code
    - Postman

## Estructura del proyecto

```bash
├── node_modules
├── src
│   ├── models
│   ├── routes
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## Ejecución local

**Clonar repositorio:** 

> git clone https://github.com/danielalejandroalanis/backoffice-backend.git

**Ejecución en consola:**

> npm start

**Ejecución con nodemon:**

> npm test

## Esquemas

**Usuario:**
```
    {
        _id: ObjectId(Autogenerated),
        first_name: String,
        last_name: String,
        email_address: String,
        type: String
    }
```

## Variables de entorno

    - URL_DATABASE: conexión a la base de datos
    - PORT: puerto lógico del servidor

## Endpoints (sobre localhost)

**Listar todos los usuarios de la base de datos:**
> http://localhost:PORT/users/list

**Crear un nuevo usuario:**
> http://localhost:PORT/users/create

