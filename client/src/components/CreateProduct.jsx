import React, { useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const auth = useSelector((state) => state.login.auth);
  const navigate = useNavigate()
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState({});
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    price: "",
    shipping: "",
    quantity: "",
  });

  //get all products
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.success("somethig went wrong while getting category");
    }
  };
  //handle proudct input change
  const handleChange = (e) => {
    setProductDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    if (!photo?.name) {
      toast.error("please select product photo");
      return;
    }
    const productFormData = new FormData(e.target);
    console.log(productFormData);
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/products/create-product",
        productFormData,
        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );
      console.log(data);
      if (data?.success) {
        toast.success(data?.message);
        navigate('/dashboard/admin/products')
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <div className="flex mt-20 p-4 ">
      <div className="side-menu text-center bg-amber-300 w-4/12">
        <AdminMenu />
      </div>
      <div className="content p-2 bg-slate-200 w-full border border-gray ">
        <h2 className="text-3xl">Create Product</h2>
        <form onSubmit={handleCreate}>
          <div className="product-form w-6/12">
            <select
              name="category"
              required
              className="mt-4 ml-2 w-full shadow py-2 px-2 bg-blue-100"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" hidden disabled>
                Select Category
              </option>
              {categories?.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
            <div className="m-2">
              <label
                className=" text-center w-full inline-block rounded cursor-pointer border border-gray-400  shadow-sm p-2 hover:bg-gray-700 hover:text-white"
                htmlFor="upload-image"
              >
                {(photo && photo.name) || "Upload Photo"}
                <input
                  id="upload-image"
                  type="file"
                  className=""
                  name="photo"
                  accept="image/*"
                  hidden
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
              </label>
            </div>
            <div className="mb-4">
              {photo?.name && (
                <div className="photo">
                  <img
                    className="w-full bg-contain"
                    src={URL.createObjectURL(photo)}
                    alt={photo?.name || "proudct photo"}
                  />
                </div>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                required
                name="name"
                value={productDetails.name}
                onChange={handleChange}
                placeholder="Product Name : "
                className="shadow-sm p-2  w-full"
              />
            </div>
            <div className="mb-4">
              <textarea
                required
                type="text"
                name="description"
                value={productDetails.description}
                onChange={handleChange}
                placeholder="Product Description : "
                className="shadow-sm p-2  w-full"
              />
            </div>
            <div className="mb-4">
              <input
                required
                type="number"
                name="price"
                value={productDetails.price}
                onChange={handleChange}
                placeholder="Price : "
                className="shadow-sm p-2  w-full"
              />
            </div>
            <div className="mb-4">
              <input
                required
                type="number"
                name="quantity"
                value={productDetails.quantity}
                onChange={handleChange}
                placeholder="Quantity/Stock : "
                className="shadow-sm p-2  w-full"
              />
            </div>
            <div className="mb-4">
              <select
                required
                name="shipping"
                value={productDetails.shipping}
                onChange={handleChange}
                className=" w-full shadow py-2 px-2"
              >
                <option hidden>Shipping ?</option>
                <option value={"1"}>Yes</option>
                <option value={"0"}>NO</option>
              </select>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full px-4 py-2 rounded bg-blue-500 text-white cursor-pointer hover:bg-blue-700"
              >
                Create Prouduct
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
