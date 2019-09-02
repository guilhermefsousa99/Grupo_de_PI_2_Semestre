// não mexa nestas 3 linhas!
var express = require('express');
var router = express.Router();
var banco = require('../app-banco');
// não mexa nessas 3 linhas!

router.post('/logar', (requisicao,resposta) => {
  console.log("Chegou no end-point")
banco.conectar().then(() => {
    console.log(JSON.stringify(requisicao.body))
    return banco.sql.query(`
        select * from teste where login = ${requisicao.body.login} and senha = ${requisicao.body.senha}
        `);
  }).then(consulta => {
    if (consulta.recordset[0].length == 1) {
        resposta.send(consulta);
    }
  }).finally(() => {
    banco.sql.close();
  });
})


// não mexa nesta linha!
module.exports = router;
