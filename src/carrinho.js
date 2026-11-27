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

module.exports = {
    calcularSubtotal
}