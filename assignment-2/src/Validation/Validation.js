import React from 'react';

const validation = (props) => {
    let validationMessage = 'Text long enough';

    if (props.inputLength <= 5) {
        validationMessage = <p>Text too short!</p>
    }
    return (
        <div>
        <p>{validationMessage}</p>
        </div>
    );
};

export default validation;