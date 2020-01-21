const conn = require('./conn');
const Link = require('./Link');

const syncAndSeed = ()=> {
  return conn.sync({ force: true })
    .then(()=> {
      return Promise.all([
        Link.create({ title: 'test', href: '/wiki/test', parent: '/wiki/parent' })
      ]);
    });
};

module.exports = {
  models: { Link },
  syncAndSeed
};