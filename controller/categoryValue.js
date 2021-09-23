const findValue = require('../service/findValue')

exports.type = async (req, res) => {
    try {
        var details = await findValue.findValue(req.params.type);
        res.status(200).send(details);
    }
catch (err) {
    res.status(404).send(err);
}
}