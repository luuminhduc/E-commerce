import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/action/ProductAction/actions";
import Product from "../../models/product";
import { handleAlert } from "../../redux/action/CommonAction/actions";
const ProductForm = () => {
  const { register, errors, handleSubmit, watch, reset } = useForm();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    console.log(data);
    const images = data.imgList;
    const {
      name,
      price,
      category,
      subCategory,
      gender,
      inventory,
      description,
    } = data;
    const imgList = await fileListToBase64(images);
    const product = new Product(
      name,
      price,
      imgList,
      category,
      subCategory,
      gender,
      inventory,
      description,
      [],
      []
    );
    dispatch(addProduct(product));
    reset();
  };

  async function fileListToBase64(fileList) {
    // create function which return resolved promise
    // with data:base64 string
    function getBase64(file) {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onload = (ev) => {
          resolve(ev.target.result);
        };
        reader.readAsDataURL(file);
      });
    }
    const promises = [];

    // loop through fileList with for loop
    for (let i = 0; i < fileList.length; i++) {
      promises.push(getBase64(fileList[i]));
    }

    return await Promise.all(promises);
  }

  const renderSubCategory = () => {
    switch (watch("category")) {
      case "electronics":
        return (
          <React.Fragment>
            <option value="laptop">Laptop</option>
            <option value="iphone">Phone</option>
            <option value="iPod">I pod</option>
          </React.Fragment>
        );
      case "book":
        return (
          <React.Fragment>
            <option value="thriller">Thriller</option>
            <option value="fiction">Fiction</option>
            <option value="nonFiction">Non fiction</option>
            <option value="romantic">Romantic</option>
          </React.Fragment>
        );
      case "shoes":
        return (
          <React.Fragment>
            <option value="shoes">Running</option>
            <option value="nike">Nike</option>
            <option value="addidas">Addidas</option>
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment>
            <option value="t shirt">T shirt</option>
            <option value="pants">Pants</option>
            <option value="hoodie">Hoodie</option>
            <option value="jeans">Jeans</option>
            <option value="shorts">Shorts</option>
          </React.Fragment>
        );
    }
  };

  return (
    <div className="productForm">
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input
            className={errors.name ? "error" : ""}
            name="name"
            type="text"
            ref={register({ required: true })}
          />
          <small>
            {errors.name && errors.name.type === "required"
              ? "This can not be blank"
              : ""}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="">Price</label>
          <input
            className={errors.price ? "error" : ""}
            name="price"
            type="number"
            ref={register({ required: true })}
          />
          <small>
            {errors.price && errors.price.type === "required"
              ? "This can not be blank"
              : ""}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="">Images</label>
          <input
            className={errors.imgList ? "error" : ""}
            ref={register({ required: true })}
            name="imgList"
            type="file"
            multiple
          />
          <small>
            {errors.imgList && errors.imgList.type === "required"
              ? "There must be at least one image"
              : ""}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="">Category</label>
          <select ref={register()} name="category">
            <option value="wearing">Wearing</option>
            <option value="electronics">Electronics</option>
            <option value="book">Book</option>
            <option value="shoes">Shoes</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">Sub Category</label>
          <select ref={register()} name="subCategory">
            {renderSubCategory()}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">Gender</label>
          <select ref={register()} name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">Inventory</label>
          <input
            className={errors.inventory ? "error" : ""}
            name="inventory"
            type="number"
            ref={register({ required: true })}
          />
          <small>
            {errors.inventory && errors.inventory.type === "required"
              ? "This can not be blank"
              : ""}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="">Description</label>
          <input
            className={errors.description ? "error" : ""}
            name="description"
            type="text"
            ref={register({ required: true })}
          />
          <small>
            {errors.description && errors.description.type === "required"
              ? "This can not be blank"
              : ""}
          </small>
        </div>
        <div className="form-group-btn">
          <button>Add</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
