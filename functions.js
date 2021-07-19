//recebe a potência em Watts e retorna o consumo por hora (kw/h)
function consumoHora(potencia){
	return potencia/1000;
}

//recebe o valor da conta e a quantidade de kw/h consumido na mesma conta
function precoKwHora(valorConta, qtdKwhConsumidos){
	return valorConta/qtdKwhConsumidos;
}

//recebe o valor do kw/h e o kw/h consumido por hora e retorna o valor do consumo por hora em valor monetário
function consumoPorHora(precoKwHora, consumoHora){
	return precoKwHora*consumoHora;
}

//recebe o valor do kw/h e a quantidade de horas que o dispositivo fica ligado e retorna o gasto em reais
function gastoTotalEletronico(qtdHorasLigado, consumoPorHora){
	return qtdHorasLigado*consumoPorHora;
}

/* recebe o valor da potência do dispositivo, valor da ultima conta, quantidade de kw/h consumidos e quantas horas esse dispositivo fica ligado  
e retorna o gasto total estimado do eletrônico em reais */
function gastoTotalEletronico(potencia, valorUltimaConta, qtdKwhConsumidos, qtdHorasLigado){
	let consumoHora = potencia/1000;
	let precoKwHora = valorUltimaConta/qtdKwhConsumidos;
	let consumoPorHora = precoKwHora*consumoHora;

	return qtdHorasLigado * consumoPorHora;
}

/* recebe o valor da potência do dispositivo, valor da ultima conta, quantidade de kw/h consumidos e quantas horas esse dispositivo fica ligado  
e retorna o gasto total estimado do eletrônico em reais e exibe na tela */
function gastoTotalEletronicoTela(){

	const potencia = document.getElementById("potencia").value;
	const valorUltimaConta = document.getElementById("valorUltimaConta").value; 
	const qtdKwhConsumidos = document.getElementById("qtdKwhConsumidos").value;
	const qtdHorasLigado = document.getElementById("qtdHorasLigado").value;

	

	let consumoHora = potencia/1000;
	let precoKwHora = valorUltimaConta/qtdKwhConsumidos;
	let consumoPorHora = precoKwHora*consumoHora;

	

	const resultado = qtdHorasLigado * consumoPorHora;
	

	const resultadoTela = document.getElementById("resultadoTela");

	resultadoTela.innerHTML = "R$" + resultado.toFixed(2);


	const formulario = document.getElementById("formulario");
	const resultadoDiv = document.getElementById("resultado");

	formulario.style.display = 'none';
	resultadoDiv.style.display = 'block';
}

function novoCalculoDisplay(){
	const formulario = document.getElementById("formulario");
	const resultadoDiv = document.getElementById("resultado");

	formulario.style.display = 'block';
	resultadoDiv.style.display = 'none';
}