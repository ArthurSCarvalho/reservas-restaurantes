 const sqlite3 = require('sqlite3').verbose();
 const db = new sqlite3.Database('./db/reservas.db');


// Tabela de reservas
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS reservas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      data TEXT,
      hora TEXT,
      mesa INTEGER,
      quantidade_pessoas INTEGER,
      responsavel TEXT,
      status TEXT DEFAULT 'pendente'
    )
  `);

  // Tabela de confirmações de garçom
  db.run(`
    CREATE TABLE IF NOT EXISTS confirmacoes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      reserva_id INTEGER,
      confirmado_em TEXT,
      FOREIGN KEY(reserva_id) REFERENCES reservas(id)
    )
  `);
});

module.exports = db;
