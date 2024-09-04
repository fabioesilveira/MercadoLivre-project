import axios from "axios"
import { useEffect, useState } from "react"


function Playstation() {

    const [dataApi, setDataApi] = useState(null)
    const [price, setPrice] = useState(0)
    const [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchApi() {
            const url = "https://api.mercadolibre.com/sites/MLB/search?category=MLB4983852868&q=playstation"
            const response = await axios.get(url)
            const data = response.data
            const newData = data.results.slice(0, 3)
            console.log(newData)
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
        </>
    )
}

export default Playstation;