const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const Books = require('./Models/books');

app.use(bodyParser.json());

app.get('/books', async (_req, res) => {
    const books = await Books.getAll();

    res.status(200).json(books);
})

app.get('/books/:id', async (req, res) => {
    const { id } = req.params;
    const book = await Books.getBooksById(Number(id));

    if(!book) return res.status(404).json({ message: 'ID inválido'})

    res.status(200).json(book);
})

app.post('/books', async (req, res) => {
    const { title, author_id } = req.body;

    if(!Books.isValid(title, author_id)) return res.status(404).json({ message: 'Dados inválidos'});

    await Books.addBook(title, author_id);

    res.status(201).json({ message: 'Livro adicionado com sucesso!'})
})

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));