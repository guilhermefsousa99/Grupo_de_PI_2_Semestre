function consultar_areas () {
	fetch('/consultas/areas',{
		method: "POST",
		body: new URLSearchParams()
	}).then((resposta) => {
		if (resposta.ok) {
			resposta.json().then((resultado) => {

				tbl_areas.innerHTML = `
					<tr>

			          <th id="id"> ID GMUD </th>
			          <th id="motivo"> Motivo </th>
			          <th id="categoria"> Categoria </th>
			          <th id="data"> Data </th>
			          <th id="detalhes"> + </th>

			        </tr>
					`

				for (c = 0;c < resposta.length;c++) {
					tbl_areas.innerHTML += `
					<tr>
						<td> ${resposta[c].idarea} </td>
						<td> ${resposta[c].nomearea} </td>
					</tr>
					`
					}

			})

		} else {
			console.log("Errooooo")
		}
	})
}


function consultar_func () {
	fetch('/consultas/funcionarios',{
		method: "POST",
		body: new URLSearchParams()
	}).then((resposta) => {
		if (resposta.ok) {
			resposta.json().then((resultado) => {

				tbl_funcionarios.innerHTML = `
					<tr>

			          <th id="id"> ID GMUD </th>
			          <th id="motivo"> Motivo </th>
			          <th id="categoria"> Categoria </th>
			          <th id="data"> Data </th>
			          <th id="detalhes"> + </th>

			        </tr>
					`

				for (c = 0;c < resposta.length;c++) {
					tbl_funcionarios.innerHTML += `
					<tr>
						<td> ${resposta[c].idfuncionario} </td>
						<td> ${resposta[c].nomefuncionario} </td>
						<td> ${resposta[c].cargo} </td>
						<td> ${resposta[c].login} </td>
					</tr>
					`
					}

			})

		} else {
			console.log("Errooooo")
		}
	})
}

function consultar_equip () {
	fetch('/consultas/equipamentos',{
		method: "POST",
		body: new URLSearchParams()
	}).then((resposta) => {
		if (resposta.ok) {
			resposta.json().then((resultado) => {

				tbl_equipamentos.innerHTML = `
					<tr>

			          <th id="id"> ID GMUD </th>
			          <th id="motivo"> Motivo </th>
			          <th id="categoria"> Categoria </th>
			          <th id="data"> Data </th>
			          <th id="detalhes"> + </th>

			        </tr>
					`

				for (c = 0;c < resposta.length;c++) {
					tbl_equipamentos.innerHTML += `
					<tr>
						<td> ${resposta[c].idequipamento} </td>
						<td> ${resposta[c].ipequipamento} </td>
						<td> ${resposta[c].discricao} </td>
						<td> ${resposta[c].relevancia} </td>
					</tr>
					`
					}

			})

		} else {
			console.log("Errooooo")
		}
	})
}