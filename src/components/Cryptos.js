import React from 'react'
import Cards from './Cards'

const Cryptos = () => {
    const stock = {
        "id": "bitcoin",
        "symbol": "btc",
        "name": "Bitcoin",
        "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        "current_price": 6093.02,
        "market_cap": 111392183062,
        "market_cap_rank": 1,
        "total_volume": 37726494687,
        "high_24h": 6426.79,
        "low_24h": 5991.92,
        "price_change_24h": -158.52342615,
        "price_change_percentage_24h": -2.53575,
        "market_cap_change_24h": -2888029643.77739,
        "market_cap_change_percentage_24h": -2.52715,
        "circulating_supply": 18281925,
        "total_supply": 21000000,
        "ath": 19665.39,
        "ath_change_percentage": -69.44196,
        "ath_date": "2017-12-16T00:00:00.000Z",
        "roi": null,
        "last_updated": "2020-03-22T15:55:43.676Z"
      }

    return(
        <div className="grid grid-cols-3 gap-4">
            <Cards stock={stock}/>
        </div>
    )
}

export default Cryptos