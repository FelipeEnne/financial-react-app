import React from 'react';
import { connect } from 'react-redux';


const maketList = ({ market }) => {
  const renderMain = (
    <div className="maketList">
      {market}
    </div>
  );

  return renderMain;
};


const mapStateToProps = state => ({
  market: state.majorIndexes,
});


export default connect(mapStateToProps, null)(maketList);
