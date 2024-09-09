import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Context from "../context/Context"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"


function Playstation() {

    const [dataApi, setDataApi] = useState(null)
    const [product, setProduct] = useState([])
    const { price, setPrice } = useContext(Context)

    useEffect(() => {
        async function fetchApi() {
            const url = "https://api.mercadolibre.com/sites/MLB/search?category=MLB4983852868&q=playstation"
            const response = await axios.get(url)
            const data = response.data
            const newData = data.results.slice(0, 3)
            setDataApi(newData)
        }

        fetchApi();
    }, [])

    function handleClick(element) {
        setPrice(element.price + price)
        setProduct([...product, element])
    }

    return (
        <>
            <Navbar />

            {!dataApi ? "loading" : dataApi.map((element, index) => (
                <div>
                    <h4>{element.title}</h4>
                    <img src={element.thumbnail} alt="" />
                    <h5>${element.price}</h5>
                    <button onClick={() => handleClick(element)}>ADD TO CART</button>
                </div>
            ))}
            <hr></hr>

            {product.map((element, index) => (
                <>
                    <h4>{element.title}</h4>
                    <h5>${element.price}</h5>
                </>
            ))}
            <h4>TOTAL PRICE: ${price}</h4>
            <Link to="/cart">Checkout</Link>
        </>
    )
}

export default Playstation;