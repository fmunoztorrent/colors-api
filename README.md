# Colors API  

API para el listado y creación de una base de datos de colores por medio de REST con soporte para respuestas en JSON o XML.
[URL de pruebas](https://apicolors.fmunoz.cl/colores)  

## Uso y consumo API

##### Listar colores
GET https://apicolors.fmunoz.cl/colores
###### Paginación
Para usar paginación se debe incluir el parámetro **page** como querystring a la petición. Si no está presente se listará la página 1. El orden de aparición de los items es por id descendiente.
Ejemplo: https://apicolors.fmunoz.cl/colores?page=2

###### Respuesta en XML
La respuesta por defecto del API es en formato JSON. Si se requiere una respuesta en XML se debe incluir el parámetro **format=xml** dentro del querystring.
Ejemplo: https://apicolors.fmunoz.cl/colores?format=xml

Se pueden combinar los dos parametros para usar paginación y el formato de respuesta. Ejemplo: https://apicolors.fmunoz.cl/colores?format=xml&page=2

##### Ver detalle de un color por ID
GET https://apicolors.fmunoz.cl/colores/:id
Ejemplo: https://apicolors.fmunoz.cl/colores/1
El parámetro **id** debe ser un número entero igual o mayor a 1.
Se puede obtener una respuesta en formato xml usando el parámetro **format=xml** en el querystring de la url de solicitud.

##### Creación de nuevos colores
POST https://apicolors.fmunoz.cl/colores
Ejemplo: https://apicolors.fmunoz.cl/colores
###### Payload para creación de un nuevo color
```json
{
    "name": "New Color",
    "year": 2020,
    "color": "#FFFFFF",
    "pantoneValue": "45-2323"
}
```
###### Restricciones para el payload y validaciones
1. No puede ser incluido el ID en formato numérico o fallará la petición.
2. El formato de color es en hexadecimal completo, vale decir #FFFFFF será válido mientras #FFF fallará.
3. El código de color pantone debe ser en formato 12-3456
---

## Lenguaje y herramientas  

  - NodeJS / Typescript / MySQL
  - Tests:  Jest
  - Librerias: Sequelize, Xml
  - Docker compose
  
---

## Instalación  

### Entorno de desarrollo  

##### Clonar repositorio  

```sh
$ git clone <URL>
```
##### Crear y levantar contenedor de MySQL  

```sh
$ sudo docker-compose up -d mysql_colors_multiplica_test
```

1. Si se saca el parámetro -d se pueden ver los logs del MySQL.
2. Se incluye PhpMyAdmin en el puero 8082 para mayor comodidad.

##### Instalar dependencias NPM  

```sh
$ npm install
```
##### Iniciar entorno de desarrollo
  
```sh
$ npm run dev
```

##### Herramientas/utilidades de desarrollo
Se include script para traspasar de CSV a SQL o para injectar al API. Se requiere tener python3 instalado pero no requiere de ninguna librería adicional. Se encuentras en api/initial_data

###### Exportar de CSV a SQL
```sh
$ sudo chmod +x importer.py && python3 importer.py > sql_colors.sql
```
###### Inyectar a API desde el CSV
```sh
$ sudo chmod +x import_csv_to_api.py && python3 import_csv_to_api.py
```

##### Información del entorno de desarrollo
- El archivo de configuración de la aplicación se encuentra en **src/.env**
- Para ejecutar los tests se debe ejecutar **npm run test** en el root de la carpeta **api** (en donde se encuentra el package.json)
    
### Traspaso a staging/producción  

##### Crear container con Docker Compose  
Antes de crear el contenedor, se deben actualizar las variables de entorno relacionadas con la base de datos MySQL, y URL del API escritas en docker-compose.prod.yaml   

*El Dockerfile incluye la compilación del codigo Typescript a Javascript ES6*

```sh
$ sudo docker-compose -f docker-compose.prod.yaml up --build -d
```
Se creará una imagen la cual puede ser comiteada al repositio el cual puede gatillar acciones de CI/CD