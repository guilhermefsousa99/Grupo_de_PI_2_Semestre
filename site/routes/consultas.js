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

// Consulta de Agendadas Com Base no Mês e Dia Atual
router.post("/agendadas", (requisicao,resposta) => {
	console.log("Chegou no end-p");
	console.log(requisicao.body);
	banco.conectar().then(() => {
		return banco.sql.query(`
			select FORMAT(data,'dd') as date,idgmud as gmud,motivo from testerelatorio where DAY(data) >= ${requisicao.body.dia} and MONTH(data) = ${requisicao.body.mes}
			`);
	}).then(consulta => {
		console.log(consulta);
		resposta.send(consulta.recordset);
	}).finally(() => {
		banco.sql.close();
	});
})

// Consulta de Áreas
router.post("/consultar_areas", (requisicao,resposta) => {
	console.log("Chegou no end-pA");
	console.log(requisicao.body);
	banco.conectar().then(() => {
		return banco.sql.query(`
			select a.idareas,a.nomearea,e.nomeEmpresa
			from areas a
			join empresa e on e.idempresa = a.fkempresa
			where e.nomeempresa = '${requisicao.body.empresa}' and a.nomearea = '${requisicao.body.area}'
		`).then(function (consulta) {
			resposta.send(consulta.recordset);
		})
	}).catch(err => {
		console.log(err);
	}).finally(() => { 
		banco.sql.close();
	});
})

// Inserir Áreas
router.post("/inserir_areas", (requisicao,resposta) => {
	console.log("Chegou no end-pA");
	console.log(requisicao.body);
	banco.conectar().then(() => {
		return banco.sql.query(`
			insert into areas values (${requisicao.body.area},'${requisicao.body.nome}',${requisicao.body.empresa})
		`).then(function () {
			resposta.sendStatus(201);
		})
	}).catch(err => {
		console.log(err);
		var erro = `Erro no cadastro: ${err}`;
		resposta.status(500).send(erro);
	}).finally(() => { 
		banco.sql.close();
	});
})

module.exports = router;