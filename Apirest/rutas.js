const { application } = require('express')
const expres = require('express')
const rute = expres.Router()



// Obtener
rute.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM persona', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })

})

// Mandar
rute.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('INSERT INTO persona set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send('Agregado')
        })
    })

})

// Eliminar
rute.delete('/:id', (req, res) => {
        req.getConnection((err, conn) => {
            if (err) return res.send(err)
            conn.query('DELETE FROM persona WHERE IdPersona = ?', [req.params.id], (err, rows) => {
                if (err) return res.send(err)
                res.send('Eliminado')
            })
        })

    })
    // Modificar
rute.put('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('UPDATE persona set ? WHERE IdPersona = ?', [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.send('Actualizado')
        })
    })

})



module.exports = rute