function register() {

}
function auth() {

}
function verifyToken() {
    if(!req.body.token) return res.send({
        title:"Токен не передан!",
        status:"501"
      })
    if(!jwt.verify(req.body.token, process.env.JWT)) {
        return res.send({
          title:"Токен не валиден",
          status:"404"
        })
    }
}
module.exports = verifyToken;