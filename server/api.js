Meteor.startup(function () {
  // Global configuration
  Api = new Restivus({
    version: 'v1',
    useDefaultAuth: false,
    prettyJson: true
  });

  // Maps to api/v1/token-lookup
  Api.addRoute('bitcoin-price', {
    get: function () {
      var bitcoin  = BitcoinPrices.findOne({});
      if (bitcoin.price) {
        return {
          "price": bitcoin.price
        }
      } else {
        return {
          "error": "price not found"
        }
      }
    }
  })
});