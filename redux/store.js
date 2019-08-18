
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

import { updateUser, addContact } from "./actions";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = new createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

/*
const thunk = store => next => action => {
    if(typeof action === 'function') {
        action(store.dispatch)
    } else {
        next(action)
    }
}
*/

/*
store.dispatch(updateUser({foo:'foo'}))
store.dispatch(updateUser({bar:'bar'}))`
store.dispatch(updateUser({foo:'baz'}))
store.dispatch(addContact({name:'abey',phone:'1234567890'}))
store.dispatch(addContact({name:'sonu',phone:'8765434568'}))
*/
