const test = require('node:test')
const assert = require('node:assert')

const {calcularSubtotal } = require('../src/carrinho')

test('should sum the amount of itens', () => {
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

let result = calcularSubtotal (minhasCompras)
assert.strictEqual(result, 16.5)

})

test("Devolver 0", () => {
    var minhasCompras = []
    let result = calcularSubtotal (minhasCompras)
    assert.strictEqual(result, 0)
})

test("Item Inválido Preço", () => {
    var minhasCompras = [
        {
        nome: "Caneta",
        preco: -1.5,
        quantidade: 1
    },
   
]
    assert.throws(
        () => calcularSubtotal(minhasCompras),
        {
            message: 'Item Inválido'
        }
    )

})

test("Item Iválido Quantidade 0", () => {
     var minhasCompras = [
        {
        nome: "Caneta",
        preco: 1.5,
        quantidade: 0
    },
   
]
    assert.throws(
        () => calcularSubtotal(minhasCompras),
        {
            message: 'Item Inválido'
        }
    )

})

test("Item Iválido Quantidade Negativa", () => {
     var minhasCompras = [
        {
        nome: "Caneta",
        preco: 1.5,
        quantidade: -1
    },
   
]
    assert.throws(
        () => calcularSubtotal(minhasCompras),
        {
            message: 'Item Inválido'
        }
    )

})