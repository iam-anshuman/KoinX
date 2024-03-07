import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PaginationLine from './components/PaginationLine'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import PerformanceCard from './components/PerformanceCard'
import SentimentCard from './components/SentimentCard'
import AboutCoin from './components/AboutCoin'
import Tokenomics from './components/Tokenomics'
import Team from './components/Team'
import MoreCoins from './components/MoreCoins'

function App() {

  return (
    <div className=''>
    <Header/>
    <main>
    <PaginationLine/>
    <Hero/>
    <Navigation/>
    <PerformanceCard/>
    <SentimentCard/>
    <AboutCoin/>
    <Tokenomics/>
    <Team/>
    <MoreCoins/>
    </main>
    </div>
  )
}

export default App
