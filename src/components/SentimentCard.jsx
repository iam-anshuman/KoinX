import React from 'react'
import { InfoIcon, NewsPaperIcon, TrendingIcon } from './Icons'

export default function SentimentCard() {
  return (
    <section className='my-4'>
        <div className="card w-full md:w-3/5 mx-2 md:mx-7 bg-slate-50 basis-3/5">
            <div className="card-body">
            <h2 className="card-title text-3xl font-semibold">Sentiment</h2>
            <h3 className='text-black/60 text-2xl font-semibold'>Key Events <InfoIcon/></h3>
            </div>
            <div className="carousel carousel-center mx-7 space-x-4 bg-slate-50 rounded-box">
              <div className="carousel-item ">
                    <div className="rounded-lg w-[40rem] bg-blue-300/30 shadow-xl">
                          <div className="flex">
                            <div className='p-7 basis-1/6'>
                                <NewsPaperIcon/>
                            </div>
                            <div className='p-2 my-2 basis-5/6'>
                                <h2 className=" my-2 text-xl font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, a.</h2>
                                <p className='my-2 text-md text-black/50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores blanditiis fugiat impedit debitis. Quisquam fugit ipsa id suscipit in ut adipisci fuga illo. Autem minus necessitatibus harum eaque quis quam voluptates at, odit, modi ipsum soluta quasi reprehenderit maiores corrupti commodi. Consectetur, ipsa ut ab id voluptate est praesentium!</p>
                            </div>
                          </div>
                    </div>
              </div> 
              <div className="carousel-item ">
                    <div className="rounded-lg md:w-[40rem] bg-green-300/30 shadow-xl">
                          <div className="flex">
                            <div className='p-7 basis-1/6'>
                                <TrendingIcon/>
                            </div>
                            <div className='p-2 my-2 basis-5/6'>
                                <h2 className=" my-2 text-xl font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, a.</h2>
                                <p className='my-2 text-md text-black/50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores blanditiis fugiat impedit debitis. Quisquam fugit ipsa id suscipit in ut adipisci fuga illo. Autem minus necessitatibus harum eaque quis quam voluptates at, odit, modi ipsum soluta quasi reprehenderit maiores corrupti commodi. Consectetur, ipsa ut ab id voluptate est praesentium!</p>
                            </div>
                          </div>
                    </div>
              </div> 
              <div className="carousel-item ">
                    <div className="rounded-lg w-[40rem] bg-blue-300/30 shadow-xl">
                          <div className="flex">
                            <div className='p-7 basis-1/6'>
                                <NewsPaperIcon/>
                            </div>
                            <div className='p-2 my-2 basis-5/6'>
                                <h2 className=" my-2 text-xl font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, a.</h2>
                                <p className='my-2 text-md text-black/50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores blanditiis fugiat impedit debitis. Quisquam fugit ipsa id suscipit in ut adipisci fuga illo. Autem minus necessitatibus harum eaque quis quam voluptates at, odit, modi ipsum soluta quasi reprehenderit maiores corrupti commodi. Consectetur, ipsa ut ab id voluptate est praesentium!</p>
                            </div>
                          </div>
                    </div>
              </div> 
            </div>
            <div className="mx-7 my-4">
            <h3 className='text-black/60 text-2xl font-semibold'>Analyst Estimates <InfoIcon/></h3>
            <div className="flex">
                <div className='rounded-full text-green-500 bg-green-400/10 inline-block p-5 md:p-10 lg:my-2'>
                    <div className='text-xl p-5 md:py-3'>
                        76%
                    </div>  
                </div>
                <div className='flex-col text-black/40'>
                    <div className='flex m-1 lg:m-6'>
                        <div >Buy</div>
                        <progress className="progress progress-success w-56 m-2" value="76" max="100"></progress>76%
                    </div>
                    <div className='flex m-1 lg:m-6'>
                        <div>Hold</div>
                        <progress className="progress w-56 m-2" value="8" max="100"></progress>8%
                    </div>
                    <div className='flex m-1 lg:m-6'>
                        <div>Sell</div>
                        <progress className="progress progress-error w-56 m-2" value="16" max="100"></progress>16%
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}
