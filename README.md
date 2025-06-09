# Reserva Restaurante

Sistema cliente-servidor para **reserva de mesas em restaurante**, com três perfis de usuário: Atendente, Garçom e Gerente. Desenvolvido em Node.js, Express e SQLite, com interface web responsiva.

---

## Funcionalidades

### Atendente
- Cadastra reservas (nome, data, hora, mesa, quantidade de pessoas)
- Cancela reservas pelo ID
- Visualiza todas as reservas e seus IDs

### Garçom
- Visualiza reservas ativas (com ID)
- Confirma reservas pelo ID (libera a mesa para novas reservas futuras)
- Cancela reservas pelo ID

### Gerente
- Gera relatórios em tempo real:
  - Reservas por período
  - Reservas por mesa
  - Reservas confirmadas por garçom
- Relatórios exibidos em tabela

---

## Tecnologias

- **Backend:** Node.js, Express, SQLite3
- **Frontend:** HTML5, CSS3 (Bootstrap), JavaScript
- **Banco de Dados:** SQLite

---

## Como rodar

1. **Clone o repositório**
   ```sh
   git clone <url-do-repo>
   cd reserva-restaurante
   ```

2. **Instale as dependências**
   ```sh
   npm install
   ```

3. **Inicie o servidor**
   ```sh
   node server.js
   ```
   O servidor rodará em [http://localhost:3000](http://localhost:3000)

4. **Acesse as telas pelo navegador**
   - Atendente: [http://localhost:3000/atendente.html](http://localhost:3000/atendente.html)
   - Garçom: [http://localhost:3000/garcom.html](http://localhost:3000/garcom.html)
   - Gerente: [http://localhost:3000/gerente.html](http://localhost:3000/gerente.html)

---

## Estrutura de Pastas

```
reserva-restaurante/
│
├── db/
│   └── reservas.db
├── public/
│   ├── atendente.html
│   ├── garcom.html
│   ├── gerente.html
│   ├── style.css
│   └── img/
│       └── restaurante.jpg
├── routes/
│   ├── atendente.js
│   ├── garcom.js
│   └── gerente.js
├── server.js
├── package.json
└── ...
```

---

## Observações

- O banco de dados é criado automaticamente ao rodar o servidor e fazer a primeira reserva.
- Para zerar o banco, apague o arquivo `db/reservas.db` ou use comandos SQL.
- A imagem do restaurante deve estar em `public/img/restaurante.jpg`.
- O sistema pode ser acessado de outras máquinas na rede, basta trocar `localhost` pelo IP do servidor.

---

