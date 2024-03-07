import React from 'react';
import { ArrowIcon } from './Icons';

export default function SideCard() {
  return (
    <>
    <div className="card w-full bg-blue-500 text-primary-content">
      <div className="card-body text-white">
        <h2 className="card-title text-2xl">Get Started with KoinX for FREE</h2>
        <p>With our range of feature that you can equip for free, KoinX allows you to be more educated and aware of your tax report.</p>
        <figure><img src="./SideHero.png" alt="Hero" /></figure>
        <div className="card-actions bg-slate-50 rounded-md w-1/3 mx-auto">
          <button className="btn">Get Started for Free <ArrowIcon/></button>
        </div>
      </div>
    </div>
    </>
  )
}
