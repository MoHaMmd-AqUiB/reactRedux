import { useSelector, useDispatch } from "react-redux";
import { fetchAsync } from "./productsSlice";
import styles from "./Products.css";
import { useEffect } from "react";
import { addAsync } from "../cart/cartSlice";

export function Products() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAsync())
    console.log("Fetch hua")
  },[])
  return (
    <div>
      {/* <button
       
        aria-label="Decrement value"
        onClick={() => }
      >
        fetchProducts
      </button>  */}
      {products.map(product=>  <div className="card" key={product.id}>
  <img src={product.thumbnail} alt={product.title} style={{ width: "100%" }} />
  <h1>{product.title} </h1>
  <p className="price">{product.price}</p>
  <p>{product.description}</p>
  <p>
    <button onClick={()=>dispatch(addAsync(product))}>Add to Cart</button>
  </p>
</div>)}
   

    </div>
  );
}
