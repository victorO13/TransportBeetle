//Constantes
const express = require('express');
const bodyParser = require('body-parser');
const mercadopago = require('mercadopago');
const cors = require('cors');
const config = require('../config/index.json');
const models = require('../../models/index');
const { response } = require('express');

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let user = models.User;

mercadopago.configure({ access_token: config.token });

//Routes
app.post('/', (req, res) => {
    let preference = {
        items: [{
            title: req.body.address,
            quantity: 1,
            currency_id: 'BRL',
            unit_price: parseFloat(req.body.price)
        }],
        payer: {
            name: req.body.name,
            email: req.body.email
        },
        back_urls: {
            failure: "https://www.webdesignemfoco.com/failure",
            pending: "https://www.webdesignemfoco.com/pending",
            success: "https://www.webdesignemfoco.com/success",
        },
        payment_methods: {
            installments: 2,
            excluded_payment_types: [
                { "id": "ticket" },
                { "id": "debit_card" }
            ]
        }

    }

    mercadopago.preferences.create(preference).then(function (data) {
        res.send(JSON.stringify(data.response.sandbox_init_point));
    }).catch(function (error) {
        console.log(error);
    });
});
app.get('/read', async (req, res) => {
    let read = await user.findAll({
        raw: true,
    });
    console.log(read);
});

app.post('/update', async (req, res) => {
    let response = await user.findOne({
        where: { id: req.body.id },
        include: [{ all: true }]
    });
    response.name = req.body.name;
    response.phone = req.body.phone;
    response.email = req.body.email;
    response.password = req.body.password;
    response.save();
    res.send(response);
});

app.post('/login', async (req, res) => {
    let response = await user.findOne({
        where: { email: req.body.email, password: req.body.password }
    });

    if (response === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response);
    }
});
app.post('/create', async (req, res) => {
    let create = await user.create({
        name: req.body.name,
        password: req.body.password,
        phone: req.body.phone,
        email: req.body.email,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    res.send(response);
});

//Start server
let port = process.env.PORT || config.urlRoot;
app.listen(port, (req, res) => {
    console.log('Servidor Rodando');
});