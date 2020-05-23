# Colors API  

API para el listado y creación de una base de datos de colores por medio de REST con soporte para respuestas en JSON o XML.

## Lenguaje y herramientas  

  - NodeJS / Typescript / MySQL
  - Tests:  Jest
  - Librerias: Sequelize, Xml
  - Docker compose

## Instalación  

### Entorno de desarrollo  

##### Clonar repositorio  

```sh
$ git clone https://github.com/fmunoztorrent/colors-api.git
```
##### Crear contenedor de MySQL  

```sh
$ sudo docker-compose up -d mysql_colors_multiplica_test
```
##### Instalar dependencias NPM  

```sh
$ npm install
```
##### Inciar entorno de desarrollo
  
```sh
$ npm run dev
```

### Traspaso a staging/producción  


##### Compilar Typescript a ES6  

```sh
$ npm run build
```
##### Crear Docker container con Dockerfile o Docker Compose  

```sh
$ sudo docker-compose build api_multiplica_colors
```
Se creará una imagen la cual puede ser comiteada al repositio el cual puede gatillar acciones de CI/CD