function calcularSubtotal (itens) {
    if (itens.length === 0) {
        return 0 
    }
    
    let total = 0;

    for (let i = 0; i < itens.length; i++) {
        if (itens[i].preco < 0  || itens[i].quantidade <= 0) {
            throw new Error("Item Inválido")
        }
        total += itens[i].preco * itens[i].quantidade;
    }

    return total;
}
/*
var minhasCompras = [
    {
        nome: "Caneta",
        preco: 1.5,
        quantidade: 1
    },
    {
        nome: "Borracha",
        preco: 7.5,
        quantidade: 2
    }
]
var total = calcularSubtotal(minhasCompras)
console.log(total)

*/


//Aplicar Cupom
    function aplicarDesconto(valor, cupom) {

    if (cupom === "DESC10") {
        return valor - (valor * 0.10);

    } else if (cupom === "DESC20" && valor >= 100) {
        return valor - (valor * 0.20);

    } else {
        return valor;
    }
}
   
module.exports = {
    aplicarDesconto,
    calcularSubtotal
}