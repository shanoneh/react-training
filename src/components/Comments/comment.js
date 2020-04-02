import React from 'react';
import './comment.css';
import Wrapper from '../../wrappers/wrapper';

const Comment = (props) => {
    return(
        // <div className="authors pull-left">
        <Wrapper>
            <h4>commenter</h4>
            <h5>{props.fullName}</h5>
            <h6 className="pull-right">{props.regDate}</h6>
            <p>{props.description}</p>
            <p>{props.children}</p>
        </Wrapper>
        // </div>
    )
}

export default Comment; 