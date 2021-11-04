import React from "react";
import Button from '@mui/material/Button';


export default function CustomButton(props) {

    return (
        <div className="displayCardButton">
            {props.color === 'green' ?
                <Button variant="contained" color="success" onClick={props.action}>
                    {props.label}
                </Button> : null}
            {props.color === 'blue' ?
                <Button variant="contained" color="primary" onClick={props.action}>
                    {props.label}
                </Button> : null}
        </div>
    );
}
