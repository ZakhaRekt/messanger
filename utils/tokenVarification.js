const user = require('../db/user');
const invalidResp = {
    title: "Токен не валиден",
    status: "404"
};
const verifyToken = (req, res) => {
    if (!req.headers.authorization) {
        res.send({
            title: "Токен не передан!",
            status: "501"
        })
        console.log('Сработало 501')
        return false;
    }
    user.findOne({ token: req.headers.authorization }, (err, user) => {
        if (!user) {
            return res.send(invalidResp)
        }
        return false;
    })
    return true
}


module.exports = {
    verifyToken
}

