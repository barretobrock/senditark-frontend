import React, {useEffect, useState} from "react";
import {Link}  from 'react-router-dom';
import {Row, Col, Card, Table} from 'react-bootstrap';
import {Briefcase, Check, CheckCircle, Delete, Edit, X} from "react-feather";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { formatStr } from "../../utils/formatters";
import {api} from "../../config/constant";




const AccountTableRow = (props) => {

    const typeToColorMap = {
        ASSET: '#3b75c2',
        EQUITY: '#7030e5',
        LIABILITY: '#f4c22b',
        EXPENSE: '#f66f66',
        INCOME: '#1de9b6'
    }

    return (
        <tr key={props.item.account_id} className={props.item.is_hidden ? 'text-muted' : ''}>
            <th scope={'row'}>
                <OverlayTrigger overlay={<Tooltip>{props.item.account_type}</Tooltip>} placement={'top'} delay={{show: 250, hide: 400}}>
                    <Briefcase color={typeToColorMap[props.item.account_type]} size={20} />
                </OverlayTrigger>
            </th>
            <td align={'left'}>
                <Link to={'/view/account/' + props.item.account_id}>
                    <span style={{ paddingLeft: props.item.level * 10 + 'px' }}>{props.item.level > 0 ? "└ " : ""}</span>
                    <span>{props.item.name}</span>
                </Link>
            </td>
            <td align={'right'} className={'currency-symbol'}>{props.item.account_currency === 'USD' ? '$' : '€'}</td>
            <td align={'right'}>{formatStr(props.item.balance, 'number')}</td>
            <td align={'center'}>{props.item.is_active ? <Check color={'green'} size={20}/> : <X color={'red'} size={20} /> }</td>
            <td>{props.item.last_reconciled}</td>
            <td align={'center'}>
                <OverlayTrigger overlay={<Tooltip>Reconcile</Tooltip>} placement={'top'} delay={{show: 250, hide: 400}}>
                    <Link to={'/forms/account-reconcile/' + props.item.account_id}>
                        <CheckCircle size={20} color={'#f4c22b'}/>
                    </Link>
                </OverlayTrigger>
            </td>
            <td>
                <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>} placement={'top'} delay={{show: 250, hide: 400}}>
                    <Link to={'/forms/account-edit/' + props.item.account_id}>
                        <Edit size={20} color={'#3b75c2'}/>
                    </Link>
                </OverlayTrigger>
            </td>
            {/*TODO /account/<id>/delete link -- maybe confirm before?*/}
            <td>
                <OverlayTrigger overlay={<Tooltip>Delete</Tooltip>} placement={'top'} delay={{show: 250, hide: 400}}>
                    <Link to={'/forms/account-delete/' + props.item.account_id}>
                        <Delete size={20} color={'red'}/>
                    </Link>
                </OverlayTrigger>
            </td>
            <td style={{fontSize: '12px'}} className={'font-monospace'}>{props.item.description}</td>
        </tr>
    );
}

const AccountsTable = () => {

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                const response = await api.get('/account/list')
                setAccounts(response.data);
            } catch (e) {
                console.log(e);
            }
        };

        fetchAccounts();
    }, []);

    return (
        <React.Fragment>
            <Row data-bs-theme={'tume'}>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as={'h3'}>Accounts</Card.Title>
                            <span className={'d-block m-t-6'}>
                                Below are the accounts
                            </span>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive hover size={'sm'}>
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>Name</th>
                                        <th></th>
                                        <th>Balance</th>
                                        <th>Active?</th>
                                        <th>Last Reconciled</th>
                                        <th>Reconcile</th>
                                        <th></th>
                                        <th></th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {accounts.map((item, idx) => (
                                        <AccountTableRow item={item}/>
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