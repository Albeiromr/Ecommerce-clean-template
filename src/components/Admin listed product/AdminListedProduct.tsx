import React, {useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {AdminDashboardContext} from '../../context/Admin dashboard context/AdminDashboardContext';
import deleteIcon from '../../assets/icons/deleteIcon.svg';
import pencil from '../../assets/icons/pencil.svg';

const AdminListedProduct = () => {

    const {setAdminRoute} = useContext(AdminDashboardContext);

    const handleDeleteClick = () => {

    };
    const handleEditClick = () => {
        setAdminRoute("product-form");
    };

    return (
        <article className="admin-listed-product">

            <div className="admin-listed-product__image-container">
                {/* <img className="admin-listed-product__image" src={test} alt="product" /> */}
            </div>

            <p className="admin-listed-product__textOne">8907SNE78976</p>
            <p className="admin-listed-product__textTwo">Adidas AH80</p>
            <p className="admin-listed-product__textThree">$89.89</p>
            <p className="admin-listed-product__textFour">$25.78</p>
            <p className="admin-listed-product__textFive">18</p>

            <div className="admin-listed-product__icon-container">

                <img
                onClick={handleDeleteClick}
                className="admin-listed-product__icon" 
                src={deleteIcon} alt="delete" />

                <img 
                onClick={handleEditClick}
                className="admin-listed-product__icon" 
                src={pencil} alt="edit" />

            </div>

        </article>
    )
};

export default AdminListedProduct;