const conn = require('./conn');

const Link = conn.define('link', {
    title: {
        type: conn.Sequelize.STRING
    },
    href: {
        type: conn.Sequelize.STRING
    },
    parent: {
        type: conn.Sequelize.STRING
    }
});


module.exports = Link;