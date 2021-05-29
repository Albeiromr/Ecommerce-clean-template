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

                            <label className="admin-product-form__lable" htmlFor="productDescription">Product Description</label>

                            <textarea 
                            className="admin-product-form__text-area"
                            name="productDescription"
                            id="productDescription"
                            cols={20} 
                            rows={5}
                            placeholder="Enter product description">
                            </textarea>

                        </div>
                    </div>

                    <div className="admin-product-form__form-input-container-two">
                        <div className="admin-product-form__product-sku">

                            <label className="admin-product-form__lable" htmlFor="sku">Product SKU</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="sku"
                            id="sku"
                            placeholder="Enter SKU"
                            />

                        </div>
                        <div className="admin-product-form__product-type">

                            <label className="admin-product-form__lable" htmlFor="productType">Product Type</label>
                            <select 
                            className="admin-product-form__select"
                            name="productType" 
                            id="productType">
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

                            <label className="admin-product-form__lable" htmlFor="productName">Product Name</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="productName"
                            id="productName"
                            placeholder="Enter product name"
                            />

                        </div>
                    </div>

                    <div className="admin-product-form__form-input-container-three">
                        <div className="admin-product-form__product-stock">

                            <label className="admin-product-form__lable" htmlFor="productStock">Stock</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="productStock"
                            id="productStock"
                            placeholder="Enter stock"
                            />

                        </div>
                        <div className="admin-product-form__product-rate">

                            <label className="admin-product-form__lable" htmlFor="productRate">Rate</label>
                            <select 
                            className="admin-product-form__select"
                            name="productRate" 
                            id="productRate">
                                <option hidden >select option &#8964;</option>
                                <option value={5}>5</option>
                                <option value={4}>4</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-price">

                            <label className="admin-product-form__lable" htmlFor="productPrice">Price</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="productPrice"
                            id="productPrice"
                            placeholder="Enter price"
                            />

                        </div>
                        <div className="admin-product-form__product-old-price">

                            <label className="admin-product-form__lable" htmlFor="productOldPrice">Old Price</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="productOldPrice"
                            id="productOldPrice"
                            placeholder="Enter old price"
                            />

                        </div>
                        <div className="admin-product-form__product-review-quantity">

                            <label className="admin-product-form__lable" htmlFor="reviewQuantity">Review Quantity</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="reviewQuantity"
                            id="reviewQuantity"
                            placeholder="Enter review quantity"
                            />

                        </div>
                    </div>

                    <div className="admin-product-form__form-input-container-four">
                        <div className="admin-product-form__product-sold-quantity">

                            <label className="admin-product-form__lable" htmlFor="soldQuantity">Sold Quantity</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="soldQuantity"
                            id="soldQuantity"
                            placeholder="Enter sold quantity"
                            />

                        </div>
                        <div className="admin-product-form__product-main-image">

                            <label className="admin-product-form__lable" htmlFor="productImage">Main Image</label>
                            <input
                            className="admin-product-form__input"
                            type="text" 
                            id="productImage"
                            name="productImage"
                            placeholder="Main image file name"
                            />

                        </div>
                        <div className="admin-product-form__product-thumbnail">

                            <label className="admin-product-form__lable" htmlFor="productThumbnail">Thumbnail</label>
                            <input
                            className="admin-product-form__input"
                            type="text" 
                            id="productThumbnail"
                            name="productThumbnail"
                            placeholder="Thumbnail image file name"
                            />

                        </div>
                    </div>

                    <div className="admin-product-form__form-input-container-five">
                        <div className="admin-product-form__product-size-one">

                            <label className="admin-product-form__lable" htmlFor="sizeOne">Size One</label>
                            <select 
                            className="admin-product-form__select"
                            name="sizeOne" 
                            id="sizeOne">
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

                            <label className="admin-product-form__lable" htmlFor="sizeTwo">Size Two</label>
                            <select 
                            className="admin-product-form__select"
                            name="sizeTwo" 
                            id="sizeTwo">
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

                            <label className="admin-product-form__lable" htmlFor="sizeThree">Size Three</label>
                            <select 
                            className="admin-product-form__select"
                            name="sizeThree"
                            id="sizeThree">
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

                            <label className="admin-product-form__lable" htmlFor="sizeFour">Size Four</label>
                            <select 
                            className="admin-product-form__select"
                            name="sizeFour" 
                            id="sizeFour">
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

                            <label className="admin-product-form__lable" htmlFor="sizeFive">Size Five</label>
                            <select 
                            className="admin-product-form__select"
                            name="sizeFive" 
                            id="sizeFive">
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

                            <label className="admin-product-form__lable" htmlFor="categoryOne">Category One</label>
                            <select 
                            className="admin-product-form__select"
                            name="categoryOne" 
                            id="categoryOne">
                                <option hidden >select option &#8964;</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-category-two">

                            <label className="admin-product-form__lable" htmlFor="categoryTwo">Category Two</label>
                            <select 
                            className="admin-product-form__select"
                            name="categoryTwo" 
                            id="categoryTwo">
                                <option hidden >select option &#8964;</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-category-three">

                            <label className="admin-product-form__lable" htmlFor="categoryThree">Category Thee</label>
                            <select 
                            className="admin-product-form__select"
                            name="categoryThree" 
                            id="categoryThree">
                                <option hidden >select option &#8964;</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-category-four">

                            <label className="admin-product-form__lable" htmlFor="categoryFour">Category Four</label>
                            <select 
                            className="admin-product-form__select"
                            name="categoryFour" 
                            id="categoryFour">
                                <option hidden >select option &#8964;</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-category-five">

                            <label className="admin-product-form__lable" htmlFor="categoryFive">Category Five</label>
                            <select 
                            className="admin-product-form__select"
                            name="categoryFive" 
                            id="categoryFive">
                                <option hidden >select option &#8964;</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>

                        </div>
                    </div>

                    <div className="admin-product-form__form-input-container-seven">
                        <div className="admin-product-form__product-interest-for-you">

                            <label className="admin-product-form__lable" htmlFor="interestForYou">Interest For You</label>
                            <select 
                            className="admin-product-form__select"
                            name="interestForYou" 
                            id="interestForYou">
                                <option hidden >select option &#8964;</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>

                        </div>
                        <div className="admin-product-form__product-profit">

                            <label className="admin-product-form__lable" htmlFor="productProfit">Profit</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="productProfit"
                            id="productProfit"
                            placeholder="Enter profit"
                            />

                        </div>
                        <div className="admin-product-form__product-views-quantity">

                            <label className="admin-product-form__lable" htmlFor="productViews">Views Quantity</label>
                            <input 
                            className="admin-product-form__input"
                            type="text"
                            name="productViews"
                            id="productViews"
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