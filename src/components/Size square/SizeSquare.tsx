import React, { FC } from 'react';
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {componentProps} from './types';

const SizeSquare:FC<componentProps> = (props) => {

    return(
        <div className="size-square">
            <p className="size-square__name">{props.name}</p>
        </div>
    )
}

export default SizeSquare;