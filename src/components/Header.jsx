import React from 'react'
import Logo from './Logo'
export default function Header() {
  return (
    <header className=" bg-white shadow-lg shadow-slate-200">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-1 md:flex md:items-center md:gap-12">
                <a className="flex items-center text-teal-600" href="#">
                  <Logo/>
                  <span className="ml-1 -mt-4 text-black text-xs">TM</span>
                </a>
              </div>

              <div className="md:flex md:items-center md:gap-12">
                <nav aria-label="Global" className="hidden md:block">
                  <ul className="flex items-center gap-6 text-sm">
                    <li>
                      <a className="text-gray-700 text-lg font-bold transition hover:text-gray-700/75" href="#"> Crypto Tools </a>
                    </li>

                    <li>
                      <a className="text-gray-700 text-lg font-bold transition hover:text-gray-700/75" href="#"> Free Tools </a>
                    </li>

                    <li>
                      <a className="text-gray-700 text-lg font-bold transition hover:text-gray-700/75" href="#"> Resiurce Center </a>
                    </li>
                  </ul>
                </nav>

                <div className="flex items-center gap-4">
                  <div className="sm:flex sm:gap-4">
                    <a
                      className="rounded-md hidden md:block bg-[#0058ff] px-9 py-2.5 text-md font-medium text-white shadow"
                      href="#"
                    >
                      Get Started
                    </a>
                  </div>

                  <div className="block md:hidden">
                    <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </header>
  )
}
