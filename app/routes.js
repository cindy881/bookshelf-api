const { createBooksHandler } = require('./handler')
const routes = [
    {
        method: 'GET',
        path: '/',
        handler: ()=>{
            return 'Ini adalah homepage'
        }
    },
    {
        method: '*',
        path: '/',
        handler: ()=>{
            return 'Halaman ini tidak dapat diakses menggunakan method ini!'
        }
    },
    {
        method: 'POST',
        path: '/books',
        handler: createBooksHandler
    },
]

module.exports = routes