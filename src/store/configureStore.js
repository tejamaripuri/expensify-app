import { createStore, combineReducers } from 'redux';
import expesesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    // Store Creation
    const store = createStore(
        combineReducers({
            expenses: expesesReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}



