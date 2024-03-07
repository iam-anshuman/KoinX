import React,{useEffect,useState} from 'react';
// import axios from 'axios';
import TradingViewWidget from './TradingViewWidget';
import SideCard from './SideCard';
import TrendingCard from './TrendingCard';

const data = {
  "usd": 63866.96,
  "usd_24h_change": -4.599970350064269,
  "inr": 5293999.34,
  "inr_24h_change": -4.6260267111478175
};

export default function Hero() {

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=USD%2CINR&include_24hr_change=true&precision=2")
  //     .then( response => 
  //       response.json())
  //       .then(data => 
  //         setData(data.bitcoin)
  //     )
  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //     })

  // }, []);
  // data && console.log(data);

  return (
    <section className="flex mx-7">
        <div className='basis-3/5 bg-white mr-2 rounded-lg shadow-lg shadow-slate-200'>
          {data && 
          <>
            <div className='p-5'>
              <img className='inline-block mx-2 ' src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" alt="CoinImage" width={35} height={35} />
              <div className='inline-block mx-2 text-2xl font-bold'>Bitcoin</div>  
              <div className='inline-block mx-2 text-2xl text-slate-500'>BTC</div>
              <div className='bg-slate-900/50 px-4 py-2 rounded-md text-white inline-block mx-2'>Rank #1</div>
            </div>
            <div className='px-6'>
              <div className='text-3xl font-semibold inline-block'>${(data.usd).toLocaleString()}</div>
              {data.usd_24h_change > 0 ? 
              <div className=' inline-block bg-green-100 text-green-600 rounded-lg px-2 py-1 mx-5'><div className='inline-block border-b-green-600 border-b-8 border-l-8 border-r-8 border-l-transparent border-r-transparent mx-1'></div>{data.usd_24h_change.toFixed(2)}%</div>
              :
              <div className=' inline-block bg-red-100 text-red-600 rounded-lg px-2 py-1 mx-5'><div className='inline-block border-t-red-600 border-t-8 border-l-8 border-r-8 border-l-transparent border-r-transparent mx-1'></div>{data.usd_24h_change.toFixed(2)}%</div>
              }
              <div className='inline-block text-slate-400'>(24H)</div>
            </div>
            <div className='px-6 my-2'>
              <div className='text-xl inline-block'>	&#8377;{(data.inr).toLocaleString()}</div>
            </div>
          </>
          }
          <div className=' hidden md:block'>
            <TradingViewWidget width={980} height={880}/>
          </div>
          <div className='block md:hidden'>
            <TradingViewWidget width={370} height={350}/>
          </div>
        </div>
        <div className='flex-col basis-2/5 mx-2'>
          <div className=''>
            <SideCard/>
          </div>
          <div className=''>
            <TrendingCard/>
          </div>
        </div>
    </section>
  )
}
