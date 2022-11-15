const expres = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection')
const cors = require('cors')

// Rutas para los http
const persona = require('./rutas')
const carrera = require('./Carreras')
const llamado = require('./llamado')
const materia = require('./Materias')
const tusuario = require('./T-Usuario')
const asistencia = require('./asistencia')
const calificacion = require('./calificacion')
const turno = require('./turno')
const condicion = require('./condicion')
const matricula = require('./matricula')

const dboption = {
    host: 'localhost',
    port: 3306,
    user: 'Ale',
    password: '1234',
    database: 'i-mesas'
}

const app = expres();
app.use(myconn(mysql, dboption, 'single'))
app.use(expres.json())
app.use(cors())



// Configuro el puerto
app.set('port', process.env.PORT || 2000)


// Ruta de visualizacion
app.get('/', (req, res) => {
    res.send('Bienvenidos a api')
})







// Ruta de inscripcion
app.use('/api', persona)
    // Ruta de carreras
app.use('/carr', carrera)
    // Ruta de Llamados
app.use('/lla', llamado)
    // Ruta de materias
app.use('/mat', materia)
    // Tipo de usuarios
app.use('/tusu', tusuario)
    // Calificaciones
app.use('/cali', calificacion)
    // asistencia
app.use('/asis', asistencia)
    // Matricula
app.use('/matri', matricula)
    // Condicion
app.use('/condi', condicion)
    // turno
app.use('/turno', turno)

// Servidor corriendo
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en puerto', app.get('port'))
})