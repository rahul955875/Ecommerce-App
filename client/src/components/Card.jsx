import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  id,
  name,
  description,
  price,
  rating,
  handleClick,
  shipping,
}) => {
  return (
    <div to="" className="bg-blue-50 rounded card w-68 shadow-lg p-2">
      <div>
        <Link className="product-img">
          <img
            src={`http://localhost:8080/api/v1/products/product-photo/${id}`}
            className="object-contain h-64 mx-auto bg-blue-100"
            alt={name}
          />
        </Link>
        <div className="product-body p-2">
          <h4 className="text-xl font-medium">{name}</h4>
          <h4 className="text-gray-700">
            PRICE :
            <span className="text-2xl font-bold text-black">{price}</span>
          </h4>
          <p className="text-gray-700">
            {description.length > 30
              ? description.substring(0, 40) + "..."
              : description}
          </p>
          <p className="text-gray-700">Rating : {rating}</p>
          <h4 className=" text-gray-700">Shipping : {shipping}</h4>
          <div className="btns flex justify-between">
            <button
              className=" mt-4 px-2 bg-blue-400 text-black rounded py-2 hover:bg-blue-500 hover:text-white"
            >
              More Details
            </button>
            <button
              className="mt-4 px-2 bg-blue-400 text-black rounded hover:bg-blue-500 hover:text-white"
              onClick={handleClick}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
