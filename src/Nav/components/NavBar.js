import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import Typography from '@material-ui/core/Typography/Typography'
import IconButton from '@material-ui/core/IconButton/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

class NavBar extends Component {
    render() {
        const {title, classes} = this.props
        return (
            <div className={classes.root}>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color='inherit'>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant='title' color='inherit' className={classes.flex}>
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default NavBar
