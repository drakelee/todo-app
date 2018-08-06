import React, {Component} from 'react'
import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'

class DrawerItem extends Component {
    render() {
        const {classes, icon, primary, to} = this.props
        return (
            <Link to={to} className={classes.link}>
                <ListItem button>
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={primary}/>
                </ListItem>
            </Link>

        )
    }
}

const styles = {
    link: {
        textDecoration: 'none'
    }
}

export default withStyles(styles)(DrawerItem)
