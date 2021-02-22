import {connect} from 'react-redux';
import {FILTER_CHANGED} from './actions';
improt Checkbox from './Checkbox';

function mapStateToProps(state) { return {
    checked: state.filter
  };
}

function mapDispatchToProps(dispatch) { return {
    onChange: filter => {
      dispatch({ type: FILTER_CHANGED, filter });
} };
}