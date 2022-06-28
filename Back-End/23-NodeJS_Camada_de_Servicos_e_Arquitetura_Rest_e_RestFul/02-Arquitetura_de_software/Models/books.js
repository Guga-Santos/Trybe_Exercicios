const connection = require('./connection');

const serialize = (data) => ({
    id: data.id,
    title: data.title,
    authorID: data.author_id
})

const getAll = async () => {
    const [books] = await connection
        .query('SELECT * FROM model_example.books');

        return books.map(serialize)
}

const getBooksById = async (author_id) => {
    const[books] = await connection
        .query(`SELECT * FROM model_example.books WHERE author_id = ${author_id}`);

        if (books.length === 0) return null

        return books;
}

const isValid = (title, authorID) => {
    if (!title || title.length < 3 || typeof title !== 'string') return false
    if (!authorID) return false

    return true
}

const addBook = async (title, authorID) => connection
        .execute(
            'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
        [title, authorID]
        );


module.exports = {
    getAll,
    getBooksById,
    isValid,
    addBook,
}