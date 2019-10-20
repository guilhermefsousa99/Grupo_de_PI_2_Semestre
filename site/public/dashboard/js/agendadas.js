/*
var qtd_dias_mes = [31,28,31,30,31,30,31,31,30,31,30,31]
var dias_da_semana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado']
var meses_do_ano = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

function verificar_data () {
	var data = new Date();
	var dia = data.getDate();
	var dia_da_semana = data.getDay();
	var mes = data.getMonth();
	var ano = data.getFullYear();
	var inte = Math.floor(dia/7);
	inte *= 7;
	var ndia = dia - inte;
	var valor_que_quero = dia_da_semana - ndia; // Retorna o 0 (domingo)ou 1(seg)
	var iniciou_mes_anterior = dias_da_semana[valor_que_quero];
	var manterior = mes - 1;
	var ultimo_dia_manterior = qtd_dias_mes[manterior];
	alert(ultimo_dia_manterior);

	combo_mes.value = mes;
	combo_ano.value = ano;

	if (valor_que_quero < 0) {
		valor_que_quero *= -1;
	}

	dias_mes(valor_que_quero,mes);
}

function dias_mes (ref_dia_semana,matual) {

	alert(ref_dia_semana)
	var dias_mes_atual = 1;

	// Preenche dias do mês anterior
	for (c = 0;c <= ref_dia_semana;c++) {
		if (ref_dia_semana < 6) {
			l1.innerHTML += `
			<td>  </td>
			`
		} 
	}

	// Preenche dias do mês atual na linha 1
	if (ref_dia_semana == 6) {
		ref_dia_semana = 0;
		for (c = 0;c < 7;c++) {
		l1.innerHTML += `
			<td> ${dias_mes_atual} </td>
		`
		dias_mes_atual++;
		}
	} else {
		for (c = 0;c < 6 - ref_dia_semana;c++) {
		l1.innerHTML += `
			<td> ${dias_mes_atual} </td>
		`
		dias_mes_atual++;
		}
	}

	// Preenche dias do mês atual na linha 2
	for (c = 0;c <= 6;c++) {
		l2.innerHTML += `
			<td> ${dias_mes_atual} </td>
		`
		dias_mes_atual++;
	}

	// Preenche dias do mês atual na linha 3
	for (c = 0;c <= 6;c++) {
		l3.innerHTML += `
			<td> ${dias_mes_atual} </td>
		`
		dias_mes_atual++;
	}

	// Preenche dias do mês atual na linha 4
	for (c = 0;c <= 6;c++) {
		l4.innerHTML += `
			<td> ${dias_mes_atual} </td>
		`
		dias_mes_atual++;
	}

	// Preenche dias do mês atual na linha 5
	for (c = 0;c <= 6;c++) {
		if (dias_mes_atual <= qtd_dias_mes[matual]) {
			l5.innerHTML += `
			<td> ${dias_mes_atual} </td>
			`
			dias_mes_atual++;
		}
		
	}

}
*/

var qtd_dias_mes = [31,28,31,30,31,30,31,31,30,31,30,31]
var dias_da_semana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado']
var meses_do_ano = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
var results = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function consultar(a) {
	console.log(a);
	var b = a;
	fetch('/consultas/agendadas',{
		method: "POST",
		body: new URLSearchParams(b)
	}).then((resposta) => {
		if (resposta.ok) {
			resposta.json().then((resultado) => {
				console.log(resultado[0].date);
				for (c = 0;c < resultado.length;c++) {
					for (d = 1;d <= 31;d++) {
						if (resultado[c].date == d) {
							results[d-1] += 1;
							break;
						}
					}
				}
			})
			var data = new Date();
			var mes = data.getMonth();
			dias_mes(mes);

			console.log(results);

		} else {
			console.log("Errooooo")
		}
	})
}

function mostrar_trs () {
	results[0] > 0 ? td1.innerHTML += `<br> SSS` : td1.innerHTML += `<br> NNN`
	results[1] > 0 ? td2.innerHTML += `<br> SSS` : td2.innerHTML += `<br> NNN`
	results[2] > 0 ? td3.innerHTML += `<br> SSS` : td3.innerHTML += `<br> NNN`
	results[3] > 0 ? td4.innerHTML += `<br> SSS` : td4.innerHTML += `<br> NNN`
	results[4] > 0 ? td5.innerHTML += `<br> SSS` : td5.innerHTML += `<br> NNN`
	results[5] > 0 ? td6.innerHTML += `<br> SSS` : td6.innerHTML += `<br> NNN`
	results[6] > 0 ? td7.innerHTML += `<br> SSS` : td7.innerHTML += `<br> NNN`
	results[7] > 0 ? td8.innerHTML += `<br> SSS` : td8.innerHTML += `<br> NNN`
	results[8] > 0 ? td9.innerHTML += `<br> SSS` : td9.innerHTML += `<br> NNN`
	results[9] > 0 ? td10.innerHTML += `<br> SSS` : td10.innerHTML += `<br> NNN`
	results[10] > 0 ? td11.innerHTML += `<br> SSS` : td11.innerHTML += `<br> NNN`
	results[11] > 0 ? td12.innerHTML += `<br> SSS` : td12.innerHTML += `<br> NNN`
	results[12] > 0 ? td13.innerHTML += `<br> SSS` : td13.innerHTML += `<br> NNN`
	results[13] > 0 ? td14.innerHTML += `<br> SSS` : td14.innerHTML += `<br> NNN`
	results[14] > 0 ? td15.innerHTML += `<br> SSS` : td15.innerHTML += `<br> NNN`
	results[15] > 0 ? td16.innerHTML += `<br> SSS` : td16.innerHTML += `<br> NNN`
	results[16] > 0 ? td17.innerHTML += `<br> SSS` : td17.innerHTML += `<br> NNN`
	results[17] > 0 ? td18.innerHTML += `<br> SSS` : td18.innerHTML += `<br> NNN`
	results[18] > 0 ? td19.innerHTML += `<br> SSS` : td19.innerHTML += `<br> NNN`
	results[19] > 0 ? td20.innerHTML += `<br> SSS` : td20.innerHTML += `<br> NNN`
	results[20] > 0 ? td21.innerHTML += `<br> SSS` : td21.innerHTML += `<br> NNN`
	results[21] > 0 ? td22.innerHTML += `<br> SSS` : td22.innerHTML += `<br> NNN`
	results[22] > 0 ? td23.innerHTML += `<br> SSS` : td23.innerHTML += `<br> NNN`
	results[23] > 0 ? td24.innerHTML += `<br> SSS` : td24.innerHTML += `<br> NNN`
	results[24] > 0 ? td25.innerHTML += `<br> SSS` : td25.innerHTML += `<br> NNN`
	results[25] > 0 ? td26.innerHTML += `<br> SSS` : td26.innerHTML += `<br> NNN`
	results[26] > 0 ? td27.innerHTML += `<br> SSS` : td27.innerHTML += `<br> NNN`
	results[27] > 0 ? td28.innerHTML += `<br> SSS` : td28.innerHTML += `<br> NNN`
	results[28] > 0 ? td29.innerHTML += `<br> SSS` : td29.innerHTML += `<br> NNN`
	results[29] > 0 ? td30.innerHTML += `<br> SSS` : td30.innerHTML += `<br> NNN`
	results[30] > 0 ? td31.innerHTML += `<br> SSS` : td31.innerHTML += `<br> NNN`
}

function verifi_date() {
	var data = new Date();
	var dia = data.getDate();
	var dia_da_semana = data.getDay();
	var mes = data.getMonth()+1;
	var ano = data.getFullYear();

	combo_mes.value = mes-1;
	combo_ano.value = ano;

	var json = {
		dia: dia,
		mes: mes,
	}

	consultar(json);
	// dias_mes(mes);

}

function dias_mes (matual) {

	var dias_mes_atual = 1;

	// Preenche dias do mês atual na linha 1
	for (c = 0;c <= 6;c++) {
	l1.innerHTML += `
		<td id="${"td" + dias_mes_atual}"> ${dias_mes_atual} </td>
	`
	dias_mes_atual++;
	}

	// Preenche dias do mês atual na linha 2
	for (c = 0;c <= 6;c++) {
		l2.innerHTML += `
			<td id="${"td" + dias_mes_atual}"> ${dias_mes_atual} </td>
		`
		dias_mes_atual++;
	}

	// Preenche dias do mês atual na linha 3
	for (c = 0;c <= 6;c++) {
		l3.innerHTML += `
			<td id="${"td" + dias_mes_atual}"> ${dias_mes_atual} </td>
		`
		dias_mes_atual++;
	}

	// Preenche dias do mês atual na linha 4
	for (c = 0;c <= 6;c++) {
		l4.innerHTML += `
			<td id="${"td" + dias_mes_atual}"> ${dias_mes_atual} </td>
		`
		dias_mes_atual++;
	}

	// Preenche dias do mês atual na linha 5
	for (c = 0;c <= 6;c++) {
		if (dias_mes_atual <= qtd_dias_mes[matual]) {
			l5.innerHTML += `
			<td id="${"td" + dias_mes_atual}"> ${dias_mes_atual} </td>
			`
			dias_mes_atual++;
		}
		
	}

	setTimeout(mostrar_trs, 5000);

}