<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo
1. clonar el repositorio
2. Ejecutar
```
yarn install
```
3. Tener instalado Nest CLI
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos
```
docker-compose up -d
```

5. clonar el archivo __.env.template__ y renombrar la copia a __.env__

6. llenar las variable de entorno definidiad en el __.env__

7. Para desarrollo utilizar este comando para iniciar la app
```
yarn start:dev
```

8. Reconstruir la DB con la SEED
```
localhost:3000/api/seed/
```

## Stack utilizado
* MongoDB
* Nest
