import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const thali = useSelector((state) => state.counter.thali);
  const click = () => {
    if (thali.length < 2) {
      alert(
        "There are less than 2 items in your bucket, Please order Minimum 2 items"
      );
    } else {
      navigate("/CheckOut");
    }
  };
  console.log(thali);

  const navigate = useNavigate();
  var sum = 0;
  for (const item of thali) {
    sum = sum + item.totalPrice;
  }
  return (
    thali.length > 0 ? <div className="mx-3">
    <div className="row bucket-cont my-4">
      <div className="main">
        <h4 className=" text-center text-primary my-3">Selected Items are Shown here:</h4>
        <div className="cart">
          {thali.map((ele, i) => {
            return (
              <div className="" key={i}>
                <img className="img-cart mx-2" src={ele.imageurl} />
              </div>
            );
          })}
        </div>
        <div className="text-center my-4">
        <button className="btn btn-outline-primary mb-3" onClick={click}>
          Proceed checkout
        </button>
        </div>
      </div>
    </div>
  </div> : <p className="text-center"> There are no items in your bucket yet</p>
  );
};

export default Cart;