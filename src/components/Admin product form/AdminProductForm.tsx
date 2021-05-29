import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";

const AdminProductForm = () => {

    return (
        <div className="admin-product-form" >

            <div className="admin-product-form__table-title-bar">
                <p className="admin-product-form__table-title"> Enter The Product Information</p>
            </div>
            <div className="admin-product-form__table-container">

                <form className="admin-product-form__form" >

                    <div className="admin-product-form__form-input-container-one">
                        <div className="admin-product-form__product-description">

                            <label className="admin-product-form__lable" htmlFor="product-description">Product Description</label>

                            <textarea 
                            className="admin-product-form__text-area"
                            name="product-description"
                            id="product-description" 
                            cols={20} 
                            rows={5}
                            placeholder="Enter product description">
                            </textarea>

                        </div>
                    </div>

                    <div className="admin-product-form__form-input-container-two">
                        <div className="admin-product-form__product-sku">

                            <label className="admin-product-form__lable" htmlFor="Product-sku">Product SKU</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="product-sku"
                            id="product-sku"
                            placeholder="Enter SKU"
                            />

                        </div>
                        <div className="admin-product-form__product-type">

                            <label className="admin-product-form__lable" htmlFor="Product-type">Product Type</label>
                            <select 
                            className="admin-product-form__select"
                            name="product-type" 
                            id="product-type">
                                <option hidden >Select product family type &#8964;</option>
                                <option value={"Tshirts & Shirts"}>Tshirts &amp; Shirts</option>
                                <option value="Pants">Pants</option>
                                <option value={"Sneakers & Shoes"}>Sneakers &amp; Shoes</option>
                                <option value="Shorts">Shorts</option>
                                <option value="Jackets">Jackets</option>
                                <option value="Caps">Caps</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-name">

                            <label className="admin-product-form__lable" htmlFor="Product-name">Product Name</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="product-name"
                            id="product-name"
                            placeholder="Enter product name"
                            />

                        </div>
                    </div>

                    <div className="admin-product-form__form-input-container-three">
                        <div className="admin-product-form__product-stock">

                            <label className="admin-product-form__lable" htmlFor="Product-stock">Stock</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="product-stock"
                            id="product-stock"
                            placeholder="Enter stock"
                            />

                        </div>
                        <div className="admin-product-form__product-rate">

                            <label className="admin-product-form__lable" htmlFor="rate">Rate</label>
                            <select 
                            className="admin-product-form__select"
                            name="rate" 
                            id="rate">
                                <option hidden >select option &#8964;</option>
                                <option value={5}>5</option>
                                <option value={4}>4</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-price">

                            <label className="admin-product-form__lable" htmlFor="Product-price">Price</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="product-price"
                            id="product-price"
                            placeholder="Enter price"
                            />

                        </div>
                        <div className="admin-product-form__product-old-price">

                            <label className="admin-product-form__lable" htmlFor="Product-old-price">Old Price</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="product-old-price"
                            id="product-old-price"
                            placeholder="Enter old price"
                            />

                        </div>
                        <div className="admin-product-form__product-review-quantity">

                            <label className="admin-product-form__lable" htmlFor="Product-review-quantity">Review Quantity</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="product-review-quantity"
                            id="product-review-quantity"
                            placeholder="Enter review quantity"
                            />

                        </div>
                    </div>

                    <div className="admin-product-form__form-input-container-four">
                        <div className="admin-product-form__product-sold-quantity">

                            <label className="admin-product-form__lable" htmlFor="Product-sold-quantity">Sold Quantity</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="product-sold-quantity"
                            id="product-sold-quantity"
                            placeholder="Enter sold quantity"
                            />

                        </div>
                        <div className="admin-product-form__product-main-image">

                            <label className="admin-product-form__lable" htmlFor="main-image">Main Image</label>
                            <input
                            className="admin-product-form__input"
                            type="text" 
                            id="main-image"
                            name="main-image"
                            placeholder="Main image file name"
                            />

                        </div>
                        <div className="admin-product-form__product-thumbnail">

                            <label className="admin-product-form__lable" htmlFor="thumbnail">Thumbnail</label>
                            <input
                            className="admin-product-form__input"
                            type="text" 
                            id="thumbnail"
                            name="thumbnail"
                            placeholder="Thumbnail image file name"
                            />

                        </div>
                    </div>

                    <div className="admin-product-form__form-input-container-five">
                        <div className="admin-product-form__product-size-one">

                            <label className="admin-product-form__lable" htmlFor="size-one">Size One</label>
                            <select 
                            className="admin-product-form__select"
                            name="size-one" 
                            id="size-one">
                                <option hidden >Set size one &#8964;</option>
                                <option value="false">false</option>
                                <option value="6.5">6.5</option>
                                <option value="7">7</option>
                                <option value="7.5">7.5</option>
                                <option value="8">8</option>
                                <option value="8.5">8.5</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-size-two">

                            <label className="admin-product-form__lable" htmlFor="size-two">Size Two</label>
                            <select 
                            className="admin-product-form__select"
                            name="size-two" 
                            id="size-two">
                                <option hidden >Set size two &#8964;</option>
                                <option value="false">false</option>
                                <option value="6.5">6.5</option>
                                <option value="7">7</option>
                                <option value="7.5">7.5</option>
                                <option value="8">8</option>
                                <option value="8.5">8.5</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-size-three">

                            <label className="admin-product-form__lable" htmlFor="size-one">Size Three</label>
                            <select 
                            className="admin-product-form__select"
                            name="size-three" 
                            id="size-three">
                                <option hidden >Set size three &#8964;</option>
                                <option value="false">false</option>
                                <option value="6.5">6.5</option>
                                <option value="7">7</option>
                                <option value="7.5">7.5</option>
                                <option value="8">8</option>
                                <option value="8.5">8.5</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-size-four">

                            <label className="admin-product-form__lable" htmlFor="size-one">Size Four</label>
                            <select 
                            className="admin-product-form__select"
                            name="size-four" 
                            id="size-four">
                                <option hidden >Set size four &#8964;</option>
                                <option value="false">false</option>
                                <option value="6.5">6.5</option>
                                <option value="7">7</option>
                                <option value="7.5">7.5</option>
                                <option value="8">8</option>
                                <option value="8.5">8.5</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-size-five">

                            <label className="admin-product-form__lable" htmlFor="size-one">Size Five</label>
                            <select 
                            className="admin-product-form__select"
                            name="size-five" 
                            id="size-five">
                                <option hidden >Set size five &#8964;</option>
                                <option value="false">false</option>
                                <option value="6.5">6.5</option>
                                <option value="7">7</option>
                                <option value="7.5">7.5</option>
                                <option value="8">8</option>
                                <option value="8.5">8.5</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>

                        </div>
                    </div>

                    <div className="admin-product-form__form-input-container-six">
                        <div className="admin-product-form__product-category-one">

                            <label className="admin-product-form__lable" htmlFor="category-one">Category One</label>
                            <select 
                            className="admin-product-form__select"
                            name="category-one" 
                            id="category-one">
                                <option hidden >select option &#8964;</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-category-two">

                            <label className="admin-product-form__lable" htmlFor="category-two">Category Two</label>
                            <select 
                            className="admin-product-form__select"
                            name="category-two" 
                            id="category-two">
                                <option hidden >select option &#8964;</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-category-three">

                            <label className="admin-product-form__lable" htmlFor="category-three">Category Thee</label>
                            <select 
                            className="admin-product-form__select"
                            name="category-three" 
                            id="category-three">
                                <option hidden >select option &#8964;</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-category-four">

                            <label className="admin-product-form__lable" htmlFor="category-four">Category Four</label>
                            <select 
                            className="admin-product-form__select"
                            name="category-four" 
                            id="category-four">
                                <option hidden >select option &#8964;</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-category-five">

                            <label className="admin-product-form__lable" htmlFor="category-five">Category Five</label>
                            <select 
                            className="admin-product-form__select"
                            name="category-five" 
                            id="category-five">
                                <option hidden >select option &#8964;</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>

                        </div>
                    </div>

                    <div className="admin-product-form__form-input-container-seven">
                        <div className="admin-product-form__product-interest-for-you">

                            <label className="admin-product-form__lable" htmlFor="interest-for-you">Interest For You</label>
                            <select 
                            className="admin-product-form__select"
                            name="interest-for-you" 
                            id="interest-for-you">
                                <option hidden >select option &#8964;</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-profit">

                            <label className="admin-product-form__lable" htmlFor="Product-profit">Profit</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="product-profit"
                            id="product-profit"
                            placeholder="Enter profit"
                            />

                        </div>
                        <div className="admin-product-form__product-views-quantity">

                            <label className="admin-product-form__lable" htmlFor="Product-profit">Views Quantity</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="product-views-quantity"
                            id="product-views-quantity"
                            placeholder="Enter views quantity"
                            />

                        </div>
                    </div>

                    <p className="admin-product-form__paragraph">All fields are required</p>

                </form>

            </div>

        </div>
    )
};

export default AdminProductForm;