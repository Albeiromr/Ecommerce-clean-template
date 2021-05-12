import React, {FC, MouseEvent} from 'react';
import PropTypes from 'prop-types';
import { withRouter} from 'react-router-dom';

interface routerHistory extends History {
    push: (value: string) => {}
}

interface customLinkProps{
    to: string;
    tag: string;
    history:  routerHistory;
    onClick: (event:MouseEvent) => {}
}

const CustomLink:FC<customLinkProps> = ({ history, to, onClick, tag: Tag}) => (
   
    <Tag
        onClick={(event) => {
            onClick(event);
            history.push(to);
        }}
    />
);

CustomLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    onClick: PropTypes.func
};
CustomLink.defaultProps = {
    onClick: () => {}
};
export default withRouter(CustomLink);