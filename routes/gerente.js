 const express = require('express');
const router = express.Router();
const db = require('../db/database');

// Relatório por período
router.get('/periodo', (req, res) => {
  const { inicio, fim } = req.query;

  const query = `SELECT * FROM reservas WHERE data BETWEEN ? AND ?`;
  db.all(query, [inicio, fim], (err, rows) => {
    if (err) return res.status(500).json({ erro: 'Erro ao buscar reservas.' });
    res.json(rows);
  });
});

// Relatório por mesa
router.get('/mesa/:mesa', (req, res) => {
  const { mesa } = req.params;

  const query = `SELECT * FROM reservas WHERE mesa = ?`;
  db.all(query, [mesa], (err, rows) => {
    if (err) return res.status(500).json({ erro: 'Erro ao buscar reservas.' });
    res.json(rows);
  });
});

// Relatório de reservas confirmadas
router.get('/garcom/:nome', (req, res) => {
  const { nome } = req.params;
  db.all(`SELECT * FROM reservas WHERE garcom = ? AND status = 'confirmada'`, [nome], (err, rows) => {
    if (err) return res.status(500).json({ erro: 'Erro ao buscar reservas.' });
    if (rows.length === 0) return res.json({ mensagem: 'Nenhuma reserva confirmada por este garçom.' });
    res.json(rows);
  });
});

module.exports = router;
