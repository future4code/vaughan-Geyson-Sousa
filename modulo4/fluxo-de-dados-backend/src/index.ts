import express from 'express';
import cors from 'cors';
import { products } from './data';

const app = express()
app.use(express.json())
app.use(cors())

// exercicio 1
app.get("/test", (req, res) => {
    res.send("deu certo ")
})

//exercicio 3 -7 createProduct
app.post("/products", (req, res) => {
    try {
        const name = req.body.name
        const price = req.body.price
        const newProduct = {
            id: Date.now().toString(),
            name: name,
            price: price
        }
        if (!newProduct.name || !newProduct.price) {
            throw new Error("Algum dos campos não foram preenchidos")
        }
        if (typeof newProduct.name !== "string") {
            throw new Error("O nome digitado não é uma string")
        }
        if (typeof newProduct.price !== "number") {
            throw new Error("Preço digitado não é um number")
        }
        if (newProduct.price <= 0) {
            throw new Error("O preço deve ser maior que 0")
        }

        res.send(newProduct)

    } catch (err: any) {
        switch (err.message) {
            case "Algum dos campos não foram preenchidos":
                res.status(422).send(err.message)
                break
            case "O nome digitado não é uma string":
                res.status(422).send(err.message)
                break
            case "Preço digitado não é um number":
                res.status(422).send(err.message)
                break
            case "O preço deve ser maior que 0":
                res.status(422).send(err.message)
            default:
                res.status(500).send(err.message)
                break
        }
    }
})
// exercicio 4 returnProducts
app.get("/products", (req, res) => {
    res.send(products)

})
// exercicio 5 -8 editPrice
app.put("/products/:id", (req, res) => {
    try {
        const id = req.params.id
        const priceNew = req.body.price
        var think = false
        const newProducts = products.map((prod) => {
            if (prod.id === id) {
                think = true
                return { ...prod, price: priceNew }
            } else {
                return prod
            }
        })
        if (!priceNew) {
            throw new Error("Preço não encontrada")
        }
        if (typeof priceNew !== "number") {
            throw new Error("O campo preço precisar ser um number")
        }
        if (priceNew <= 0) {
            throw new Error("O preço precisa ser maior que 0")
        }

        res.status(200).send(newProducts)
        if (!think) {
            throw new Error("id informado está invalido")
        }
    } catch (err: any) {
        switch (err.message) {
            case "Preço não encontrada":
                res.status(422).send(err.message)
                break
            case "O campo preço precisar ser um number":
                res.status(422).send(err.message)
                break
            case "O preço precisa ser maior que 0":
                res.status(422).send(err.message)
                break
            case "id informado está invalido":
                res.status(404).send(err.message)
            default:
                res.status(500).send(err.message)
                break
        }
    }
})
// exercicio 6-9 deletProduct
app.delete("/products/:id", (req, res) => {
    try {
        const idProduct = req.params.id
        let think = false

        for (let p of products) {
            if (p.id === idProduct) {
                think = true
            }
        }

        if (!think) {
            throw new Error('Id informado está inválido!')
        }

        const filterProduct = products.filter((prod) => {
            if (prod.id !== idProduct) {
                return prod
            }
        })

        res.status(201).send(filterProduct)

    } catch (error: any) {
        switch (error.message) {
            case 'Id informado está inválido!':
                res.status(404).send(error.message)
                break
            default:
                res.status(500).send(error.message)
                break
        }
    }
})
    
app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});