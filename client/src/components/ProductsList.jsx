import React, { useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  //get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/products/get-product"
      );
      if (data?.success) {
        setProducts(data.products);
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      toast.error("somthing went wrong");
      console.log(error.message);
    }
  };
  console.log(products);
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="flex mt-20 p-4 ">
      <div className="side-menu text-center bg-amber-300 w-4/12">
        <AdminMenu />
      </div>
      <div className="content p-2 bg-slate-200 border border-gray ">
        <h2 className="mb-4 text-3xl font-medium">All Products List</h2>
        <div className="products-list-cards flex justify-center gap-4 flex-wrap">
          {products?.map((p) => (
            <Link key={p._id} to={`/dashboard/admin/products/${p.slug}`}>
              <div className="card bg-blue-50 rounded shadow-lg p-2 border w-64 border-gray-500 ">
                <div className="img">
                  <img
                    src={`http://localhost:8080/api/v1/products/product-photo/${p._id}`}
                    alt={p.name}
                    className="object-contain h-64 mx-auto bg-blue-100"
                  />
                </div>
                <div className="card-body p-2">
                  <h5 className="card-title text-xl font-medium">{p.name}</h5>
                  <h4 className="text-gray-700">
                    PRICE :
                    <span className="text-2xl font-bold text-black">
                      {p.price}
                    </span>
                  </h4>
                  <p className="text-gray-700">
                    {p.description.length > 30
                      ? p.description.substring(0, 30) + "..."
                      : p.description}
                  </p>
                  <p className="text-gray-700">Rating : {4}</p>
                  <h4 className=" text-gray-700">Shipping : {p.shipping? 'Yes' : 'NO'}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
