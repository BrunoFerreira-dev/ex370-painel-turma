const express = require("express");
const app = require("../server");

const router = express.Router();

// ─── Tarefa C — Enquete rápida ────────────────────────────────────────────────
// Armazenamento EM MEMÓRIA (não use banco de dados neste trabalho).
// As opções já vêm cadastradas; vocês podem trocar os nomes se quiserem.
const opcoes = [
  { nome: "Presencial", votos: 0 },
  { nome: "Remoto", votos: 0 },
  { nome: "Híbrido", votos: 0 },
];

router.get("/enquete", (req, res) => {
  res.status(200).send(opcoes)
});
router.post("/voto", (req, res) => {
  const {opcao} = req.body
  const opcaoEncontrada = opcoes.find(opcoes => opcoes.nome === opcao)
  if (opcaoEncontrada == undefined){
    res.status(400).send("Não encontrado")
  }
  else {
    opcaoEncontrada.votos +=1
    res.status(200).send("Votou")
  }
});

module.exports = router;
