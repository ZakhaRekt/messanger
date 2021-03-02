const jwt = require('jsonwebtoken');
const invalidResp = {
    title:"Токен не валиден",
    status:"404"
};
const verifyToken = (req,res) => {
    if(!req.headers.authorization)  {
        res.send({
        title:"Токен не передан!",
        status:"501"
      })
      console.log('Сработало 501')
      return false;
    }

    try{
        if(!jwt.verify(req.headers.authorization, process.env.JWT)) {
            res.send(invalidResp)
            console.log('Сработало 404')
            return false;
        }
    } catch(err) {
        res.send(invalidResp)
        console.log('Сработало 404')
        return false;
    }
    return true
}


module.exports =  {
    verifyToken
}

