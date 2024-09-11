const express = require('express');
const app = express();

// Simulação de função para buscar usuários de um "banco de dados"
function fetchUsersFromDatabase() {
  // Supondo que esta função interaja com o banco de dados e deve retornar um array de usuários
  return []; // Simulando um retorno inesperado de array vazio
}


app.get('/users', (req, res) => {
  const users = fetchUsersFromDatabase();

  if (users.length === 0) {
    console.warn('Aviso: Nenhum usuário encontrado!'); // Log de aviso para diagnóstico
    return res.status(404).json({ message: 'Nenhum usuário encontrado.' });
  }

  res.json(users);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
