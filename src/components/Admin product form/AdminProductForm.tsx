import React from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import folder from '../../assets/icons/folder.svg';

const AdminProductForm = () => {

    return (
        <div className="admin-product-form">

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
                        <div className="admin-product-form__product-sku"></div>
                        <div className="admin-product-form__product-type"></div>
                        <div className="admin-product-form__product-name"></div>
                    </div>

                    <div className="admin-product-form__form-input-container-three">
                        <div className="admin-product-form__product-stock"></div>
                        <div className="admin-product-form__product-rate"></div>
                        <div className="admin-product-form__product-price"></div>
                        <div className="admin-product-form__product-old-price"></div>
                        <div className="admin-product-form__product-review-quantity"></div>
                    </div>

                    <div className="admin-product-form__form-input-container-four">
                        <div className="admin-product-form__product-sold-quantity"></div>
                        <div className="admin-product-form__product-main-image">

                            <label className="admin-product-form__lable" htmlFor="main-image">Main Image</label>
                            <input
                            className="admin-product-form__input-image"
                            type="text" 
                            id="main-image"
                            name="main-image"
                            placeholder="Choose a local image"
                            disabled
                            />

                            <label 
                            className="admin-product-form__lable-as-button" 
                            htmlFor="main-image-file">
                                <img className="admin-product-form__folder" src={folder} alt="folder" />
                            </label>

                            <input
                            className="admin-product-form__input-file" 
                            type="file"
                            name="main-image-file"
                            id="main-image-file"
                            accept="image/jpeg"
                            />

                        </div>
                        <div className="admin-product-form__product-thumbnail">

                            <label className="admin-product-form__lable" htmlFor="thumbnail">Thumbnail</label>
                            <input
                            className="admin-product-form__input-image"
                            type="text" 
                            id="thumbnail"
                            name="thumbnail"
                            placeholder="Choose a local image"
                            disabled
                            />
                            
                            <label 
                            className="admin-product-form__lable-as-button" 
                            htmlFor="thumbnail-file">
                                <img className="admin-product-form__folder" src={folder} alt="folder" />
                            </label>

                            <input
                            className="admin-product-form__input-file" 
                            type="file"
                            name="thumbnail-file"
                            id="thumbnail-file"
                            accept="image/jpeg"
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
                        <div className="admin-product-form__product-interest-for-you"></div>
                        <div className="admin-product-form__product-profit"></div>
                        <div className="admin-product-form__product-views-quantity"></div>
                    </div>

                </form>

            </div>

        </div>
    )
};

export default AdminProductForm;