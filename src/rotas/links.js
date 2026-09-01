const express = require("express");
const router = express.Router();

// ─── Tarefa B — Links úteis ───────────────────────────────────────────────────
// Armazenamento EM MEMÓRIA (não use banco de dados neste trabalho).
const links = [];
let proximoId = 1;

// GET /links — lista todos os links.
router.get("/links", (req, res) => {
  // TODO (Tarefa B): responda com status 200 e o array `links`.
  res.status(200).json(links);
});

// POST /links — cria um link { titulo, url } (ambos TEXTO/string).
router.post("/links", (req, res) => {
  // 1. Leia titulo (texto) e url (texto) de req.body.
  const { titulo, url } = req.body;

  // 2. Se faltar titulo OU url, responda 400.
  if (titulo === undefined || url === undefined) {
    return res.status(400).send("falta titulo ou url");
  }
  res.status(201)

  // 3. Crie { id: proximoId++, titulo, url }, adicione em `links` e responda 201 com o link criado.
  const linkCriado = { id: proximoId++, titulo, url };
  links.push(linkCriado);
  
  res.status(201).json(linkCriado);
});

module.exports = router;
