import { useState } from "react";
import { PlusCircle, Upload, Loader } from "lucide-react";
import { useProductStore } from "../../stores/product.store";
import toast from "react-hot-toast";
import { useEffect } from "react";

const categories = [
  "tech",
  "cloth",
  "interior",
  "glasses",
  "jackets",
  "suits",
  "bags",
];

const CreateProductForm = () => {
  const { createProduct } = useProductStore();
  const [images, setImages] = useState([]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    images: null,
  });

  useEffect(() => {
  }, [images, newProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(newProduct);
      setNewProduct({
        name: "",
        description: "",
        price: "",
        category: "",
        images: [],
      });
    } catch {
      console.log("error creating a product", newProduct);
    }
  };

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);

    const base64Images = [];

    for (let file of files) {
      if (!file.type.startsWith("image/")) {
        toast.error("Please select image files only");
        return;
      }

      const base64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      base64Images.push(base64);
    }

    // Merge with existing images
  setImages((prevImages) => {
    const updated = [...prevImages, ...base64Images];

    setNewProduct({ ...newProduct, images: updated }); // updated list
    return updated;
  });
  };

  return (
    <div
      data-theme="white"
      className=" shadow-lg rounded-lg p-8 mb-8 max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-6 ">Create New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium ">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="mt-1 block w-full  border border-gray-400 rounded-md shadow-sm py-2
						 px-3  focus:outline-none focus:ring-2
						focus:ring-blue-600 focus:border-blue-600"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium ">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            rows="3"
            className="mt-1 block w-full  border border-gray-400 rounded-md shadow-sm
						 py-2 px-3  focus:outline-none focus:ring-2 focus:ring-blue-600 
						 focus:border-blue-600"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium ">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            step="0.01"
            className="mt-1 block w-full  border border-gray-400 rounded-md shadow-sm 
						py-2 px-3  focus:outline-none focus:ring-2 focus:ring-blue-600
						 focus:border-blue-600"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium ">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
            className="mt-1 block w-full  border border-gray-400 rounded-md
						 shadow-sm py-2 px-3 focus:outline-none 
						 focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-1 flex items-center">
          <input
            type="file"
            id="image"
            className="sr-only"
            accept="image/*"
            onChange={handleImageChange}
          />
          <label
            htmlFor="image"
            className="cursor-pointer  py-2 px-3 border border-gray-400 rounded-md shadow-sm text-sm leading-4 font-medium 
             hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          >
            <Upload className="h-5 w-5 inline-block mr-2" />
            Upload Image
          </label>
          {newProduct.images && (
            <span className="ml-3  text-green-600 text-sm">
              <span className="font-lg font-semibold ">{`(${images.length})`}</span>{" "}
              Images uploaded
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
					shadow-sm text-sm font-medium text-white  bg-blue-600 hover:bg-blue-700 
					focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 disabled:opacity-50"
        >
          {false ? (
            <>
              <Loader
                className="mr-2 h-5 w-5 animate-spin"
                aria-hidden="true"
              />
              Loading...
            </>
          ) : (
            <>
              <PlusCircle className="mr-2 h-5 w-5" />
              Create Product
            </>
          )}
        </button>
      </form>
    </div>
  );
};
export default CreateProductForm;
