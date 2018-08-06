import React, {Component} from 'react'
import NavBar from '../components/NavBar'
import {withStyles} from '@material-ui/core/styles'

class NavBarContainer extends Component {
    render() {
        const {title} = this.props

        return (
            <NavBar
                title={title}
                {...this.props}
            />
        )
    }
}

const DRAWER_WIDTH = 240
const styles = {
    appBar: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: DRAWER_WIDTH
    }
}

export default withStyles(styles)(NavBarContainer)