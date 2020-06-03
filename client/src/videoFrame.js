import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default (props) => {
    return(
        <div className="col">
            <h5>{props.username}</h5>
            <video className="videoplayer" width="100%" height="100%" />
        </div>
    )
}