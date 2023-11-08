<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio

2. Ejecutar
```bash
$ npm install
```

3. Tener Nest CLI Instalado
```bash	
$ npm i -g @nestjs/cli@9.5.0
```

4. Levantar la base de datos
```bash
$ docker-compose up -d
```

5. Clonar el archivo ```.env.template``` y renombrarlo a ```.env```

6. Llenar las variables de entorno definidas en el archivo ```.env```

7. Ejecutar la aplicación en modo desarrollo

```bash
$ npm run start:dev
```
8. Reconstruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed
```

## Stack tecnológico
* NestJS
* MongoDB

# Production Build

1. Crear el archivo ```.env.prod``` 
2. Llenar las variables del entorno de producción
3. Crear la nueva imagen de docker
```bash
$ docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```