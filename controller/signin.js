const {
    encrypt,
    decrypt
} = require('../service/crypto')
const addUser = require('../service/addUser')
const findUser = require('../service/findUser')

exports.siginin = async (req, res) => {
    const password = encrypt(req.body.password)
    addUser.addUser(req.body.email, req.body.username, password, req.body.phone, req.body.address);
    res.status(201).send("added");
}
exports.checkUser = async (req, res) => {
    const email_u = req.params.email;
    try {
        let find = await findUser.find(email_u);
        res.json(find);
    } catch (err) {
        res.send(err);
    }
}