import React from 'react'
import { connect } from "react-redux";
import Checkbox from "./Checkbox";
import { FAVORITED, UNFAVORITED } from "./actions";

function MovieBox({ movie, favorite, onFavorite, onUnfavorite }) {
  function onChange(checked) {
    if (checked) {
      onFavorite(movie.title);
    } else {
      onUnfavorite(movie.title);
    }
  }
  return (
    <div className="h4 mt3 pa3 flex flex-column justify-between ba b--dashed">
      <h3 className="mt0 mb3">{movie.title}</h3>{" "}
      <Checkbox
        name="addToFavorite"
        id="addToFavorite"
        label="Favorite"
        checked={favorite}
        onChange={onChange}
      />{" "}
    </div>
  );
}

function mapStateToProps(state, ownProps) { return {
    favorite: state.favorites.includes(ownProps.movie.title)
  };
}

function mapDispatchToProps(dispatch) { return {
    onFavorite: movieID => dispatch({ type: FAVORITED, movieID }),
    onUnfavorite: movieID => dispatch({ type: UNFAVORITED, movieID })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieBox)