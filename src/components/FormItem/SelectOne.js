import {Col, Form} from "react-bootstrap";
import React from "react";

import {randomId} from "../../utils/random";


const SelectOne = (props) => {
    return (
        <Form.Group as={Col} md={'4'} controlId={randomId('select-one-', 5)} className={props.isRequired ? 'required' : ''}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                required={props.isRequired}
                as={'select'}
                type={'select'}
                name={props.name}
                defaultValue={props.defaultValue}
                onChange={props.onChange}
                onClick={props.onClick}
            >
                {props.options.map((item) => (
                    <option disabled={item.disabled} value={item.value}>{item.name}</option>
                ))}
            </Form.Control>
            <Form.Control.Feedback type={'invalid'}>{props.invalidMessage}</Form.Control.Feedback>
        </Form.Group>
    )
}

export default SelectOne;