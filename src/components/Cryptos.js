import React, {useEffect, useState} from 'react'
import { ReactComponent as LoadingAnimation} from '../components/loading.svg'
import InfiniteScroll from 'react-infinite-scroller';
import Cards from './Cards'

const Cryptos = () => {
    const[state, setState] = useState({
        cryptos: [],
        hasMore: true,
        page: 1
    })

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=true&per_page=8&page='+state.page

    const getCryptoData = async () => {
        let result = state.cryptos
        let responses = await fetch(url)
        responses = await responses.json()

        responses.map(response => (
            result.push(response)
        ))
        
        setState({
            ...state,
            cryptos: result,
            page: state.page+1
        })
    }

    let items = []
    
    state.cryptos.map(crypto => 
        items.push(<Cards crypto={crypto}/>)
    )
    console.log(state.cryptos)
    return(
        <div className="p-4">
        <InfiniteScroll
            pageStart={0}
            loadMore={getCryptoData}
            hasMore={state.hasMore}
            loader={<div className="mx-auto mt-10"><center><LoadingAnimation style={{height: 80, width: 80 }} /></center></div>}
        >
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {items}
            </div>
        </InfiniteScroll>
        </div>
    )
}

export default Cryptos