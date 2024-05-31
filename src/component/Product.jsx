
import { useState } from "react";
import "./Product.css";



const Product = ({increase,decrease,name,rating,price,count}) => {
    // console.log(props);
    const[show, setShow] = useState(false);

  function addToCart() {
    increase ();
    setShow(!show);
   
  }

  function removeFromCart () {
     decrease();
    setShow(!show);

  }
  return (
    <>
    <div className="items" >
        
        <div className="dimensions">
        <h2>
            450<span className="multiply">X</span>300
        </h2>
        </div>
        <div className="card">
            <h2 className="card-name">{name}</h2>
            <p className="card-rating">{rating}</p>
            <p className="card-price">{price}</p>
            {! show ? ( 
            <button
              className="productButton"
              variant="contained"
              onClick={addToCart}
            >
              Add to cart
            </button>
          ) : (
            ""
          )}
          {show ? (
            <button
              className="productButton"
              variant="contained"
              color="error"
              onClick={removeFromCart}
            >
              Remove from cart
            </button>
          ) : (
            ""
          )}
            
        </div>
        
        </div>
        
      </>
  )
}



export default Product;
