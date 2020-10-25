const express = require ('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const PORT = 5000;

const peliculas = [{id: 1, title: 'Star Wars'}, {id: 2, title: 'Fast & Furius'}, {id: 3, title: 'Hunger Games'}, {id: 4, title: 'Indiana Jons'}, {id: 5, title: 'Ted'}];  
app.get('/', (req, res) => res.send('EXPRESS'));

app.get('/peliculas', (req, res) =>{
    res.json(peliculas);
});

app.get('/peliculas/:id' , (req, res) => {
    const { id } = req.params;
    let pelicula = movies.find(pelicula => pelicula.id == id);
    res.json(pelicula);
});


app.post('/peliculas', (req, res) =>{
    const { id, title } = req.body;
    const pelicula = {id, title};
    movies.push(pelicula);
    res.json(pelicula);
});

app.put('/peliculas/:id', (req, res) => {
    const {id} = req.params;
    const {title} = req.body;
    let peliculaList = peliculas.filter(pelicula => pelicula.id != id);
    let pelicula = {id, title}
    peliculaList.push(pelicula);
    peliculas = peliculaList;
    res.json(pelicula);
});

app.delete('/peliculas/:id', (req, res) => {
    const {id} = req.params;
    let peliculaList = peliculas.filter(pelicula => pelicula.id != id);
    peliculas = peliculasList;
    res.json('Pelicula Borrada');
});


//INTERACCION DE USUARIOS

let usuarios = [];

class usuario {
    constructor (id, name, mail, password, movie) {
        this.id = id;
        this.name = name;
        this.mail = mail;
        this.password = password;
        this.movie = movie;
    }
}


app.get('/usuarios', (req, res) =>{
    if (usuarios.length == 0) {
        res.send('Los siguientes usuarios no existen');
    }else {
        console.log(usuarios.size);
        res.json(usuarios);
    }
});

app.post('/usuarios', (req, res) =>{
    const { id, name, mail, password} = req.body;
    let usuario = new User(id, name, mail, password);
    users.push(usuario);
    res.send('El usuario ha sido creado');
});


app.delete('/usuarios/:id', (req, res) => {
    const {id} = req.params;
    let usuarioList = usuarios.filter(user => usuario.id != id);
    usuarios = usuarioList;
    res.json('El usuario ha sido eliminado');
});


app.post('/usuarios/login', (req, res) => {
    const { mail, password } = req.body;
    let email = usuarios.find(usuario => usuario.mail == mail);
    let contrasena = usuarios.find(usuario => usua.password == password);
    if (email == "" && contrasena == "") {
        res.send('Este usuario no existe');
    }else {
        res.json('El usuario citado existe');
    }
});


//EL APARTADO DE PEDIDOS

class Order {
    constructor (userId, movieId, orderDate, returnDate) {
        this.userId = userId;
        this.movieId = movieId;
        this.orderDate = orderDate;
        this.returnDate = returnDate;
    }
}

app.post('/order', (req, res) =>{
    const { userId, movieId} = req.body;
    let pedido = new Order(userId, movieId, today, today +3);
    arrPedidos.push(pedido);
    let pelicula = peliculas.find(pelicula = pelicula.id == peliculaId);

    let usuarioPedido = users.find(usuario => usuario.id == usuarioId);

    usuarioPedido.pelicula = pelicula;
    res.send('El pedido ha sido creado');
});

app.listen(PORT, () => console.log('El servidor esta corriendo...'));