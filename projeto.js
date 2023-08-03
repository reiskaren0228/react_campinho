const express = require('express');
const app = express();
const port = 8080; 


const cadastro_aluno = [
  {
    nome: 'Karen Reis',
    curso: {
      curso: 'Programação Web Full Stack',
      duracao: '7 meses', 
      inicio_mês_ano:'2023-01',
      termino:'2023-08',
      instituicao: 'Campinho Digital',
      instrutor:'Jully',
      progresso:'90%',
    },
  },
  {
    nome: 'Karen Reis',
    curso: {
      curso: 'Inglês Digital',
      duracao: '7 meses', 
      inicio_mês_ano:'2023-01',
      termino:'2023-08',
      instituicao: 'Campinho Digital',
      instrutor:'Tamara',
      progresso:'100%',
    },
  },
  {
    nome: 'Karen Reis',
    curso: {
      curso: 'Habilidades Socioprodutivas',
      duracao: '7 meses', 
      inicio_mês_ano:'2023-01',
      termino:'2023-08',
      instituicao: 'Campinho Digital',
      instrutor:'Abner',
      progresso:'98%',
    },
  },  
];

app.get('/', (req, res) => {
  res.json(cadastro_aluno);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
