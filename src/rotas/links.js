const express = require("express");
const router = express.Router();

// ─── Tarefa B — Links úteis ───────────────────────────────────────────────────
// Armazenamento EM MEMÓRIA (não use banco de dados neste trabalho).
const links = [];
let proximoId = 1;

// GET /links — lista todos os links.
router.get("/links", (req, res) => {
  // TODO (Tarefa B): responda com status 200 e o array `links`.
  res.status(200).send(links);
});

// POST /links — cria um link { titulo, url } (ambos TEXTO/string).
router.post("/links", (req, res) => {
  let id = new Date().getTime();
  const { titulo, url } = req.body;

  if (titulo === undefined || url === undefined) {
    res.status(400).send("falta titulo ou url");
  } else {
    let linkCriado = { id: id, titulo, url };
    links.push(linkCriado);
    res.status(201).json(linkCriado);
  }

  // TODO (Tarefa B):
  // 1. Leia titulo (texto) e url (texto) de req.body.
  // 2. Se faltar titulo OU url, responda 400.
  // 3. Crie { id: proximoId++, titulo, url }, adicione em `links`
  // e responda 201 com o link criado.
});

module.exports = router;
