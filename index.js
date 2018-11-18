exports.greeting = (req, res) => {
    if (!req.body || !req.body.name) {
        res.status(400).send('Bad request');
    }

    res.send({greeting: `Hello ${req.body.name}`});
};
