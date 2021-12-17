import React from 'react';
import { Row, Col } from 'antd';
import Filter from '../filter';
import Content from '../content';
import LogoImage from '../../img/Logo.svg';
import classes from './app.module.css';

export default function App() {
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
