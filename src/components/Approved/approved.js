import React from 'react';
import './approved.css'

const Approved = (props) => {
    return(
    <div>
        <div className="btn btn-sm btn-success">تایید</div>
        <div className="btn btn-sm btn-danger">رد</div>
        <div>{props.children}</div>
    </div>
    )
}

export default Approved;