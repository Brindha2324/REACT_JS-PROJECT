import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productSlice';
import { useNavigate } from 'react-router-dom';
import '../css/Add.css';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    title: '',
    price: '',
    description: '',
    stock: '',
    brand: '',
    category: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!productData.title || !productData.price) {
      alert("Title and Price are required fields.");
      return;
    }

    dispatch(addProduct(productData));
    navigate('/Productpage');
  };

  return (
    <div className="add-product-container">
      <form className="add-product-form">
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Title</td>
              <td>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={productData.title}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Price</td>
              <td>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={productData.price}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Description</td>
              <td>
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={productData.description}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Stock</td>
              <td>
                <input
                  type="number"
                  name="stock"
                  placeholder="Stock"
                  value={productData.stock}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>
                <input
                  type="text"
                  name="brand"
                  placeholder="Brand"
                  value={productData.brand}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Category</td>
              <td>
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={productData.category}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button" onClick={handleSubmit}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
