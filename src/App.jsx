import { useState } from "react";
import "./App.css";
import Footer from "./component/Footer";
import Product from "./component/Product";
import { FaShoppingCart } from "react-icons/fa";

function App() {
  let [count , setCount] = useState(0);
 
  const increase = () => {
      setCount(count + 1); 
  }
  const decrease = () => {
    setCount(count - 1); 
}
	
  let productList = [
    {
      id: 1,
      name: "Fancy Product",
      price: "$40.00 - $80.00",
    },
    {
      id: 2,
      name: "Special Item ",
      rating: "⭐⭐⭐⭐⭐",
      price: " $20.00 $18.00",
    },
    {
      id: 3,
      name: "Sale Item ",
      price: "$50.00 $25.00",
    },
    {
      id: 4,
      name: "Popular Item ",
      rating: "⭐⭐⭐⭐⭐",
      price: "$40.00 ",
    },
    {
      id: 5,
      name: "Sale Item ",
      price: "$50.00 $25.00",
    },
    {
      id: 6,
      name: "Fancy Product ",
      price: "$120.00 $280.00",
    },
    {
      id: 7,
      name: "Special Item ",
      rating: "⭐⭐⭐⭐⭐",
      price: "$20.00 $18.00",
    },
    {
      id: 8,
      name: "Popular Item ",
      rating: "⭐⭐⭐⭐⭐",
      price: "$40.00",
    },
  ];

  return (
    <div>
      <div className="navbarcontainer">
      <div className="navbar">
        <h3>Start Bootstrap</h3>
        <p>Home</p>
        <p>About</p>
        <p>Shop</p>
        
      </div>
      <div className="cart">
        <button className="button"><FaShoppingCart /> Cart {count}</button>
        
        </div>
      </div>
      <div className="header">
        <h1 className="subhead">Shop in Style</h1>
        <h3>With this homepage template</h3>
      </div>
      <div className="boxes"> 
        {productList.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            rating={product.rating}
            price={product.price}
            count={count}
           increase={increase}
           decrease={decrease}
          />
        ))}
        
     </div>
     < Footer
        />
    </div>
  );
}
export default App;
