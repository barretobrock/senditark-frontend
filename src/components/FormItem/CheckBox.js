import {Col, Form} from "react-bootstrap";
import React from "react";

import {randomId} from "../../utils/random";


const CheckBox = (props) => {
    return (
        <Form.Group as={Col} md={'2'} controlId={randomId('inline-text-', 5)} className={props.isRequired ? 'required' : ''}>
            <Form.Check
                required={props.isRequired}
                label={props.label}
                name={props.name}
                defaultChecked={props.defaultChecked}
                onChange={props.onChange}
            />
            <Form.Control.Feedback type={'invalid'}>{props.invalidMessage}</Form.Control.Feedback>
        </Form.Group>
    )
}

export default CheckBox;