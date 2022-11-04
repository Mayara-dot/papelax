const tot = [];

function calcularCaixas(pctPorItem, qtdPacotesSolicitada){
	let qtdCaixas = qtdPacotesSolicitada/pctPorItem;
	return qtdCaixas;
}

function createBodyTable() {
	let select = document.getElementById("select").value.trim().toUpperCase();
	if(validaSelect(select)) {
		let table = document.getElementById("totTable");
		let qtdPacotesSolicitada = document.getElementById("qtdPacotes").value;
		if(qtdPacotesSolicitada.length !=  0 || typeof qtdPacotesSolicitada == "number") {
			let pctPorItem = localStorage.getItem(select + " - pacotes por item");
			let descricao = localStorage.getItem(select + " - descricao");
			if(descricao != null) {
				let color1 = localStorage.getItem(select + " - color1");
				let color2 = localStorage.getItem(select + " - color2");
				qtdCaixas = calcularCaixas(pctPorItem, qtdPacotesSolicitada);
				
				let data = [
					{"span": " X ",
					"codigo": select,
					"descricao": descricao,
					"qtdSolicitada": qtdPacotesSolicitada,
					"qtdCaixas": qtdCaixas
					}
				];

				for (let element of data) {
					let row = table.insertRow();
					for(k in element) {
						if(k == "span") {
							let cell = row.insertCell();
							let span = document.createElement("span");
							span.innerHTML = "X";
							span.setAttribute("onclick", "deletar(id)");
							span.setAttribute("id", (table.rows.length - 1));
							cell.style.background = color2;
							cell.appendChild(span);
						} else {
							let cell = row.insertCell();
							let text = document.createTextNode(element[k]);
							cell.style.background = color1;
							cell.appendChild(text);
						}
					}
				}
				tot.push(data[0]["qtdCaixas"]);
				calculaTotPedido();
			}else {
				alert("Erro interno, tente novamente....Não esqueça de confirmar o código do pedido. Clique no código ou pressione enter até a cor correta aparecer!!");
		}
		} else {
			alert("Quantidade de pacotes não informada ou incorreta...");
		} 
	} else {
		alert("Código não cadastrado no sistema...");
	}	
}
function deletar(id) {
	table = document.getElementById("totTable");
	let row = table.deleteRow(id);
	tot.pop(id);
	calculaTotPedido();
}

function calculaTotPedido() {
	let tfoot = document.getElementById("totCaixas");
	const initialValue = 0;
	var soma = tot.reduce(
	(previousValue, currentValue) => previousValue + currentValue,
	initialValue);
	const content = soma;
	tfoot.innerHTML = content;	
} 


function validaSelect(select) {
	var validaSelect = false;
	for(k in codigos) {
		if(select == k) {
			validaSelect = true;
		}
	}

	if(localStorage.getItem(select + " - código")) {
		validaSelect = true;
	}
	return validaSelect;
}

function setDescricao() {
	let select = document.getElementById("select"); 
	let selectValue = select.value.trim().toUpperCase();
	for(k in codigos) {
		if(selectValue == k) {
		const content = codigos[k]["descricao"];
		const color1 = codigos[k]["color1"];
		const color2 = codigos[k]["color2"];
		localStorage.setItem(selectValue + " - pacotes por item", codigos[k]["nPacotes"]);
		localStorage.setItem(selectValue + " - descricao", codigos[k]["descricao"]);
		localStorage.setItem(selectValue + " - color1", codigos[k]["color1"]);
		localStorage.setItem(selectValue + " - color2", codigos[k]["color2"] ?? "#fff");
		select.style.background = color1;
		} 
	}
}


function gerarPDF() {
	var tableCalc = document.getElementById("tableCalc").innerHTML;
	let codigoPedido = document.getElementById("codigoPedido").value;
	var style = "<style>";
		style = style + "html{background-color: white;font-size: medium; margin: 5px;}"
		style = style + "@media print{body {-webkit-print-color-adjust: exact;}}";
        style = style + "table {width: 100%;font: 17px Calibri}";
        style = style + "table, th, td {border: solid 2px black; border-collapse: collapse; font-weight: bold;";
        style = style + "padding: 2px 3px;text-align: center;}";
		style = style + "tfoot {padding-top: 10px; font-weight: bold; font-size:large}";
        style = style + "</style>";

	var win = window.open('', '', 'height=700,width=700');
	
	win.document.write('<html><head>');
	win.document.write('<h3>Caixas Pedido nº: ' + codigoPedido + '</h3>');
	win.document.write(style);
	win.document.write('</head>');
	win.document.write('<body>');
	win.document.write(tableCalc); 
	win.document.write('</html>');
	win.document.close();
	win.print();
}

function displayForm() {
	var form = document.getElementById("formAdcProduto");
	if(form.style.display == "none") {
		form.style.display = "block";
	} else {
		form.style.display = "none";
	}
}

function adcProduto() {
	let codigoProd = document.getElementById("codigoProd").value.trim().toUpperCase();
	let numPacotes = document.getElementById("numPacotes").value;
	let descricaoProd = document.getElementById("descricaoProd").value.trim().toUpperCase();
	let color1 = document.getElementById("color1").value;
	let color2 = document.getElementById("color2").value;
	if(!validaSelect(codigoProd)) {
		if(color2 != "#000000" ) {
			for(k in codigos) {
				if(codigoProd != k) {
					localStorage.setItem(codigoProd + " - código", codigoProd);
					localStorage.setItem(codigoProd + " - pacotes por item", numPacotes);
					localStorage.setItem(codigoProd + " - descricao", descricaoProd);
					localStorage.setItem(codigoProd + " - color1", color1);
					localStorage.setItem(codigoProd + " - color2", color2);	
					displayForm();	
				} else {
					alert("Esse código já está cadastrado no sistema!");
				}	
			}
		} else {
			localStorage.setItem(codigoProd + " - código", codigoProd);
			localStorage.setItem(codigoProd + " - pacotes por item", numPacotes);
			localStorage.setItem(codigoProd + " - descricao", descricaoProd);
			localStorage.setItem(codigoProd + " - color1", color1);
			localStorage.setItem(codigoProd + " - color2", "#ffff");	
			alert("Cadastrado!");
		} 
	} else {
		alert("Esse código já está cadastrado no sistema!");
	}
	
}

function mostrarCódigos() {
    let codigosCadastrados = document.getElementById("codigosCadastrados");
    if(codigosCadastrados.style.display == "none") {
		codigosCadastrados.style.display = "block";
	} else {
		codigosCadastrados.style.display = "none";
	}
   
}   let codigosCadastrados = document.getElementById("codigosCadastrados");
    for(k in codigos) {
        let li = document.createElement("li");
        li.innerHTML = (k + " - " + codigos[k]["descricao"]);
        codigosCadastrados.appendChild(li);
    }