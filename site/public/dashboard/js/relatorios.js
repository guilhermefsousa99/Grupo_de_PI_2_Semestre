function relatorio(dtInicio,dtFim) {
	// alert(String(dtInicio.value) + " E " + String(dtFim.value));
	var d_i = String(dtInicio.value);     // d_i - data início
	var d_f = String(dtFim.value);        // d_f - data fim

	var datas = {
		dtInicio: d_i,
		dtFim: d_f
	}

	// alert(JSON.stringify(datas));

	fetch('/consultas/relatorios', {
		method: "POST",
		body: new URLSearchParams(datas)
	}).then(function (response) {
  	if (response.ok) {

    	response.json().then(function (resposta) {

    		tabela.innerHTML = `
    		    <tr>

              <th id="id"> ID GMUD </th>
              <th id="motivo"> Motivo </th>
              <th id="categoria"> Categoria </th>
              <th id="data"> Data </th>
              <th id="detalhes"> + </th>

            </tr>
    		`

    		for (c = 0;c < resposta.length;c++) {
    			tabela.innerHTML += `
    			<tr>
    				<td> ${resposta[c].idgmud} </td>
    				<td> ${resposta[c].motivo} </td>
    				<td> ${resposta[c].categoria} </td>
    				<td> ${resposta[c].data} </td>
    			</tr>
    			`
    		}

	    });

  	} else {
    console.log('Erro na consulta!');
  		}
	});

}

