import {createStore, applyMiddleware} from 'redux';
import { rootReducer } from "frontend/reducers/root_reducer.js";
import { logger } from 'redux-logger';
import thunk from '../middleware/thunk';

const configureStore = () => (
  createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  )
);


