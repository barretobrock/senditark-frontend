import React, {useEffect, useReducer, useState} from "react";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import InlineText from "../../../components/FormItem/InlineText";
import SelectOne from "../../../components/FormItem/SelectOne";
import CheckBox from "../../../components/FormItem/CheckBox";
import {api} from "../../../config/constant";
import {useNavigate} from "react-router-dom";
import ErrorNotification from "../../../components/Widgets/ErrorNotification";


const AccountForm = (props) => {
    const initialState = {
        accountName: props.accountName ? props.accountName : '',
        accountType: props.accountType ? props.accountType : '',
        accountDesc: props.accountDesc ? props.accountDesc : '',
        accountCurrency: props.accountCurrency ? props.accountCurrency : 'USD',
        accountParentId: props.accountParentId ? props.accountParentId : null,
        accountIsHidden: props.accountIsHidden ? props.accountIsHidden : false,
        accountIsActive: props.accountIsActive ? props.accountIsActive : true,
    }
    const navigate = useNavigate();

    const accountFormReducer = (state={}, action) => {
        if (Object.keys(initialState).includes(action.name)) {
            // Change state for item
            console.log('Changing state of item ', action.name, ' to value ', action.value);
            return {
                ...state,
                [action.name]: action.value
            };
        } else {
            return state
        }
    }

    const [state, dispatch] = useReducer(accountFormReducer, initialState);
    const [acctList, setAcctList] = useState([])
    const { accountName, accountType, accountDesc, accountCurrency, accountIsHidden, accountIsActive } = state;
    const [validated, setValidated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [errInfo, setErrInfo] = useState({});

    useEffect(() => {
        const fetchAccountsList = async () => {
            try {
                const response = await api.get('/account/list')
                const data = [
                    {name: 'Choose an optional parent account...', value: ''}
                ];
                response.data.map(item => {
                    data.push({name: item.name, value: item.account_id});
                })
                setAcctList(data);
            } catch (e) {
                console.log(e);
            }
        };

        fetchAccountsList();
    }, []);

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            api.post('/account/add', state)
                .then(function (response) {
                    console.log(response);
                    navigate('/table/account');
                })
                .catch(function (error) {
                    console.log(error);
                    console.log(error.response);
                    // TODO: error notification
                    setErrInfo({
                        code: error.code,
                        name: error.name,
                        message: error.message,
                        data: error.response.data.message
                    })
                    setShowAlert(true)
                });

            // console.log('Form submitted!');
            // console.log(JSON.stringify(state))
        }

        setValidated(true);
        console.log('Checking form\'s validity: ' + form.checkValidity());
        console.log('Check validated: ' + validated)

    };

    const handleChange = event => {
        const isCheckbox = event.target.type === 'checkbox';
        console.log('Changing ' + event.target.name + ' to ' + event.target.value + '. Type: ' + event.target.type);
        dispatch({
            type: event.target.name,
            name: event.target.name,
            value: isCheckbox ? event.target.checked : event.target.value
        });
    }

    return (
        <React.Fragment>
            <Row data-bs-theme={'tume'}>
                <Col sm={12}>
                    <ErrorNotification showAlert={showAlert} errInfo={errInfo} onCloseButton={() => setShowAlert(false)}/>
                    <Card>
                        <Card.Header>
                            <Card.Title as='h5'>New Account Form</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className={'mb-3'}>
                                    <InlineText
                                        isRequired={true}
                                        label={'Account Name'}
                                        name={'accountName'}
                                        placeholder={'Account Name'}
                                        defaultValue={accountName}
                                        invalidMessage={'Please enter an account name.'}
                                        onChange={handleChange}
                                    />
                                    <SelectOne
                                        isRequired={true}
                                        label={'Account Type'}
                                        name={'accountType'}
                                        defaultValue={accountType}
                                        invalidMessage={'Please select an account type.'}
                                        onChange={handleChange}
                                        options={[
                                            {name: 'Choose account type...', value: ''},
                                            {name: 'Asset', value: 'ASSET'},
                                            {name: 'Equity', value: 'EQUITY'},
                                            {name: 'Expense', value: 'EXPENSE'},
                                            {name: 'Income', value: 'INCOME'},
                                            {name: 'Liability', value: 'LIABILITY'}
                                        ]}
                                        />
                                    <InlineText
                                        label={'Account Description'}
                                        name={'accountDesc'}
                                        placeholder="Something about the account"
                                        defaultValue={accountDesc}
                                        onChange={handleChange}
                                    />
                                </Row>
                                <Row className="mb-3">
                                    <SelectOne
                                        isRequired={true}
                                        label={'Account Currency'}
                                        name={'accountCurrency'}
                                        defaultValue={accountCurrency}
                                        onChange={handleChange}
                                        options={[
                                            {name: 'USD', value: 'USD'},
                                            {name: 'EUR', value: 'EUR'},
                                        ]}
                                    />
                                    <CheckBox
                                       label={'Active?'}
                                       name={'accountIsActive'}
                                       defaultChecked={accountIsActive}
                                       onChange={handleChange}
                                    />
                                    <CheckBox
                                        label={'Hidden?'}
                                        name={'accountIsHidden'}
                                        defaultChecked={accountIsHidden}
                                        onChange={handleChange}
                                    />
                                    <SelectOne
                                        isRequired={false}
                                        label={'Account Parent'}
                                        name={'accountParentId'}
                                        defaultValue={2}
                                        onChange={handleChange}
                                        options={acctList}
                                    />
                                </Row>
                                <Button type="submit">Submit</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default AccountForm;