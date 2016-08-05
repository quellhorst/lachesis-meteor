import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  BitcoinPrices.rawCollection().createIndex({createdAt: 1}, function () {});
});
