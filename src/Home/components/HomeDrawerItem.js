import React, {Component} from 'react'
import DrawerItem from '../../Drawer/components/DrawerItem'
import Home from '@material-ui/icons/Home'

class HomeDrawerItem extends Component {
    render() {
        return (
            <DrawerItem icon={<Home/>} primary='Home' to='/'/>
        )
    }
}

export default HomeDrawerItem
