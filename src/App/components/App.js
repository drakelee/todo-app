import React, {Component} from 'react'
import '../../App.css'
import NavBarContainer from '../../Nav/containers/NavBarContainer'
import AppDrawer from '../../Drawer/containers/AppDrawerContainer'
import {withStyles} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import AppRoutes from '../../Router/components/AppRoutes'
import {BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
    render() {
        const {classes} = this.props
        return (
            <Router>
                <div className={classes.root}>
                    <NavBarContainer
                        title='Todo Manager'
                    />
                    <AppDrawer/>
                    <Toolbar>
                        <main className={classes.content}>
                            <AppRoutes/>
                        </main>
                    </Toolbar>
                </div>
            </Router>
        )
    }
}

const styles = {
    root: {
        height: '100%',
        width: '100%',
        position: 'relative',
        display: 'flex',
        zIndex: 1,
        overflow: 'hidden',
    },
    content: {
        flexGrow: 1
    }
}

export default withStyles(styles)(App)
