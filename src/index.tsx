import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {ConnectedRouter} from "connected-react-router";
import {history, configureStore} from "./store/rootStore";
import AppRoutes from "./routes";

export const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppRoutes/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);
