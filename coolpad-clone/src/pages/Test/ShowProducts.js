import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getProducts,
  productSelectors,
  deleteProduct,
} from "../../features/productSlice";

export default function ShowProduct() {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="overflow-x-auto">
      <Link to="/add">Add New Product</Link>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className="text-center">
              <th>{index + 1}</th>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td className="flext justify-around">
                <Link to={`edit/${product.id}`} className="btn">
                  Edit
                </Link>
                <button
                  className="btn"
                  onClick={() => dispatch(deleteProduct(product.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
