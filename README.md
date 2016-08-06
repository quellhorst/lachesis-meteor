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

`meteor add npm-bcrypt@0.8.7`

`meteor npm install bcrypt`

May also need to rebuild npm packages:

`meteor npm rebuild`