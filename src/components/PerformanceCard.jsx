import React from 'react';
import { InfoIcon } from './Icons';

export default function PerformanceCard() {
  return (
    <section>
    <div className="card w-3/5 bg-slate-50  mx-7">
      <div className="card-body ">
        <h2 className="card-title text-2xl">Performance</h2>
        <div className='flex align-middle my-5'>
        <div className='flex-col'>
            <span className='block text-black/40'>Today's Low</span>
            <div className='block'>46,930.22</div>        
        </div>
        <div class="inline-block w-3/5 my-5 mx-auto bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div class="bg-gradient-to-r from-red-400 via-yellow-300 to-green-600 h-2.5 rounded-full" style={{width: "100%"}}></div>
            <div className='border-b-8 border-b-black border-l-8 border-l-transparent border-r-8 border-r-transparent w-2 relative left-[78%]'></div>
            <div className=' relative left-[72%] text-black/60'>$48,637.83</div>
        </div>
        <div className='flex flex-col'>
            <span className='text-black/40'>Today's High</span>
            <div>49,343.83</div>
        </div>
        </div>   
        <div className='flex align-middle my-5'>
        <div className='flex-col'>
            <span className='block text-black/40'>52W Low</span>
            <div className='block'>16,930.22</div>        
        </div>
        <div class="inline-block w-3/5 my-5 mx-auto bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div class="bg-gradient-to-r from-red-400 via-yellow-300 to-green-600 h-2.5 rounded-full" style={{width: "100%"}}></div>
        </div>
        <div className='flex flex-col'>
            <span className='text-black/40'>52W High</span>
            <div>49,743.83</div>
        </div>
        </div>   
        <h2 className='text-black/70 text-xl font-semibold my-5'>Fundamentals <InfoIcon/></h2>
        <div className='flex justify-between'>
            <div className='basis-2/5'>
                <span className='text-black/60 inline-block w-48 mx-auto'>Bitcoin</span>
                <span>$16,815.46</span>
                <div className='divider'></div>
                <span className='text-black/60 inline-block w-48 mx-auto'>24H Low / 24H High</span>
                <span>$16,382.46 / $16,874.12</span>
                <div className='divider'></div>
                <span className='text-black/60 inline-block w-48 mx-auto'>7D Low / 7D High</span>
                <span>$16,382.46 / $16,874.12</span>
                <div className='divider'></div>
                <span className='text-black/60 inline-block w-48 mx-auto'>Trading volume</span>
                <span>$23,249,203,782</span>
                <div className='divider'></div>
                <span className='text-black/60 inline-block w-48 mx-auto'>Market Cap Rank</span>
                <span>#1</span>
                <div className='divider'></div>
            </div>

            
            <div className='basis-2/5'>
                <span className='text-black/60 inline-block w-48 mx-auto'>Market Cap</span>
                    <span>$323,892,203,918</span>
                <div className='divider'></div>
                <span className='text-black/60 inline-block w-48 mx-auto'>Market Cap Dominance</span>
                    <span>38.343%</span>
                <div className='divider'></div>
                <span className='text-black/60 inline-block w-48 mx-auto'>Volume / Market Cap</span>
                    <span>0.0718</span>
                <div className='divider'></div>
                <span className='text-black/60 inline-block w-48 mx-auto'>All-Time High</span>
                    <span className='text-lg font-semibold'>$69,044.77</span><span className='text-red-500 font-semibold text-lg'>&nbsp;-75.6%</span>
                    <div className='text-sm text-black/60 w-48 ml-auto'>Nov 10,2021 (about 1 year)</div>
                <div className='divider'></div>
                <span className='text-black/60 inline-block w-48 mx-auto'>All-Time Low</span>
                    <span className='text-lg font-semibold'>$67.81</span><span className='text-green-500 font-semibold text-lg'>&nbsp;+24729.1%</span>
                    <div className='text-sm text-black/60 w-48 ml-auto'>Jul 06,2013 (about 9 years)</div>
                <div className='divider'></div>

            </div>
        </div>
      </div>
      </div>
    </section>
  )
}
