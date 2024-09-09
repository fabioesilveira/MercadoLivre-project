import { useContext } from "react";
import Context from "../context/Context";
import Navbar from "../components/Navbar";


function Cart() {
    
    const {price, setPrice} = useContext(Context)
    
    return (
        <>
         <Navbar />

         <h3>{price}</h3>
        </>
    )
}

export default Cart;