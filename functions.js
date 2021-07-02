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
