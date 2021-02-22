require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const passwordHash = require('password-hash');

const User = require('./db/user');
const app = express()


app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.get('/api/users', (req,res) => {
  User.find({},(err,users) => {
    if(err) return console.log(err);
    return res.send(
      {
        title:'Список пользователей',
        users: [...users]
      }
    )
  })
})
app.post('/api/addUser', bodyParser.json(), (req, res) => {
    if(!req.body) return res.send({
      title: 'Ничего не отправлено с клиента!'
    });
    if(Object.keys(req.body).length != 5) {
      return res.send({
        title: 'Ошибка! Обезательные поля не заполненны!',
        status: '501'
      })
    }
    const user = new User({
        username: req.body.username,
        name: req.body.name,
        password: passwordHash.generate(req.body.password),
        age: req.body.age,
        regIP: req.body.ip
    });
        
    user.save(function(err){
        if(err) return console.log(err);
    });
    return res.send({
      title: 'Потльзователь успешно добавлен',
      status: '200'
    })
})

mongoose.connect(process.env.databaseURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
  console.log('[✅DataBase] Connected!')
});

app.listen(process.env.PORT, () => {
  console.log(`Стартуем значит: http://localhost:${process.env.PORT} global: http://192.168.212.104:${process.env.PORT}`)
})