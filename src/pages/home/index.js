import React from 'react';
import { connect } from 'react-redux';

const Home = () => (
  <div className="Home">
    <h2 className="text-center">this is Home</h2>
  </div>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const HomeRedux = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeRedux;
