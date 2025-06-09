 const express = require('express');
const router = express.Router();
const db = require('../db/database');

// Confirmar reserva
router.put('/confirmar/:id', (req, res) => {
  const { id } = req.params;
  const { garcom } = req.body;

  const query = `UPDATE reservas SET status = 'confirmada', garcom = ? WHERE id = ? AND status = 'reservado'`;
  db.run(query, [garcom, id], function (err) {
    if (err) return res.status(500).json({ erro: 'Erro ao confirmar reserva.' });

    if (this.changes === 0) {
      return res.status(400).json({ mensagem: 'Reserva não encontrada ou já confirmada.' });
    }

    res.json({ mensagem: 'Reserva confirmada com sucesso!' });
  });
});

module.exports = router;
