const { application } = require('express')
const expres = require('express')
const condicion = expres.Router()



// Obtener
condicion.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM condicion', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })

})

// Mandar
condicion.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('INSERT INTO condicion set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send('Agregado')
        })
    })

})

// Eliminar
condicion.delete('/:id', (req, res) => {
        req.getConnection((err, conn) => {
            if (err) return res.send(err)
            conn.query('DELETE FROM condicion WHERE IdCondicion = ?', [req.params.id], (err, rows) => {
                if (err) return res.send(err)
                res.send('Eliminado')
            })
        })

    })
    // Modificar
condicion.put('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('UPDATE condicion set ? WHERE IdCondicion = ?', [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.send('Actualizado')
        })
    })

})



module.exports = condicion