import React from 'react';
import './approved.css';
import Wrapper from '../../wrappers/wrapper';

const Approved = (props) => {
    return(
    // <div>
    <Wrapper>
        <div className="btn btn-sm btn-success">تایید</div>
        <div className="btn btn-sm btn-danger">رد</div>
        <div>{props.children}</div>
    </Wrapper>
    // </div>
    )
}

export default Approved;