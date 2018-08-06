import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import AppDrawer from '../components/AppDrawer'

class AppDrawerContainer extends Component {
    render() {
        const {classes} = this.props
        return (
            <AppDrawer
                classes={classes}
            />
        )
    }
}

const DRAWER_WIDTH = 240
const styles = {
    drawerPaper: {
        position: 'relative',
        width: DRAWER_WIDTH
    }
}

export default withStyles(styles)(AppDrawerContainer)
