import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, removeCartItem, removeFromCart } from "../redux_store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);
  return (
    <div className=" cart p-8 min-h-100">
      <h1 className="text-2xl text-center">
        YOUR CART ({cartItems.reduce((acc, curr) => curr.count + acc, 0)}) items
      </h1>
      <div className="cart-clear text-center">
        <button
          className="py-2 mt-4 px-4 rounded bg-red-500 text-white"
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </button>
      </div>
      <div className="cart-products max-w-200 mx-auto mt-8 space-y-4">
        {cartItems.map((product) => (
          <div
            key={crypto.randomUUID()}
            className="product-card flex gap-4 items-center"
          >
            <div className="product-img w-50">
              <img
                src="https://tulsiweaves.com/uploads/products/img-48870169163907b57876656.86001921.jpg"
                className="w-full"
                alt=""
              />
            </div>
            <div className="card-body leading-8">
              <h4 className=" mb-4 font-bold text-xl">{product.name}</h4>
              <h4 className="text-gray-700">
                PRICE :{" "}
                <span className="text-black font-medium text-3xl">
                  {product.price}
                </span>
              </h4>
              <p className="text-gray-700">{product.description}</p>
              <p>Rating : {product.rating}</p>
              <div className="cart-btns mt-4">
                <button onClick={()=>dispatch(removeCartItem({...product}))}  className="px-4 bg-blue-100">-</button>
                <span className="mx-2">{product.count}</span>
                <button onClick={()=>dispatch(addToCart({...product}))} className="px-4  bg-blue-100">+</button>
                <button onClick={()=>dispatch(removeFromCart(product))} className="ml-8 bg-red-200 rounded px-2">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
