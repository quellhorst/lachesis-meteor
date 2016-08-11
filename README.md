# Lachesis

Automatically fetches and saves current Bitcoin prices.
A high performance API is provided for fetching current price.

#### API

`curl http://127.0.0.1:8081/api/v1/bitcoin-price`

returns

`{  "price": "585.51" }`

### Running in Development
`meteor run --port 8081`

### Install Nodets

Needed to run this so nimble:restivus would not error:

W20160811-04:17:36.814(-5)? (STDERR) Note: you are using a pure-JavaScript implementation of bcrypt.
W20160811-04:17:36.914(-5)? (STDERR) While this implementation will work correctly, it is known to be
W20160811-04:17:36.914(-5)? (STDERR) approximately three times slower than the native implementation.
W20160811-04:17:36.915(-5)? (STDERR) In order to use the native implementation instead, run
W20160811-04:17:36.915(-5)? (STDERR) 
W20160811-04:17:36.915(-5)? (STDERR)   meteor npm install --save bcrypt
W20160811-04:17:36.915(-5)? (STDERR) 
W20160811-04:17:36.915(-5)? (STDERR) in the root directory of your application.


`meteor add npm-bcrypt@0.8.7`

`meteor npm install bcrypt`

May also need to rebuild npm packages:

`meteor npm rebuild`
