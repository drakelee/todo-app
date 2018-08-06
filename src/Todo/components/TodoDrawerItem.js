import React, {Component} from 'react'
import DrawerItem from '../../Drawer/components/DrawerItem'
import Assignment from '@material-ui/icons/Assignment'

class TodoDrawerItem extends Component {
    render() {
        return (
            <DrawerItem icon={<Assignment/>} primary='Todo Manager' to='/todomanager'/>
        )
    }
}

export default TodoDrawerItem
