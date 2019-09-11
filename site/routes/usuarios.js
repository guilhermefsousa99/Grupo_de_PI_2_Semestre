// não mexa nestas 3 linhas!
var express = require('express');
var router = express.Router();
var banco = require('../app-banco');
// não mexa nessas 3 linhas!

router.get('/logar', (requisicao,resposta) => {
  console.log("Chegou no end-point")
  
banco.conectar().then(() => {
    return banco.sql.query(`
        select * from teste where login = 'Leo' and senha = 123
        `);
  }).then(consulta => {
    console.log(consulta);
    if (consulta.recordset.length == 1) {
        resposta.send(consulta.recordset[0]);
    }
  }).finally(() => {
    banco.sql.close();
  });
  
})

/*
router.get("/teste",function (req,res) {
  console.log("Chegou no end-point")
  res.send();
})
*/


// não mexa nesta linha!
module.exports = router;
