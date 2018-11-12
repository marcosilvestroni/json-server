var faker = require("faker");
var _ = require("lodash");

module.exports = function() {
  return {
    todos: _.times(300, function() {
      return {
        name: faker.lorem.word(),
        description: faker.lorem.text(40),
        date: faker.date.recent(),
        done: null
      };
    }),
    users: _.times(10, function() {
        return {
          name: faker.internet.userName(),
          email: faker.internet.email(),

        };
      })

  };
};
