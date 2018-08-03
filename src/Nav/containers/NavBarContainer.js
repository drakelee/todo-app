import React, {Component} from 'react'
import NavBar from '../components/NavBar'
import {withStyles} from '@material-ui/core/styles'

class NavBarContainer extends Component {
    render() {
        const {title} = this.props

        return (
            <NavBar
                styles={styles}
                title={title}
                {...this.props}
            />
        )
    }
}

const styles = {
    root: {
        flexGrow: 1
    },
    flex: {
        flexGrow: 1
    },
    menuBotton: {
        marginLeft: -12,
        marginRight: 20
    }
}

export default withStyles(styles)(NavBarContainer)