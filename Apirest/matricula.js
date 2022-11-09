const { application } = require('express')
const expres = require('express')
const matricula = expres.Router()



// Obtener
matricula.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM matricula', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })

})

// Mandar
matricula.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('INSERT INTO matricula set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send('Agregado')
        })
    })

})

// Eliminar
matricula.delete('/:id', (req, res) => {
        req.getConnection((err, conn) => {
            if (err) return res.send(err)
            conn.query('DELETE FROM matricula WHERE 	Id-Matricula= ?', [req.params.id], (err, rows) => {
                if (err) return res.send(err)
                res.send('Eliminado')
            })
        })

    })
    // Modificar
matricula.put('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('UPDATE matricula set ? WHERE 	Id-Matricula = ?', [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.send('Actualizado')
        })
    })

})



module.exports = matricula