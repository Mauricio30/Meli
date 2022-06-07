# Iniciar el proyecto searching in Meli

## Scripts disponibles

En del directorio del proyecto, puedes ejecutar:

### `npm start`

Corre la aplicación en modo desarrollador
Abre [http://localhost:3001](http://localhost:3001) para ver la aplicación en el navegador.
## Paths habilitados

http://localhost:3001/api/items?q=:query => Retorna una lista de productos, de acuerdo a query. Respuesta exitosa de la petición:

```json
{
"author": {
"name": "String",
"lastname": "String"
},
"categories": ["String", "String", "String"],
"items": [
{
"id": "String",
"title": "String",
"price": {
"currency": "String",
"amount": "Number",
"decimals": "Number"
},
"picture": "String",
"condition": "String",
"free_shipping": "Boolean"
}]
}
```

http://localhost:3001/api/items/:id => buscar producto especifico.

Respuesta exitosa del servicio: 

```json
{
"author": {
"name": "String",
"lastname": "String"
},
"item": {
"id": "String",

"title": "String",
"price": {
"currency": "String",
"amount": "Number",
"decimals": "Number",
},
"picture": "String",
"condition": "String",
"free_shipping": "Boolean",
"sold_quantity": "Number",
"description": "String",
"categories": ["String", "String", "String"],
}
}
```

