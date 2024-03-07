import React from 'react'
import { useTrendingCoinContext } from '../Context/TrendingCoinContext';




export default function MoreCoins() {

    const { state }= useTrendingCoinContext();
    
    const data = state.coins ;
    const sortedCoins = data.length > 0 && data.filter((coin)=>{
        return coin.item.data && coin.item.data.price_change_percentage_24h && coin.item.data.price_change_percentage_24h.usd > 0;
    });
    

  return (
    <div className="mt-20 w-full bg-slate-50 ">
      <div className="card-body ">
        <h2 className="card-title text-2xl">You May Also Like</h2>
        <div className='w-full carousel my-6'>

        {data.length > 0 && data.map((coin, index) => (
            <div className='inline-block border-2 w-96 mx-5 rounded-lg p-3' key={index}>
                <div className='flex '>
                    <div className='w-6 mx-1'><img src={coin.item.small} alt="Icon" /></div>
                    <div className='mx-1 '>{coin.item.symbol.toUpperCase()}</div>
                    {coin.item.data.price_change_percentage_24h.usd < 0 ?
                    <div className='mx-1 text-red-500 bg-red-500/10 rounded-md p-0.5'>{coin.item.data.price_change_percentage_24h.usd.toFixed(3)}%</div>
                    :
                    <div className='mx-1 text-green-500 bg-green-500/10 rounded-md p-0.5'>+{coin.item.data.price_change_percentage_24h.usd.toFixed(3)}%</div>
                    }
                </div>
                <div className='text-lg mx-2 font-semibold my-1'>{coin.item.data.price}</div>
                <div ><img src={coin.item.data.sparkline} alt="Graph" /></div>
            </div>
    ))}

        </div>
        <h2 className="card-title text-2xl">Trending Coins</h2>
        <div className='w-full carousel my-6'>

        {sortedCoins.length > 0 && sortedCoins.map((coin, index) => (
            <div className='inline-block border-2 w-96 mx-5 rounded-lg p-3' key={index}>
                <div className='flex '>
                    <div className='w-6 mx-1'><img src={coin.item.small} alt="Icon" /></div>
                    <div className='mx-1 '>{coin.item.symbol.toUpperCase()}</div>
                    {coin.item.data.price_change_percentage_24h.usd < 0 ?
                    <div className='mx-1 text-red-500 bg-red-500/10 rounded-md p-0.5'>{coin.item.data.price_change_percentage_24h.usd.toFixed(3)}%</div>
                    :
                    <div className='mx-1 text-green-500 bg-green-500/10 rounded-md p-0.5'>+{coin.item.data.price_change_percentage_24h.usd.toFixed(3)}%</div>
                    }
                </div>
                <div className='text-lg mx-2 font-semibold my-1'>{coin.item.data.price}</div>
                <div ><img src={coin.item.data.sparkline} alt="Graph" /></div>
            </div>
        ))}

</div>

      </div>
    </div>
  )
}
