import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap';

import Card from '../../components/Card/MainCard';

const BasicNotification = () => {
    const notificationVariants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

    const notiTypes = notificationVariants.map((variant, idx) => (
        <Alert key={idx} variant={variant} className="text-capitalize">
            {variant}
        </Alert>
    ));

    return (
        <React.Fragment>
            <Row  data-bs-theme={'tume'}>
                <Col className="btn-page">

                    <Card title="Notification Types">{notiTypes}</Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default BasicNotification;