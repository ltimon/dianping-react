/**
 * Created by litong on 2017/6/6.
 */
import React from 'react'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import RouterMap from './router'

let store = createStore(reducers,applyMiddleware(thunk),window.devToolsExtension ? window.devToolsExtension() : undefined)

class App extends React.Component{
    render() {
        return (
            <Provider store = { store }>
                <RouterMap/>
            </Provider>    
        )
    }
}

export default App