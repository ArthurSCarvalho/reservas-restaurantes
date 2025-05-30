const express = require('express');
const router = express.Router();
const db = require('../db/database');

// Criar nova reserva
router.post('/reservar', (req, res) => {
  const { data, hora, mesa, quantidade_pessoas, responsavel } = req.body;

  db.run(`
    INSERT INTO reservas (data, hora, mesa, quantidade_pessoas, responsavel)
    VALUES (?, ?, ?, ?, ?)
  `, [data, hora, mesa, quantidade_pessoas, responsavel], function (err) {
    if (err) {
      return res.status(500).json({ error: 'Erro ao criar reserva' });
    }
    res.status(201).json({ message: 'Reserva criada com sucesso', reserva_id: this.lastID });
  });
});

//Listar das reservas
router.get('/reservas', (req, res) => {
  db.all(`SELECT * FROM reservas`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar reservas' });
    }
    res.status(200).json(rows);
  });
});
module.exports = router;

