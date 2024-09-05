import axios from "axios";
import { useEffect, useState } from "react";


function Xbox() {

    const [dataApi, setDataApi] = useState(null)


    useEffect(() => {
        async function fetchApi() {
            const url = "https://api.mercadolibre.com/sites/MLB/search?category=MLB4983852868&q=xbox"
            const response = await axios.get(url)
            const data = response.data
            const newData = data.results.slice(1, 4)
            setDataApi(newData)
        }

        fetchApi();

    }, [])

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
        </>
    )
}

export default Xbox;