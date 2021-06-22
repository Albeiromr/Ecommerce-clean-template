import React, {useState, useContext} from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import checked from '../../assets/icons/checked.svg'
import {useLocation} from 'react-router-dom';
import {ProductGridContext} from '../../context/Product grid context/ProductGridContext';


const IndividualSize = () => {

    const {setShowFilters} = useContext(ProductGridContext);

    const {pathname} = useLocation();

    //temporal state, it must be delated and replaced by a context------------------------------------
    const [selected, setSelected] = useState(false)
    //------------------------------------------------------------------------------------------------

    const handleClick = () => {
        if(!selected) setSelected(true);
        else setSelected(false);
        if(pathname === '/products') window.scrollTo({top: 0, left: 0, behavior: "smooth"});
        setShowFilters(false);
    }

    return (
      <div  className="individual-size">

        <div onClick={handleClick} className={!selected ? "individual-size__checkbox" : "individual-size__checkbox--selected"}>
          {!selected ? null : <img className="individual-size__checked-icon" src={checked} alt="checked" />}
        </div>

        <p onClick={handleClick} className="individual-size__text">Extra Large XL</p>
      </div>
    );
};

export default IndividualSize;