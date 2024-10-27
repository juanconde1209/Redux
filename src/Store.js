import { createStore } from 'redux';
import counterReducer from './Counterreducer';

const store = createStore(counterReducer);

export default store;