# lachesis

Automatically Pulls and Saves current bitcoin prices.
High performance API is provided for fetching current price.

#### API

`curl http://127.0.0.1:8081/api/v1/bitcoin-price`

returns

`{  "price": "585.51" }`

### needed to run this so nimble:restivus wouldn't error
`meteor add npm-bcrypt@0.8.7`

`meteor npm install bcrypt`

### May need to run this too
`meteor npm rebuild`