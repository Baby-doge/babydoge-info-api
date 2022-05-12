# BabyDoge Info API

The BabyDoge Info API is a set of endpoints used by market aggregators (e.g. coingecko.com) to surface BabyDogeSwap liquidity
and volume information. All information is fetched from the underlying subgraphs.

All BabyDogeSwap pairs consist of two different tokens. BNB is not a native currency in BabyDogeSwap, and is represented only by WBNB in the pairs. 

The canonical WBNB address used by the BabyDogeSwap interface is `0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c`.

Results are cached for 5 minutes (or 300 seconds).

## Development and deployment

### Install [Vercel CLI](https://vercel.com/download)
```shell
yarn global add vercel
```

### Install dependencies
```shell
yarn install --frozen-lockfile
```

### Build project
```shell
setsid vercel dev
```

## Endpoints Usage

Base endpoint: [info-api.babydoge.com](https://info-api.babydoge.com)

All endpoints are based on filename inside the `api/` folder.

### 1. Version

> Return the current API version.

Request:
```shell
$ curl -X GET https://info-api.babydoge.com/api/version
```

Response:
```json5
{
    "version": "1.0.0"
}
```






# TODO fix below

## [`/v2/summary`](https://api.pancakeswap.info/api/v2/summary)

Returns data for the top ~1000 PancakeSwap pairs, sorted by reserves. 

### Request

`GET https://api.pancakeswap.info/api/v2/summary`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x..._0x...": {                  // BEP20 token addresses, joined by an underscore
      "price": "...",                 // price denominated in token1/token0
      "base_volume": "...",           // last 24h volume denominated in token0
      "quote_volume": "...",          // last 24h volume denominated in token1
      "liquidity": "...",             // liquidity denominated in USD
      "liquidity_BNB": "..."          // liquidity denominated in BNB
    },
    // ...
  }
}
```

## [`/v2/tokens`](https://api.pancakeswap.info/api/v2/tokens)

Returns the tokens in the top ~1000 pairs on PancakeSwap, sorted by reserves.

### Request

`GET https://api.pancakeswap.info/api/v2/tokens`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x...": {                        // the address of the BEP20 token
      "name": "...",                  // not necessarily included for BEP20 tokens
      "symbol": "...",                // not necessarily included for BEP20 tokens
      "price": "...",                 // price denominated in USD
      "price_BNB": "...",             // price denominated in BNB
    },
    // ...
  }
}
```

## [`/v2/tokens/0x...`](https://api.pancakeswap.info/api/v2/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82)

Returns the token information, based on address.

### Request

`GET https://api.pancakeswap.info/api/v2/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "name": "...",                    // not necessarily included for BEP20 tokens
    "symbol": "...",                  // not necessarily included for BEP20 tokens
    "price": "...",                   // price denominated in USD
    "price_BNB": "...",               // price denominated in BNB
  }
}
```

## [`/v2/pairs`](https://api.pancakeswap.info/api/v2/pairs)

Returns data for the top ~1000 PancakeSwap pairs, sorted by reserves.

### Request

`GET https://api.pancakeswap.info/api/v2/pairs`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x..._0x...": {                  // the asset ids of BNB and BEP20 tokens, joined by an underscore
      "pair_address": "0x...",        // pair address
      "base_name": "...",             // token0 name
      "base_symbol": "...",           // token0 symbol
      "base_address": "0x...",        // token0 address
      "quote_name": "...",            // token1 name
      "quote_symbol": "...",          // token1 symbol
      "quote_address": "0x...",       // token1 address
      "price": "...",                 // price denominated in token1/token0
      "base_volume": "...",           // volume denominated in token0
      "quote_volume": "...",          // volume denominated in token1
      "liquidity": "...",             // liquidity denominated in USD
      "liquidity_BNB": "..."          // liquidity denominated in BNB
    },
    // ...
  }
}
```
