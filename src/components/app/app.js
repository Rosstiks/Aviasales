import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import ApiService from '../../services/api-service';
import Filter from '../filter';
import Content from '../content';
import LogoImage from '../../img/Logo.svg';
import classes from './app.module.css';

export default function App() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const apiService = new ApiService();
  useEffect(() => {
    apiService.getSearchId().then((id) => apiService.getTicketsPack(id));
  }, [apiService]);

  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <img src={LogoImage} alt="logo" className={classes.logo} />
      </div>
      <Row gutter={{ xs: 0, md: 24 }}>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <Filter />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 16 }}>
          <Content />
        </Col>
      </Row>
    </div>
  );
}
