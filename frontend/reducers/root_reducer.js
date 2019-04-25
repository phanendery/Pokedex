import { combineReducers } from "redux";
import { entitiesReducer } from "frontend/reducers/entities_reducer.js";

const rootReducer = combineReducers({
  entities: entitiesReducer
})

export default rootReducer;