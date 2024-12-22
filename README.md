# Digital Library API

## Descripción

API REST para la gestión de una biblioteca digital. Permite manejar usuarios, libros y préstamos. Este proyecto está construido con Node.js, Express y MongoDB.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Docker](#docker)
- [Documentación API](#documentación-api)
- [Tests](#tests)
- [Swagger](#swagger)
- [Licencia](#licencia)

## Instalación

Para instalar las dependencias necesarias, sigue estos pasos:

1. Clona este repositorio:
   ```terminal
   git clone https://github.com/Nahiely02/proyecto-final-back3.git

2. Entra en el directorio del proyecto:
    ```terminal
    cd digital-library-api

3. Instala las dependencias:
    ```terminal
    npm install

## Ejecución:

    ```terminal
    npm run dev

## Docker:

### Enlace a imagen del proyecto:

    https://hub.docker.com/r/nahiely02/entregafinal-app

### Ejecución:    

1. Construir la imagen de Docker:
    ```terminal
    docker build -t digital-library-api .

2. Correr la imagen con Docker:
    ```terminal
    docker run -p 3000:3000 digital-library-api

3. Subir la imagen a Dockerhub:
    ```terminal
    docker login
    docker tag digital-library-api nahiely02/digital-library-api:latest
    docker push nahiely02/digital-library-api:latest

4. Acceder a la imagen desde Dockerhub:
    ```terminal
    docker pull nahiely02/digital-library-api:latest

## Documentación API

### Rutas

#### Usuarios (/api/users)
    POST /api/users/register - Registra un nuevo usuario.
    POST /api/users/login - Inicia sesión de un usuario.

#### Libros (/api/books)
    GET /api/books - Lista todos los libros.
    POST /api/books - Agrega un nuevo libro.
    GET /api/books/:id - Obtiene un libro por su ID.
    PUT /api/books/:id - Actualiza la información de un libro por su ID.
    DELETE /api/books/:id - Elimina un libro por su ID.

#### Préstamos (/api/loans)
    GET /api/loans - Lista todos los préstamos.
    POST /api/loans - Crea un nuevo préstamo.
    GET /api/loans/:id - Obtiene un préstamo por su ID.

## Tests
    ```terminal
    npm test

## Swagger
    ```terminal
    http://localhost:3000/api-docs

## License
Este proyecto está licenciado bajo la MIT License -