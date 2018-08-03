import React, {Component} from 'react'
import Button from '@material-ui/core/Button/Button'
import Input from '@material-ui/core/Input/Input'

class TodoCreate extends Component {
    state = {
        title: ''
    }

    render() {
        const {title} = this.state
        return (
            <form>
                <Input
                    id='title'
                    placeholder='Todo Title'
                    onChange={this.handleChange('title')}
                    value={title}
                />
                <Button
                    onClick={this.handleClick}
                >
                    <div>Add Todo</div>
                </Button>
            </form>
        )
    }

    handleChange = field => event => {
        this.setState({
            ...this.state,
            [field]: event.target.value
        })
    }

    handleClick = () => {
        alert(this.state.title)
    }
}

export default TodoCreate