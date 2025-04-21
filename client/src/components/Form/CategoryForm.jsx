import React from "react";

const CategoryForm = ({handleSubmit,name,setName,fieldName}) => {
  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <div className="gap-4 shadow-lg border border-gray-400 p-8 flex">
          <div className="w-full">
            <input
              type="text"
              placeholder="Enter New Category"
              className="w-full p-4 border border-gray-400 rounded-2xl shadow-lg"
              required
              value={name}
              minLength={3}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>

          {fieldName && <div className="w-3/12">
            <button
              type="submit"
              className="inline-block w-full bg-blue-500 text-white p-4 rounded-2xl"
            >
              {fieldName}
            </button>
          </div>}
        </div>
      </form>
    </>
  );
};

export default CategoryForm;
