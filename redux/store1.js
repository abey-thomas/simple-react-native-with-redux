import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

import {updateUser, addContact} from './actions'

// const thunk = store => next => action => {
//     if(typeof action === 'function') {
//         action(store.dispatch)
//     } else {
//         next(action)
//     }
// }

const store1 = new createStore(reducer, applyMiddleware(thunk))

/*
store.dispatch(updateUser({foo:'foo'}))
store.dispatch(updateUser({bar:'bar'}))
store.dispatch(updateUser({foo:'baz'}))
*/
store1.dispatch(addContact({name:'abey',phone:'1234567890'}))
store1.dispatch(addContact({name:'sonu',phone:'8765434568'}))

export default store1


