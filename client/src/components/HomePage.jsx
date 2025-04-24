import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux_store/cartSlice";
import { prices } from "../utils/Prices";

const HomePage = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // fitler checks
  const [checked, setChecked] = useState([]);
  //prices radios
  const [priceRadio, setPriceRadio] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/products/product-list/${page}`
      );
      console.log(data.products);
      setLoading(false);
      console.log(page);
      if (page === 1) {
        setProducts(data.products);
      } else {
        setProducts((prev) => [...prev, ...data.products]);
      }
      // console.log(data.products)
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };
  //get all categories
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //get fitlered products
  const filterProducts = async () => {
    try {
      console.log(checked,priceRadio)
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/products/product-filter",
        { checked, priceRadio }
      );

      setProducts(data?.products);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  //get total product count
  const totalCount = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/products/product-count"
      );
      setTotalItems(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
    totalCount();
  }, []);

  useEffect(() => {
    getAllProducts();
  }, [page]);

  const handleFilter = (isChecked, id) => {
    let all = [...checked];
    if (isChecked) {
      all.push(id);
    } else {
      all = checked.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (checked.length || priceRadio.length) filterProducts();
  }, [checked, priceRadio]);

  return (
    <div className="min-h-100 py-8 px-8 flex">
      <div className="filters w-3/12">
        <h4 className="text-2xl">Filter By Category</h4>
        <div className="categories mt-4">
          {categories?.map((c) => (
            <label key={c._id} className="flex space-x-2 items-center mb-2">
              <input
                type="checkbox"
                className="w-4 h-4  accent-blue-600 align-middle"
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              />
              <span className="">{c.name}</span>
            </label>
          ))}
        </div>
        {/* {filter by price} */}
        <h4 className="text-2xl mt-4">Filter By Prices</h4>
        <div className="categories mt-4">
          {prices?.map((c) => (
            <label key={c._id} className="flex space-x-2 items-center mb-2">
              <input
                type="radio"
                name="price"
                className="w-4 h-4  accent-blue-600 align-middle"
                onChange={() => setPriceRadio(c.array)}
              />
              <span className="">{c.name}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="products w-full">
        <h1 className="text-4xl font-medium">All Products</h1>
        <div className="products-cards  mt-8  flex flex-wrap gap-4">
          {products.map((p) => {
            return (
              <Card
                key={p._id}
                id={p._id}
                name={p.name}
                description={p.description}
                price={p.price}
                rating={4}
                shipping={p.shipping ? "Yes" : "No"}
                handleClick={() => () =>
                  dispatch(addToCart({ ...p, count: 1 }))
                }
              />
            );
          })}
        </div>
        <div className="mt-8">
          {products && products.length < totalItems && (
            <button
              className="px-4 py-2 text-xl border border-gray-700 rounded"
              onClick={() => setPage(page + 1)}
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
