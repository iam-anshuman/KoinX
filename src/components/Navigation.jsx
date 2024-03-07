import React,{useState} from 'react';



export default function Navigation() {
    const [activeIndex, setActiveIndex] = useState(0);
    const navItems = ['Overview', 'Fundamentals', 'News Insights', 'Sentiments', 'Teams', 'Technicals', 'Tokenomics'];

    return (
        <div>
            <ul className='flex md:justify-around md:w-3/5 my-4 overflow-x-auto'>
                {navItems.map((item, index) => (
                    <li 
                        key={index}
                        className={index === activeIndex ? 'text-blue-dark font-bold border-b-4 rounded border-blue-700 hover:cursor-pointer' : 'hover:cursor-pointer'}
                        onClick={() => setActiveIndex(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <div className="divider w-3/5 mx-7"></div> 
        </div>
    )
}
