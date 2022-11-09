const { application } = require('express')
const expres = require('express')
const turno = expres.Router()



// Obtener
turno.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM turno', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })

})

// Mandar
turno.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('INSERT INTO turno set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send('Agregado')
        })
    })

})

// Eliminar
turno.delete('/:id', (req, res) => {
        req.getConnection((err, conn) => {
            if (err) return res.send(err)
            conn.query('DELETE FROM turno WHERE 	Id-turno = ?', [req.params.id], (err, rows) => {
                if (err) return res.send(err)
                res.send('Eliminado')
            })
        })

    })
    // Modificar
turno.put('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('UPDATE turno set ? WHERE 	Id-turno = ?', [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.send('Actualizado')
        })
    })

})



module.exports = turno