import React,{createContext,useContext,useReducer,useEffect} from 'react';

const TrendingCoinContext = createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_COIN_RANKING':
            return {
                ...state,
                coins: action.payload
            };
        default:
            return state;
    }
}


export default function TrendingCoinProvider({children}){ 

    useEffect(() => {
        const fetchTrendingCoins = async () => {
            try {

                const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
                const data = await response.json();
                const coins = data.coins;
                dispatch({type: 'SET_COIN_RANKING', payload: coins});

            } catch (error) {
                console.error(error);
            }
        };

        fetchTrendingCoins();

    },[]);

    const [state, dispatch] = useReducer(reducer, {
        coins: []
    });

    // console.log(state)

    return (
        <TrendingCoinContext.Provider value={{state,dispatch}}>
            {children}
        </TrendingCoinContext.Provider>
    )
}

export function useTrendingCoinContext() {

    const context = useContext(TrendingCoinContext);
    if(!context){
        throw new Error('useTrendingCoinContext must be used within a TrendingCoinProvider');
    }

    return context;
}