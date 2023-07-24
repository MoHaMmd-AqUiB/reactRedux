import { useSelector, useDispatch } from "react-redux";
import { fetchAsync } from "./cartSlice";
import styles from "./items.css";
import { useEffect } from "react";

export function Items() {
  const items = useSelector((state) => state.cart.items);
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
        fetchitems
      </button>  */}
      {items.map(item=>  <div className="card" key={item.id}>
  <img src={item.thumbnail} alt={item.title} style={{ width: "100%" }} />
  <h1>{item.title} </h1>
  <p className="price">{item.price}</p>
  <p>{item.description}</p>
  <p>
    <button>Add to Cart</button>
  </p>
</div>)}
   

    </div>
  );
}
