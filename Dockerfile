# Usar una imagen base de Node.js
FROM node:18-alpine

#Creamos un directorio en el contenedor para la aplicación
WORKDIR /app

# Copiamos los archivos del proyecto al contenedor
COPY package*.json ./

# Instalar las dependencias
RUN npm install

COPY . .

#Puerto en el que tu app estará corriendo
EXPOSE 3000

# Iniciar la aplicación
CMD ["npm", "start"]