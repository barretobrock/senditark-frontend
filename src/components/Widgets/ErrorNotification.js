import {Alert, AlertHeading, Button} from "react-bootstrap";
import React, {useState} from "react";


const ErrorNotification = (props) => {

    return (
        <Alert show={props.showAlert} variant={'danger'}>
            <AlertHeading>{props.errInfo.name}: {props.errInfo.code}</AlertHeading>
            <p>{props.errInfo.message}</p>
            <p>{props.errInfo.data}</p>
            <hr />
            <div className={'d-flex justify-content-end'}>
                <Button size={'sm'} onClick={props.onCloseButton} variant={'outline-danger'}>Close</Button>
            </div>
        </Alert>
    )
}

export default ErrorNotification;