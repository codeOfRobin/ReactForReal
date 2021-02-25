import React from "react";
import { connect } from "react-redux";

function LoadingIndicator({ loading, children }) {
  if (loading) {
    return <div>Loading...</div>;
  } else {
    return <div>{children} </div>;
  }
}


function mapStateToProps(state) { return {
    loading: state.loading
  };
}

export default connect(mapStateToProps)(LoadingIndicator);