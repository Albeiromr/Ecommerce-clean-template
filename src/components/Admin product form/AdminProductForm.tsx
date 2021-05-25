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
                        <div className="admin-product-form__product-description"></div>
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
                            />

                        </div>
                    </div>

                    <div className="admin-product-form__form-input-container-five">
                        <div className="admin-product-form__product-size-one"></div>
                        <div className="admin-product-form__product-size-two"></div>
                        <div className="admin-product-form__product-size-three"></div>
                        <div className="admin-product-form__product-size-four"></div>
                        <div className="admin-product-form__product-size-five"></div>
                    </div>

                    <div className="admin-product-form__form-input-container-six">
                        <div className="admin-product-form__product-category-one"></div>
                        <div className="admin-product-form__product-category-two"></div>
                        <div className="admin-product-form__product-category-three"></div>
                        <div className="admin-product-form__product-category-four"></div>
                        <div className="admin-product-form__product-category-five"></div>
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