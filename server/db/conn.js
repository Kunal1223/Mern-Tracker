const moongose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;

const db = async () => {
    await moongose.connect(MONGO_URL).then(() => {
        console.log('connected')
    }).catch(err => {
        console.log(err)
    })
}

db()

module.exports ;