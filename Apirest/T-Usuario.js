const { application } = require('express')
const expres = require('express')
const tusuario = expres.Router()



// Obtener
tusuario.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM tusuario', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })

})

// Mandar
tusuario.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('INSERT INTO tusuario set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send('Agregado')
        })
    })

})

// Eliminar
tusuario.delete('/:id', (req, res) => {
        req.getConnection((err, conn) => {
            if (err) return res.send(err)
            conn.query('DELETE FROM tusuario WHERE 	idtusuario= ?', [req.params.id], (err, rows) => {
                if (err) return res.send(err)
                res.send('Eliminado')
            })
        })

    })
    // Modificar
tusuario.put('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('UPDATE tusuario set ? WHERE 	idtusuario= ?', [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.send('Actualizado')
        })
    })

})



module.exports = tusuario