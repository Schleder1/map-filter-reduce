lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

saldo = 100;

function calculaSaldo(saldo, lista){
    return lista.reduce(function (prev, current, index) {
        console.log('rodada', index + 1 );
        console.log(prev);
        console.log(current);
        return prev - current.preco;
    }, saldo);
}

console.log(calculaSaldo(saldo, lista));

// or

function calculaSaldo(saldo, item) {
    if (!saldo || !item || !item.length) return 'Envie todos os parâmetros!';

    const saldoFinal = item.reduce((acc, item) => acc - item.preco, saldo);

    return `O saldo final será de ${saldoFinal} reais`;
}

console.log(calculaSaldo(saldo, lista));