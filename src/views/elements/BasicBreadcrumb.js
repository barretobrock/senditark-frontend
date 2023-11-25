import React from 'react';
import { Row, Col, Breadcrumb, Pagination } from 'react-bootstrap';
import { Home } from "react-feather";

import Card from '../../components/Card/MainCard';

const BasicBreadcrumbPagination = () => {
    let active = 3;
    let disabled = 4;
    let items = [];
    let activeItems = [];
    let disabledItems = [];

    for (let number = 1; number <= 5; number++) {
        items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
    }

    for (let number = 1; number <= 5; number++) {
        activeItems.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>
        );
    }

    for (let number = 1; number <= 5; number++) {
        disabledItems.push(
            <Pagination.Item key={number} disabled={number === disabled}>
                {number}
            </Pagination.Item>
        );
    }

    return (
        <React.Fragment>
            <Row data-bs-theme={'tume'}>
                <Col md={6}>
                    <Card title="Breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#" active>Home</Breadcrumb.Item>
                        </Breadcrumb>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">
                                Home
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="#" active>
                                Library
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">
                                Home
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="#">
                                Library
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Data</Breadcrumb.Item>
                        </Breadcrumb>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card title="Breadcrumb Icon">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#" active>
                                <Home size={16} />
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">
                                <Home size={16} />
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="#" active>
                                Library
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">
                                <Home size={16} />
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="#">
                                Library
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Data</Breadcrumb.Item>
                        </Breadcrumb>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default BasicBreadcrumbPagination;