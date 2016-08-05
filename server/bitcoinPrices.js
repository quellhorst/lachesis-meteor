BitcoinPrices = new Meteor.Collection('BitcoinPrices');

var BitcoinPricesSchema = new SimpleSchema({
  "price": {
    type: String
  },
  // Force value to be current date (on server) upon insert
  // and prevent updates thereafter.
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  }
});

BitcoinPrices.attachSchema( BitcoinPricesSchema );