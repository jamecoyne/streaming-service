import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default (props) => {
    return(
        <div className="row">
                <div className="col text-center">
                  <h5 className="text-center">BIG UP</h5>
                  <object
                    className="btn emotesvg"
                    data="bigup.svg"
                    type="image/svg+xml"
              />
            </div>
        </div>
    )
}