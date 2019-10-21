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

				for (e = 0;e < resultado.length;e++) {
					sessionStorage.setItem(`id${e}`,resultado[e].gmud);
					sessionStorage.setItem(`motivo${e}`,resultado[e].motivo);
					sessionStorage.setItem(`dia${e}`,resultado[e].date);
				}

				
				for (c = 0;c < results.length;c++) {
					results[c] = 0;
				}
			
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
			
			
			dias_mes(a.mes-1);

			console.log(results);

		} else {
			console.log("Errooooo")
		}
	})
}

function mostrar_trs () {
	results[0] > 0 ? td1.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td1.innerHTML += `<br> ---`
	results[1] > 0 ? td2.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td2.innerHTML += `<br> ---`
	results[2] > 0 ? td3.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td3.innerHTML += `<br> ---`
	results[3] > 0 ? td4.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td4.innerHTML += `<br> ---`
	results[4] > 0 ? td5.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td5.innerHTML += `<br> ---`
	results[5] > 0 ? td6.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td6.innerHTML += `<br> ---`
	results[6] > 0 ? td7.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td7.innerHTML += `<br> ---`
	results[7] > 0 ? td8.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td8.innerHTML += `<br> ---`
	results[8] > 0 ? td9.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td9.innerHTML += `<br> ---`
	results[9] > 0 ? td10.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td10.innerHTML += `<br> ---`
	results[10] > 0 ? td11.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td11.innerHTML += `<br> ---`
	results[11] > 0 ? td12.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td12.innerHTML += `<br> ---`
	results[12] > 0 ? td13.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td13.innerHTML += `<br> ---`
	results[13] > 0 ? td14.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td14.innerHTML += `<br> ---`
	results[14] > 0 ? td15.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td15.innerHTML += `<br> ---`
	results[15] > 0 ? td16.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td16.innerHTML += `<br> ---`
	results[16] > 0 ? td17.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td17.innerHTML += `<br> ---`
	results[17] > 0 ? td18.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td18.innerHTML += `<br> ---`
	results[18] > 0 ? td19.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td19.innerHTML += `<br> ---`
	results[19] > 0 ? td20.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td20.innerHTML += `<br> ---`
	results[20] > 0 ? td21.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td21.innerHTML += `<br> ---`
	results[21] > 0 ? td22.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td22.innerHTML += `<br> ---`
	results[22] > 0 ? td23.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td23.innerHTML += `<br> ---`
	results[23] > 0 ? td24.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td24.innerHTML += `<br> ---`
	results[24] > 0 ? td25.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td25.innerHTML += `<br> ---`
	results[25] > 0 ? td26.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td26.innerHTML += `<br> ---`
	results[26] > 0 ? td27.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td27.innerHTML += `<br> ---`
	results[27] > 0 ? td28.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td28.innerHTML += `<br> ---`
	results[28] > 0 ? td29.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td29.innerHTML += `<br> ---`
	results[29] > 0 ? td30.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td30.innerHTML += `<br> ---`
	results[30] > 0 ? td31.innerHTML += `<br> <i onclick="alert('ha')" class="fa fa-search-plus"></i>` : td31.innerHTML += `<br> ---`
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

	l1.innerHTML = "";
	l2.innerHTML = "";
	l3.innerHTML = "";
	l4.innerHTML = "";
	l5.innerHTML = "";

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