const user = require('../db/user');

const deAuth = async () => {
    await user.find({},(err,users) => {
        if(!users) {
            return console.log('Нет пользователей для деавторизации!')
        }
        users.forEach(async user => {
            user.token = '';
            await user.save()
        })
    })
    return console.log('Пользователи успешно деавторизированны!')
}

module.exports = {
    deAuth
}