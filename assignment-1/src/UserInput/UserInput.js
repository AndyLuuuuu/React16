import React from 'react';

const userInput = (props) => {
    const style= {
        margin: "16px 0",
        "box-shadow": "0px 1px 1px #eee"
    }
    return <input type="text" style={style} onChange={props.changed} value={props.currentName}/>
}

export default userInput;