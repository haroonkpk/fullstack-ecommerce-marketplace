import { Trash, Star } from "lucide-react";
import { useProductStore } from "../../stores/product.store";
import { useEffect } from "react";

const ProductsList = () => {
  const { products, getAllProducts, deleteProduct, toggleFeaturedProduct } =
    useProductStore();
  // Fetch all products when the component mounts
  // and whenever the products state changes
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);
  return (
    <div className=" bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
      <table className=" min-w-full divide-y divide-gray-300">
        <thead className="">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
            >
              Product
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
            >
              Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
            >
              Category
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
            >
              Featured
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>

        <tbody className=" divide-y divide-gray-300">
          {products?.map((product) => (
            <tr key={product._id} className="hover:bg-blue-300">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                        src={product.images?.[0]}
                        alt={product.name}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium ">{product.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm ">${product.price.toFixed(2)}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm ">{product.category}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => toggleFeaturedProduct(product._id)}
                  className={`p-1 rounded-full ${
                    product.isFeatured
                      ? "bg-blue-600 text-white transition-colors duration-200 "
                      : "hover:text-blue-600 hover:bg-white transition-colors duration-200"
                  }  `}
                >
                  <Star className="h-5 w-5" />
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => deleteProduct(product._id)}
                  className="text-red-500 hover:text-red-300"
                >
                  <Trash className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProductsList;
