import React, {Component} from 'react'
import Drawer from '@material-ui/core/Drawer/Drawer'
import List from '@material-ui/core/List/List'
import TodoDrawerItem from '../../Todo/components/TodoDrawerItem'
import HomeDrawerItem from '../../Home/components/HomeDrawerItem'

class AppDrawer extends Component {
    render() {
        const {classes} = this.props

        return (
            <Drawer
                variant='permanent'
                anchor='left'
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <List>
                    <HomeDrawerItem/>
                    <TodoDrawerItem/>
                </List>
            </Drawer>
        )
    }
}

export default AppDrawer