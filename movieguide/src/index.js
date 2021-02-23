import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { requestMovies } from "./movieApi";
import { MOVIES_LOADED } from "./actions";
import Filter from "./Filter";

requestMovies().then((movies) =>
  store.dispatch({ type: MOVIES_LOADED, movies })
);

ReactDOM.render(
    <Provider store = {store}>
        <main className="ph6 pv4">
            <h1 className="mt0">Programme</h1>
            <Filter name="filter" id="fitler" label="Just favorites" />
        </main>
    </Provider>,
    document.getElementById('app')
)
