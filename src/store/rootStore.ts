import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import rootSaga from "./rootSaga";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const router = routerMiddleware(history);

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const configureStore = (initialState = {}) => {
    const store = createStore(
        rootReducer(history),
        initialState,
        composeEnhancers(applyMiddleware(router, sagaMiddleware))
    );
    sagaMiddleware.run(rootSaga);
    return store;
};
