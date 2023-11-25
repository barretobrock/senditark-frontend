import React from "react";
import { Row, Col, Card, Table } from 'react-bootstrap';

const AccountsTable = () => {

    const header_titles = [
        {'title': 'Edit'},
        {'title': 'Name'},
        {'title': 'Type'},
        {'title': 'Currency'},
        {'title': 'Hidden?'},
        {'title': 'Delete'}
    ]

    const acct_resp = [
        {
            'id': 1,
            'name': 'hello',
            'type': 'CHECKING',
            'currency': 'USD',
            'is_hidden': false,
            'level': 0
        },
        {
            'id': 12,
            'name': 'hello-sub',
            'type': 'CHECKING',
            'currency': 'USD',
            'is_hidden': true,
            'level': 1
        }
    ]

    return (
        <React.Fragment>
            <Row data-bs-theme={'tume'}>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as={'h3'}>Accounts</Card.Title>
                            <span className={'d-block m-t-5'}>
                                Below are the accounts?
                            </span>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive hover>
                                <thead>
                                    <tr>
                                        {header_titles.map(item => ( <th>{item.title}</th> ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {acct_resp.map(item => (
                                        <tr>
                                            <th scope={'row'}>{item.id}</th>
                                            <td>{item.name}</td>
                                            <td>{item.type}</td>
                                            <td>{item.currency}</td>
                                            <td>{item.is_hidden}</td>
                                            <td>{item.id}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default AccountsTable;