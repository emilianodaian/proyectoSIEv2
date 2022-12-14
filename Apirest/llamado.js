const { application } = require('express')
const expres = require('express')
const llamado = expres.Router()



// Obtener
llamado.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM llamado', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })

})

// Obtener uno
// llamado.get('/:id', (req, res) => {
//     req.getConnection((err, conn) => {
//         if (err) return res.send(err)
//         conn.query('SELECT * FROM llamado WHERE Id-Llamado =? ', [req.params.id], (error, rows) => {
//             if (error) throw error
//             else {
//                 res.json(rows)
//             }
//         })
//     });
// });
// Mandar
llamado.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('INSERT INTO llamdo set ?', [req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send('Agregado')
        })
    })

})

// Eliminar
llamado.delete('/:id', (req, res) => {
        req.getConnection((err, conn) => {
            if (err) return res.send(err)
            conn.query('DELETE FROM llamado WHERE Id-Llamado = ?', [req.params.id], (err, rows) => {
                if (err) return res.send(err)
                res.send('Eliminado')
            })
        })

    })
    // Modificar
llamado.put('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('UPDATE llamado set ? WHERE Id-Llamado = ?', [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.send('Actualizado')
        })
    })

})



module.exports = llamado