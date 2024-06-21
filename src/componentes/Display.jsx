import { useState } from "react";

function States(props) {

    return (
        <>
            <div style={{ backgroundColor: 'gray', width: '100%', height: '30px', color: 'white' }}>
                <span>{props.display}</span>
            </div>
        </>
    )
}

export default States;