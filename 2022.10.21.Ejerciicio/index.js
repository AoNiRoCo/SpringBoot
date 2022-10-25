

const { application, response } = require('express')
//asociación de las dependencias del framework Express a una variable
const express = require('express')
const body_parser = require('body-parser')
//creación de la instancia de la aplicación express
const app = express()

app.use(body_parser.urlencoded({extended : true}))
app.use(body_parser.json());
const db_manager = require('./baseDeDatos/BDD_Productos')
const producto = require('./modelos/producto.js')
//Definición de una operación de tipo GET en nuestra app
/*app.get('/', (request,response) => {
    response.send('hola mundo desde curso api')
})
*/

app.post('/producto', (request, response) => {
    db_manager.producto_create(request,response);
})

app.get('/producto',(request,response) => {
    db_manager.detalle_producto(request,response)
})

app.put('/producto',(request,response) => {
    db_manager.update_producto(request, response)
})
app.delete('/producto',(request,response) => {
    db_manager.delete(request.response)
})
 


//Definición del puerto de escucha en la app
app.listen(9898, () => {
    console.log('CURSO API REST corriendo en puerto 9898!')
})