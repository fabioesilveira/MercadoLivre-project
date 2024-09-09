import Context from './Context';
import { useState } from "react";

function Provider({ children }) {
    const [price, setPrice] = useState(0) 



    const contextValue = {
      price,
      setPrice
    };


    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}


export default Provider;