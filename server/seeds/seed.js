//TODO will need complete seed.js for quotes to seed the database and randomly select one for each day for the home page

const db = require('../config/connection');
const { User, Form } = require('../models');
const quotesSeeds = require('./quotes.json');
const userSeeds = require('./user.json');
const formSeeds = require('./form.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await User.create(userSeeds);
        await Form.create(formSeeds);
        await User.get(quotesSeeds)

    } catch (err) {
        throw err;
    }
})

console.log('Quotes seeded!');
