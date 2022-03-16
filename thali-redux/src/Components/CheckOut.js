import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removefromcart } from "../redux/slice";

const Cart = () => {
  const thali = useSelector((state) => state.counter.thali);

  console.log(thali);
  const despatch = useDispatch();
  const Remove = (id) => {
    despatch(removefromcart(id));
  };
  var sum = 0;
  for (const item of thali) {
    sum = sum + item.totalPrice;
  }
  return (
    <div className="container my-4">
      <h1 className="text-center text-primary my-4 p-3 food">Your Checkout Items</h1>
      <div className="row">
        <table>
          <thead>
              <th>Name</th>
              <th className="head_table">Price</th>
              <th className="head_table">Quantity</th>
              <th className="head_table">Total Price</th>
              <th className="head_table"> Action</th>
          </thead>
          
            {thali.map((ele, i) => {
              return ( <tbody key={i}>
                <td className="list_name"> {ele.name}</td>
                  <td> {`${ele.price}`}</td>
                  <td> {ele.quantity}</td>
                  <td> {`${ele.totalPrice}`}</td>
                  <td> <button onClick={() => Remove(i)} className="btn btn-dark">
                    Remove
                  </button></td>

                  </tbody>
              );
            })}
         
        </table>
        <h3 className="text-center my-5">
          <span className="grand"> total price: </span>{" "}
          {sum}
          <span>  RS/-</span>
        </h3>
      </div>
    </div>
  );
};

export default Cart;