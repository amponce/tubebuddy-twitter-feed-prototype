
module.exports = function() {
  var faker = require("faker");
  var _ = require("lodash");
  return {
    Twitter: _.times(20, function(n) {
      return {
        ChannelId: n,
        TwitterAccount: faker.random.alphaNumeric(),
        Id: faker.random.number(),
        Handle: faker.internet.userName(),
        Name: faker.name.findName(),
        ThumbnailUrl: faker.image.avatar(),
        Date: faker.date.recent(),
        Text: faker.lorem.sentence()
      };
    })
  };
};
