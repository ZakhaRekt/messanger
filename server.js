require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const rateLimit = require("express-rate-limit");
const User = require('./db/user');
const app = express();
const { verifyToken } = require('./utils/tokenVarification');
const { deAuth } = require('./utils/deAuth');


app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

setInterval(deAuth, 30000);
const createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 5,
  message:"API СКАЗАЛО ПОШЁЛ НАХУЙ!",
  handler: function(req,res) {
    return res.send({
      title: this.message,
      status: '429'
    })
  }
});

app.get('/api/users',bodyParser.json(), (req, res) => {
  if(!verifyToken(req,res)) return;
  User.find({}, async (err, users) => {
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
app.get('/api/user/:username', (req, res) => {
  if (!req.params.username) {
    return res.send({
      title: "Не удалось получить пользователя не указан USERNAME"
    })
  }
  if(!verifyToken(req,res)) return;
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
app.post('/api/auth/', (req, res) => {
  if (!req.body) return res.send({
    title: 'Ничего не отправлено с клиента!'
  });
  if (Object.keys(req.body).length != 3) {
    return res.send({
      title: 'Ошибка! Обезательные поля не заполненны!',
      status: '501'
    })
  }
  User.findOne({username:req.body.username}, async (err,user) => {
    if(err) console.log(err);
    if(!user) {
      return res.send({
        title:'Пользователь с таким никнеймом не найден.',
        status:'404'
      })
    }
    if(!passwordHash.verify(req.body.password, user.password)) {
      return res.send({
        title:'Неверный пароль!',
        status:'501'
      })
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT, {
      expiresIn: 86400 //24h
    });
    user.token = token;
    await user.save();
    return res.send({
      title:'Authorized',
      token: token,
      status:'200'
    })
  })
})
app.post('/api/addUser', [bodyParser.json(),createAccountLimiter], (req, res) => {
  if (!req.body) return res.send({
    title: 'Ничего не отправлено с клиента!'
  });
  if (Object.keys(req.body).length != 5) {
    return res.send({
      title: 'Ошибка! Обезательные поля не заполненны!',
      status: '501'
    })
  }
  User.findOne({ username: req.body.username }, async(err, user) => {
    if (err) console.log(err);
    if (!user) {
      const newUser = new User({
        username: req.body.username,
        name: req.body.name,
        password: passwordHash.generate(req.body.password),
        age: req.body.age,
        regIP: req.body.ip,
      });

      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT, {
        expiresIn: 86400 //24h
      });
      newUser.token = token;
      await newUser.save();
      return res.send({
        title: 'Потльзователь успешно добавлен',
        token: token,
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

mongoose.connect(process.env.databaseURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
  console.log('[✅DataBase] Connected!')
});

app.listen(process.env.PORT, () => {
  console.log(`Стартуем значит: http://localhost:${process.env.PORT} global: http://192.168.212.104:${process.env.PORT}`)
})