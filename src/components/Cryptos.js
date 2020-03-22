import React, {useEffect, useState} from 'react'
import Cards from './Cards'

const Cryptos = () => {
    const[state, setState] = useState({
        cryptos: [],
        loading: true
    })

    const getCryptoData = async () => {
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true'
        let response = await fetch(url)
        response = await response.json()
        
        setState({
            loading: false,
            cryptos: response
        })
    }

    if(state.cryptos.length === 0) {
        getCryptoData()
    }

    useEffect(() => {

    },[state.loading])

    return(
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {state.cryptos.map(crypto => 
                (<Cards crypto={crypto}/>)
            )}
        </div>
    )
}

export default Cryptos