import React, {Component} from 'react'
import TextField from '@material-ui/core/es/TextField/TextField'

class TodoEdit extends Component {
    state = {
        title: ''
    }

    componentDidMount() {
        this.setState({
            ...this.props.todo
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({
                ...this.props.todo
            })
        }
    }

    render() {
        const {title} = this.state
        return (
            <TextField
                helperText='Todo Title'
                onChange={this.handleChange}
                value={title}
            />
        )
    }

    handleChange = event => {
        this.props.onChange({
            ...this.state,
            title: event.target.value
        })
    }
}

export default TodoEdit