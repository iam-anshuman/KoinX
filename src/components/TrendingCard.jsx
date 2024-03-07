import React from 'react'
import { useTrendingCoinContext } from '../Context/TrendingCoinContext';




export default function TrendingCard() {

    const {state,dispatch} = useTrendingCoinContext();

    
    const coinFilter = state.coins ? state.coins.filter((coin)=>{
        return coin.item.data && coin.item.data.price_change_percentage_24h && coin.item.data.price_change_percentage_24h.usd > 0;
    })
    : 
    null
    ;
    const coinRanking= coinFilter && coinFilter.slice(0,3);

  return (
    <>
    <div className='card bg-white my-4'>
        <div className="card-body">
            <h2 className="card-title text-2xl font-semibold">Trending Coins (24H)</h2>
            {coinRanking && coinRanking.map((coin, index) => (
                <div key={index} className="flex items-center justify-between my-4">
                    <div className="flex items-center">
                        <img src={coin.item.thumb} alt={coin.item.name} className="w-10 h-10 rounded-full" />
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold">{coin.item.name}</h3>
                            <p className="text-gray-500">{coin.item.symbol}</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold hidden md:block">{coin.item.data.price}</p>
                        {coin.item.data.price_change_percentage_24h.usd > 0 ? 
                        <div className=' inline-block bg-green-100 text-green-600 rounded-lg px-2 py-1 mx-5'><div className='inline-block border-b-green-600 border-b-8 border-l-8 border-r-8 border-l-transparent border-r-transparent mx-1'></div>{coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%</div>
                        :
                        <div className=' inline-block bg-red-100 text-red-600 rounded-lg px-2 py-1 mx-5'><div className='inline-block border-t-red-600 border-t-8 border-l-8 border-r-8 border-l-transparent border-r-transparent mx-1'></div>{coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%</div>
                        }
                    </div>
                </div>
            
            ))}
        </div>
    </div>
    </>
  )
}
