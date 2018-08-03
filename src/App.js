import React, {Component} from 'react'
import './App.css'
import TodoCreate from './Todo/containers/TodoCreate'
import NavBarContainer from './Nav/containers/NavBarContainer'

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBarContainer
                    title='Todo Manager'
                />
                <TodoCreate/>
            </div>
        )
    }
}

export default App
