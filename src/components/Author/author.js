import React from 'react';
import './author.css';
import Wrapper from '../../wrappers/wrapper';
// import WithClass from '../../wrappers/withClass';
import propTypes from 'prop-types';

const Author = (props) => {
    return (
    // <div className="authors pull-right">
    <Wrapper classes="authors pull-right">
        <h2>{props.fullName}</h2>
        <p>{props.children}</p>
        <button className="btn btn-success align" onClick={props.click}>تغییر اسامی</button>
        <div className="margin-top">
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    </Wrapper>
    // </div>
    )
};

Author.propTypes = {
    fullName: propTypes.string,
    click: propTypes.func,
    changed: propTypes.func,
}

export default Author;



// import React from 'react';
// import Author from './author';

// const authors = (props) => props.authors.map((author , index) => {
//     return <Author
//             fullName={author.fullname}
//             regDate={author.regDate}
//             click={props.clicked(index)}
//             changed={(event)=>{props.changed(event.author.fullName)}}
//             key={index}
//         ></Author>
// })
// export default authors;

