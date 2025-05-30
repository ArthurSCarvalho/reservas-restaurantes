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
router.get('/confirmadas', (req, res) => {
  const query = `SELECT * FROM reservas WHERE status = 'confirmada'`;
  db.all(query, [], (err, rows) => {
    if (err) return res.status(500).json({ erro: 'Erro ao buscar reservas confirmadas.' });
    res.json(rows);
  });
});

module.exports = router;
