import { useState } from "react"


function Card() {

    const [countItem, setCountItem] = useState(0);
    const handleClick = () => setCountItem(countItem + 1);

  return (
    <>
        <h1>Number of item in the cart: {countItem}</h1>
        <button onClick={handleClick} >Add to Cart</button>
    </>
  )
}

export default Card