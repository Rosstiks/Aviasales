import React from 'react';
import { Row, Col } from 'antd';
import Filter from '../filter';
import LogoImage from '../../img/Logo.svg';
import classes from './app.module.css';
import ResultsSort from '../results-sort';
import ResultsList from '../results-list';

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
          <ResultsSort />
          <ResultsList />
        </Col>
      </Row>
    </div>
  );
}
