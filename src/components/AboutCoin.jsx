import React from 'react'
import { ArrowIcon } from './Icons'

export default function AboutCoin() {
  return (
    <section>
        <div className="card w-3/5 mx-7 bg-slate-50">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold my-4">About Bitcoin</h2>
            <h3 className='text-lg font-bold'>What is Bitcoin?</h3>
            <p>Bitcoin is a decentralized peer-to-peer payment network that uses cryptography to control its creation and transactions. It's open-source, meaning its design is public and anyone can take part. Bitcoin is controlled by its users, who can choose what software and version they use. 
Bitcoin can be used to send and receive payments anywhere in the world at any time. It can be used to pay online and in physical stores, and Bitcoin payments are secure, irreversible, and do not contain customers' sensitive or personal information.</p>
          </div>
          <div className='divider mx-7'></div>
          <div className='mx-7'>
            <h3 className='text-2xl font-bold'>Lorem ipsum dolor sit amet.</h3>
            <p className='my-4 text-black/55 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio totam dolore nisi, laborum architecto quia quas tempore consequatur iste aliquid.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus placeat dolorum ipsam iure mollitia atque impedit rerum maxime minima eius, debitis consequatur culpa animi obcaecati doloribus repellat velit nostrum. Facere, non quos iure adipisci atque saepe voluptate nihil nostrum officia.</p>
            <p className='my-4 text-black/55 text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos laboriosam velit unde odio rerum! Quidem dolore dicta labore veritatis? Dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fuga veniam, vel non pariatur molestias dolore cupiditate dolor tempora eligendi! Consequuntur sit debitis dolore, et iste delectus adipisci magnam perferendis aperiam suscipit, dolorum ducimus numquam, magni voluptas totam incidunt? Consectetur.</p>
            <p className='my-4 text-black/55 text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, facilis dolores consequatur hic non laudantium quisquam tenetur veritatis eaque esse!Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae quo saepe deserunt cum itaque nulla facilis laudantium, temporibus voluptatum accusamus id, nisi fuga omnis dignissimos. Natus repellat non, nam suscipit molestiae rerum, ducimus obcaecati quis dolore distinctio repellendus rem in voluptates laborum a et, beatae eos nobis maiores dolorem.</p>
          </div>
          <div className='divider mx-7'></div>
        <div className="mx-7">
            <h2 className='font-bold text-2xl my-4'>Already Holding Bitcoin?</h2>
            <div className='flex'>
            <div className="card card-side h-40 w-96 bg-gradient-to-br from-green-400 to-cyan-800 shadow-xl">
              <figure className='rounded-lg w-28 px-3'><img src="./cryptoTrading.jpg" alt="Crypto Trading" className="rounded-xl" /></figure>
              <div className='px-4'>
                <h2 className="card-title m-4 text-white">Calculate your Profits</h2>
                <div className="card-actions">
                  <button className="btn mx-4 justify-end">Check Now<ArrowIcon/></button>
                </div>
              </div>
            </div>
            <div className="card card-side h-40 w-96 bg-gradient-to-br from-orange-400 to-red-600 shadow-xl mx-7">
              <figure className='rounded-lg w-48 px-3'><img src="./cryptoTrading1.jpg" alt="Crypto Trading" className="rounded-xl" /></figure>
              <div className='px-4'>
                <h2 className="card-title m-4 text-white">Calculate your Tax Liability</h2>
                <div className="card-actions">
                  <button className="btn mx-4 justify-end">Check Now<ArrowIcon/></button>
                </div>
              </div>
            </div>
            </div>
        </div>
        <div className='divider mx-7'></div>
        <p className='mx-7 my-4 text-black/55 text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio totam dolore nisi, laborum architecto quia quas tempore consequatur iste aliquid.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus placeat dolorum ipsam iure mollitia atque impedit rerum maxime minima eius, debitis consequatur culpa animi obcaecati doloribus repellat velit nostrum. Facere, non quos iure adipisci atque saepe voluptate nihil nostrum officia.</p>

        </div>
    </section>
    )
}
