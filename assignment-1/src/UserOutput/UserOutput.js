import React from 'react';
import "./UserOutput.css";

const userOutput = (props) => {
    return (
        <div className="user">
            <p>Username: {props.userName}</p>
            <p>Bob</p>
        </div>
)
}

export default userOutput;