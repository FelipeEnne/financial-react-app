import React, { useState, Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMajorIndexesAPI } from '../actions/index';


const MarketMajorIndexesAPI = ({props, fetchMajorIndexesAPI}) => {
  //const { majorIndexes, status } = props;
  console.log(props);
  useEffect(() => {
    fetchMajorIndexesAPI();
  }, [fetchMajorIndexesAPI]);

  const returnComponent = false ? (
    <div>
      <div className="loader"/>
      <h1>Loading...</h1>
    </div>
  ) : (
    <div className="MajorIndexesAPI">
      {  }
    </div>
  );

  return returnComponent;
};

const mapStateToProps = state => ({
  majorIndexes: state.majorIndexes,
  status: state.status,
});

const mapDispatchToProps = dispatch => ({
  fetchMajorIndexesAPI: () => {
    dispatch(fetchMajorIndexesAPI());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(MarketMajorIndexesAPI);
