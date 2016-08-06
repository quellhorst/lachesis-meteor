SyncedCron.config({
  log: false, // Log job run details to console
  logger: null, // Use a custom logger function (defaults to Meteor's logging package)
  collectionName: 'cronHistory',
  utc: false,
  collectionTTL: 172800
});

SyncedCron.add({
  name: 'Update Bitcoin Price',
  schedule: function(parser) {
    return parser.text('every 5 minutes');
  },
  job: function() {
    var url = "https://api.coinbase.com/v2/prices/buy?currency=USD";
    var response = HTTP.call( 'GET', url, {} );
    var price =  response['data']['data']['amount'];
    BitcoinPrices.insert({price: price });
  }
});

SyncedCron.start();
