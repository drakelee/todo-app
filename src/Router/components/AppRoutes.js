import React, {Component} from 'react'
import Home from '../../Home/components/Home'
import TodoList from '../../Todo/components/TodoList'
import TodoCreate from '../../Todo/components/TodoCreate'
import {Route} from 'react-router-dom'

class AppRoutes extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Home}/>
                <Route path='/todomanager' component={TodoList}/>
                <Route path='/todo/create' component={TodoCreate}/>
            </div>
        )
    }
}

export default AppRoutes
