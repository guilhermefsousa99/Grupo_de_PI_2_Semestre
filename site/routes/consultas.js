const express = require('express');
const router = express.Router();
const banco = require('../app-banco');

// Consulta de Relatórios
router.post("/relatorios", (requisicao,resposta) => {
	console.log("Chegou no end point");
	console.log(requisicao.body);
	banco.conectar().then(() => {
    return banco.sql.query(`
        select FORMAT(data,'dd/MM/yyyy') as data,idgmud,motivo,categoria from testerelatorio where data >= '${requisicao.body.dtInicio}' and data <= '${requisicao.body.dtFim}' order by convert(datetime, data, 103)
	        `);
		}).then(consulta => {
	    	console.log(consulta);
	        resposta.send(consulta.recordset);
		}).finally(() => {
	    		banco.sql.close();
	  	});
  
})

module.exports = router;