const express = require("express");
const fsp = require("fs/promises");
const path = require("path");

const caminhoArquivo = path.join(__dirname, "dados.txt");
const servidor = express();

servidor.use(express.json());

servidor.get("/dados", async (_req, res) => {
  try{
  // Lê o conteúdo do arquivo de forma assíncrona
  let dados = await fsp.readFile(caminhoArquivo, "utf8");
  // Processa o conteúdo lido
  dados = dados
    .split("\r")
    .join("")
    .split("\n")
    .filter((linha) => linha.trim() !== "");

    res.status(200).json({ conteudo: dados });
  } catch(error) {
    res.status(500).json({massage:"Error aconteceu"});
  }
}
)
servidor.put("/dados", async (req, res) => {
  try {
    const {conteudo} = req.body;
    
    if (!conteudo) {
      return res.status(400).json({ message: "Conteúdo não fornecido" });
    }
    let dados = await fsp.readFile(caminhoArquivo, "utf8");
    dados =await fsp.writeFile(caminhoArquivo, dados + conteudo)

    res.status.(200).json(dados)
  } catch (error){
    console.error(error);
    res.status(500).json({ menssage: "Algo inesperado aconteceu"})
  }
})
servidor.listen(3000, () => console.log("Servidor está rodando... 🔥"));