import React from "react";

export default function Tokenomics() {
  return (
    <>
      <div className="card w-full md:w-3/5 bg-slate-50 mx-2 md:mx-7 my-4">
        <div className="card-body">
          <h2 className="card-title text-2xl">Tokenomics</h2>
          <h3 className="text-xl font-semibold my-4">Initial Distribution</h3>
          <div className="flex">
            <div className="donut-graph"></div>
            <div className="inline-block mx-2 md:mx-10 my-5 md:my-12">
              <div className="md:my-6">
                <div className="h-2 md:h-4 w-2 md:w-4 rounded-full bg-blue-400 inline-block"></div>
                <span className="mx-6">Crowdsale Investor 80%</span>
              </div>
              <div className="md:my-6">
                <div className="md:h-4 h-2 inline-block w-2 md:w-4 rounded-full bg-orange-400"></div>
                <span className="mx-6">Foundation 20%</span>
              </div>
            </div>
          </div>
          <div className="text-lg text-black/60">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facere esse et quidem velit cupiditate, corporis ipsum id magni omnis voluptatibus, veniam sit atque iure iste fuga porro excepturi? Suscipit a quas molestias laboriosam, nostrum velit consectetur sit dolore, ratione iusto perspiciatis necessitatibus aut voluptate provident maxime aperiam? Delectus dolore provident eum iste voluptates distinctio nulla tempora facilis ad. Ipsa.
          </div>
        </div>
      </div>
    </>
  );
}
