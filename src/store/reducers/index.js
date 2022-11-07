import { combineReducers } from '../../redux'
import counter1 from './counter1'
import counter2 from './counter2'

const reducers = {
  counter1,
  counter2
}

const combinedReducers = combineReducers(reducers);

export default combinedReducers;