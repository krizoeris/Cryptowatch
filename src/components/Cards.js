import React, {useState} from 'react'

const Cards = ({ crypto }) => {
    const [state, setState] = useState({
        isUp: (crypto.price_change_percentage_24h >= 0) ? true : false
    })

    return (
        <div class="max-w rounded overflow-hidden shadow-lg">
            <div className={"bg-"+(state.isUp ? "green" : "red")+"-300 p-5 flex"}>
                <div>
                    <div className="flex">
                        <img src={crypto.image} className="w-8 h-8 mr-1 mt-2" />
                        <p className="text-gray-900 text-3xl h-10 leading-lead font-semibold">{crypto.symbol.toUpperCase()}</p>
                    </div>
                    <p className="text-gray-700 text-xl">{crypto.name}</p>
                </div>
                
                <div className="ml-auto text-gray-800 text-right mt-1">
                    <p className="text-3xl leading-tight font-bold">{crypto.current_price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
                    <div className="">
                        <span className={"ml-1 text-"+(state.isUp ? "green" : "red")+"-800 font-bold text-lg"}>({crypto.price_change_percentage_24h.toFixed(2)}%)</span>
                        <span className={"ml-1 text-"+(state.isUp ? "green" : "red")+"-800 font-bold text-lg"}>{crypto.price_change_24h.toLocaleString('en-US', {style: 'currency', currency: 'USD'})} <i class={"fas fa-"+(state.isUp ? "green" : "red")+"-down"} aria-hidden="true"></i></span>
                    </div>
                </div>
            </div>

            <div>
            
            </div>
        </div>
    )
}

export default Cards
