import React, { useState } from 'react'
import CartContext from './CartContext'
import { toast } from 'react-toastify';

const CartState = (props) => {
   const [cartArr , setcartArr] = useState([]);
   const [searchValue, setsearchValue] = useState([]);
   console.log(searchValue)

   function addItem(obj){
    console.log(obj)
    obj.quantity = 1
    let findObj = cartArr.find((ele)=>ele.id===obj.id)
   if(findObj){
    toast.error('item already in cart',)
   }
   else{
    toast.success('item added successfully')
    setcartArr([...cartArr,obj])
   }
   }

   function updateItem(obj,i){
    console.log(obj)
    console.log(i)
    let updatedobj = {
      ...obj,
      quantity: obj.quantity+1,
      price: obj.price + obj.price / obj.quantity
    }
    console.log(updatedobj)
    let updatedCart = [...cartArr]
     updatedCart[i] = updatedobj
     console.log(updatedCart)
     setcartArr(updatedCart)
   }

   function removeItem(obj,i){
     console.log(obj)
     console.log(i)
     let updatedobj = {
      ...obj,
       quantity: obj.quantity-1,
       price: obj.price - obj.price / obj.quantity
     }
     console.log(updatedobj)
     if(obj.quantity > 1){
      let updatedCart = [...cartArr]
     updatedCart[i] = updatedobj
     setcartArr(updatedCart)
     }
   }

   function deleteItem(obj){
    console.log(obj)
    let updatedCart = cartArr.filter((ele)=>ele.id!== obj.id)
    setcartArr(updatedCart)
   } 




  return (
    <CartContext.Provider value={{cartArr, addItem , updateItem, removeItem , deleteItem , searchValue , setsearchValue }}>
       {props.children}
    </CartContext.Provider>
  )
}

export default CartState
