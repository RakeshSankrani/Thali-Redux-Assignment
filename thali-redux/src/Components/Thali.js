import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {addtocart} from "../redux/slice";
import { useSelector } from 'react-redux';  
import Banner from './Banner'
import Cart from './Cart';


const Product = ({data}) => {
  const [quantity,setQuantity]=useState(1);

  const thaliItems=useSelector(state=>state.counter.thaliitems)
const dispatch=useDispatch();
const add=(item)=>{
  item = JSON.parse(JSON.stringify(item));
  item.quantity=quantity;
  item.totalPrice=Number(item.quantity)*Number(item.price)
  dispatch(addtocart(item));
console.log(addtocart(item))
}

const increment=()=>{
  setQuantity(quantity+1)

}

const decrement=()=>{
  if(quantity>1)
  {
    setQuantity(quantity-1)
  }
}

  return (
      <div>
        <Banner/>
        <Cart/>
        <h1 className='text-center text-danger my-3'> Select Your Thali Item</h1>
        {
          thaliItems.map((ele, i) => {
            return <div className="container my-5" key={i}> 
           <div className="row labels py-5">
             <div className="col-md-4">
             <img src={ele.imageurl} className="img-fluid"/>
             </div>
             <div className="col-md-8">
             <h2> {ele.name} </h2>
            <h6>{ele.description}</h6>
            <h3> {`Rs ${ele.price} /-`} </h3>
            
            <div className="incre">
            <p className='buton' onClick={decrement}> -</p>
            <p className='middle'> {quantity}</p>
            <p className='buton' onClick={increment}> +</p>
            </div>
            <button className='btn btn-success' onClick={()=>add(ele)}> Add to checkout</button>
             </div>
           </div>
           
            </div>
          })
        }
      </div>

  )
}

export default Product