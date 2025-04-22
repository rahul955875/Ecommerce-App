import React, { useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import CategoryForm from "./Form/CategoryForm";
import { useSelector } from "react-redux";
import Modal from "./Form/Modal";
import { useName } from "../hook/UpdatedNameProvider";
import ConfirmModal from "./Form/ConfirmModal";
const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  //confirm modal box state
  const [ConfirmOpen, setConfirmOpen] = useState(false);
  //modal
  const [open, setOpen] = useState(false);
  //modal updated value
  const [updatedName, setUpdatedName] = useName();
  //id of category
  const [selectedId, setSelectedId] = useState(null);
  const auth = useSelector((state) => state.login.auth);
  //get all categories
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/category/get-category"
      );
      console.log(data);
      if (data?.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.success("somethig went wrong while getting category");
    }
  };
  //create category
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/category/create-category",
        { name },
        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );
      if (data?.success) {
        toast.success(`${name} Category is Created`);
        getAllCategories();
        setName("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong.");
    }
  };
  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:8080/api/v1/category/update-category/${selectedId}`,
        { name: updatedName },
        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );
      if (data.success) {
        toast.success(`category updated to ${updatedName}`);
        setSelectedId(null);
        setUpdatedName("");
        setOpen(false);
        getAllCategories();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  //delete category
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.delete(
        `http://localhost:8080/api/v1/category/delete-category/${selectedId}`,
        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );
      if (data.success) {
        toast.success(data.message);
        setSelectedId(null);
        setConfirmOpen(false);
        getAllCategories();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
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
      <div className="content bg-slate-200 w-full border border-gray ">
        <h2 className="text-3xl font-medium m-4">Manage Category</h2>
        <div className=" p-4">
          <CategoryForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            fieldName={"Create Category"}
          />
        </div>
        <div className="px-4 py-4">
          <table className="table-auto w-full text-left table ">
            <thead className="">
              <tr className="">
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((c) => (
                <tr key={c._id}>
                  <td className="p-4">{c.name}</td>
                  <td>
                    <button
                      className="px-4 py-2 rounded-2xl bg-blue-300"
                      onClick={() => {
                        setOpen(true);
                        setUpdatedName(c.name);
                        setSelectedId(c._id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="px-4 py-2 rounded-2xl bg-red-300 ml-2"
                      onClick={() => {
                        setSelectedId(c._id);
                        setConfirmOpen(true);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Modal open={open} setOpen={setOpen} handleUpdate={handleUpdate} />
          <ConfirmModal
            title={"Delete Category"}
            modalDescription={"You really wants to delete this category?"}
            updateState={[ConfirmOpen, setConfirmOpen]}
            handleFunction={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
