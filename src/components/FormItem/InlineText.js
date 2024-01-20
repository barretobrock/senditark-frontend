import {Col, Form} from "react-bootstrap";
import React from "react";

import {randomId} from "../../utils/random";


const InlineText = (props) => {
    return (
        <Form.Group as={Col} md={'4'} controlId={randomId('inline-text-', 5)} className={props.isRequired ? 'required' : ''}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                required={props.isRequired}
                type={'text'}
                name={props.name}
                placeholder={props.placeholder}
                defaultValue={props.value}
                onChange={props.onChange}
            />
            <Form.Control.Feedback type={'invalid'}>{props.invalidMessage}</Form.Control.Feedback>
        </Form.Group>
    )
}

export default InlineText;