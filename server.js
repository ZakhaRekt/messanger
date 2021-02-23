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

app.get('/api/users', async (req, res) => {
  await User.find({}, async (err, users) => {
    if (err) return console.log(err);
    const usersParsed = [];
    users.forEach(async (u) => {
      usersParsed.push({
        username: u.username,
        name: u.name ? u.name : '',
        age: u.age ? u.age : ''
      });
    })
    return res.send(
      {
        title: 'Список пользователей',
        users: [...usersParsed]
      }
    )
  })
})
app.post('/api/addUser', bodyParser.json(), (req, res) => {
  if (!req.body) return res.send({
    title: 'Ничего не отправлено с клиента!'
  });
  if (Object.keys(req.body).length != 5) {
    return res.send({
      title: 'Ошибка! Обезательные поля не заполненны!',
      status: '501'
    })
  }
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) console.log(err);
    if (!user) {
      const newUser = new User({
        username: req.body.username,
        name: req.body.name,
        password: passwordHash.generate(req.body.password),
        age: req.body.age,
        regIP: req.body.ip
      });

      newUser.save(function (err) {
        if (err) return console.log(err);
      });
      return res.send({
        title: 'Потльзователь успешно добавлен',
        status: '200'
      })
    } else {
      return res.send({
        title: 'Такой пользователь уже существует!',
        status: '501'
      })
    }
  })
})
app.get('/api/user/:username', (req, res) => {
  if (!req.params.username) {
    return res.send({
      title: "Не удалось получить пользователя не указан USERNAME"
    })
  }
  User.findOne({ username: req.params.username }, (err, user) => {
    if (err) console.log(err);
    if (!user) return res.send({
      title: "Пользователь с таким USERNAME. Не найден в базе данных!"
    })
    return res.send({
      title: "Успех!",
      status: "200",
      user: {
        username: user.username,
        name:user.name,
        age:user.age
      }
    })
  })
})

mongoose.connect(process.env.databaseURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
  console.log('[✅DataBase] Connected!')
});

app.listen(process.env.PORT, () => {
  console.log(`Стартуем значит: http://localhost:${process.env.PORT} global: http://192.168.212.104:${process.env.PORT}`)
})