import axios from 'axios'

/*
Documentation of API: https://finnhub.io/docs/api

1. StockOverViewPage.jsx
- Quote (/quote)
- Symbol Lookup (/search)

2. StockDetailPage.jsx
－ Stock Candles (/stock/candle)
- Company Profile 2 (/stock/profile2)

Notes: Chart Library - react-apexcharts
*/

const TOKEN = 'cdgrihiad3i2r375fhb0cdgrihiad3i2r375fhbg'

export default axios.create(
  {
    baseURL: 'https://finnhub.io/api/v1/',
    params: {
      token: TOKEN
    }
  }
)


