import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="w-96 p-2 rounded-full"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button type="submit" className="bg-blue-600 p-2 text-white rounded-md">
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;