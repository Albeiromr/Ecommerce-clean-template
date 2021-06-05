import React,{useContext, useEffect, useState} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import doubleArrowLeft from '../../assets/icons/doubleArrowLeft.svg';
import doubleArrowRight from '../../assets/icons/doubleArrowRight.svg';
import AdminPageNumber from '../Admin page number/AdminPageNumber';
import {AdminDashboardContext} from '../../context/Admin dashboard context/AdminDashboardContext';


const AdminPaginationProducts = () => {

    const {productFamily} = useContext(AdminDashboardContext);
    type paginationNumber = {number: number};
    const [pages, setPages] = useState<paginationNumber[]>([]);
    console.log(pages)
    

    //extracting how many pages must the paginator shows for every product fámily
    useEffect(() => {
        async function getTotalPages() {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/products/familyTotal/${productFamily}`);
            let responseToJson = await response.json();
            let extractedNumber = await Object.values(responseToJson[0])[0];
            if (typeof extractedNumber === "number"){
                let numberToPages:number = await Math.ceil(extractedNumber / 7);
                let temporalArray:paginationNumber[] = [];
                for(let i = 1; i <= numberToPages; i++){
                    temporalArray.push({number: i});
                };
                setPages(temporalArray);
            };
        };
        getTotalPages();
    }, [productFamily]);


    


    return (
        <div className="admin-pagination">
            <div className="admin-pagination__subcontainer">
                <p className="admin-pagination__total-products">Showing 10 from 160 Products</p>
                <div className="admin-pagination__pagination-container">
                    
                    <div className="admin-pagination__back-button">
                        <img className="admin-pagination__icon-left" src={doubleArrowLeft} alt="previous" />
                        <p className="admin-pagination__back-button-text">Previous</p>
                    </div>

                    <div className="admin-pagination__numbers-container">
                        {pages.map(pageNumber => <AdminPageNumber number={pageNumber.number}/>)}
                    </div>

                    <div className="admin-pagination__next-button">
                        <p className="admin-pagination__next-button-text">Next</p>
                        <img className="admin-pagination__icon-right" src={doubleArrowRight} alt="previous" />
                    </div>
                </div>
            </div>
        </div>
    )
};


export default AdminPaginationProducts;