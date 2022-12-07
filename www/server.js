const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(express.static('www'));

let usuarios = [];

app.post('/cadastro', function (req, res) {
    let novo = {};
    novo.email = req.body.email;
    novo.nome = req.body.nome;
    novo.password = req.body.password;

    usuarios.push(novo);
    // apos confirmar cadastro ja redireciona direto para a tela do login
    res.redirect("index.html");
    // aparecer tela dos usuarios cadastrados
    //res.send(usuarios);
    
});


app.post('/login', function (req, res){
    for( let x = 0; x < usuarios.length; x++){
        if(usuarios[x].email === req.body.email &&
            usuarios[x].password === req.body.password) {
            res.redirect("portal.html");
        }
    } 
    res.redirect('index.html');
} );

app.listen(3000);

// npm install 'express'
// npm install 'body-parser'