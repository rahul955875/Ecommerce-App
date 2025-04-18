import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux_store/cartSlice";
const Home = () => {
  const dispatch = useDispatch();
  const [productAllData, setProductAllData] = useState([]);
  useEffect(() => {
    fetch("jmd_structured_saris_data.json")
      .then((res) => res.json())
      .then((data) => setProductAllData(data.data));
  }, []);
  console.log(productAllData.data);
  return (
    <div className="min-h-100 py-8 px-8">
      <h2 className="text-2xl">OUR COLLECTIONS</h2>
      <div className="products-link mt-8">
        {productAllData?.map((products) => (
          <Link
            to="#"
            className="mx-4 px-4 py-2 bg-blue-300 text-black  rounded-4xl"
            key={products.category}
          >
            {products.category}
          </Link>
        ))}

        <div className="products-category mt-8 justify-center flex flex-wrap gap-8">
          {productAllData.map((productsObj) =>
            productsObj.products.map((product) => (
              <div key={product.id} to="" className="card w-80 shadow-lg p-2">
                <div>
                  <Link className="product-img">
                    <img
                      src="https://tulsiweaves.com/uploads/products/img-48870169163907b57876656.86001921.jpg"
                      className="w-full"
                      alt=""
                    />
                  </Link>
                  <div className="product-body p-2">
                    <h4 className="text-xl font-medium">{product.name}</h4>
                    <h4 className="text-gray-700">
                      PRICE :{" "}
                      <span className="text-2xl font-bold text-black">
                        {product.price}
                      </span>
                    </h4>
                    <p className="text-gray-700">
                      Description:
                      {product.description.length > 30
                        ? product.description.substring(0, 30) + "..."
                        : product.description}
                    </p>
                    <p className="text-gray-700">Rating : {product.rating}</p>
                    <button
                      className=" mt-4 px-4 py-2 bg-blue-300 text-black  rounded-4xl hover:bg-black hover:text-white"
                      onClick={() =>
                        dispatch(addToCart({ ...product, count: 1 }))
                      }
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
