import React, {useEffect, useState} from 'react'
import { ReactComponent as LoadingAnimation} from '../components/loading.svg'
import Cards from './Cards'

const Cryptos = () => {
    const[state, setState] = useState({
        cryptos: [],
        loading: true,
        page: 1
    })

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=true&per_page=9&page='+state.page

    const getCryptoData = async () => {
        let response = await fetch(url)
        response = await response.json()
        
        setState({
            ...state,
            loading: false,
            cryptos: response
        })
    }

    if(state.cryptos.length === 0) {
        getCryptoData()
    }

    useEffect(() => {
        getCryptoData()
    },[state.loading])

    return(
        <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {state.cryptos.map(crypto => 
                (<Cards crypto={crypto}/>)
            )}
        </div>
        {state.loading && 
            <div className="mx-auto mt-10"><center><LoadingAnimation style={{height: 80, width: 80 }} /></center></div>
        }
        </div>
    )
}

export default Cryptos