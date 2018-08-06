import React, {Component} from 'react'
import Table from '@material-ui/core/Table/Table'
import Paper from '@material-ui/core/Paper/Paper'
import TableHead from '@material-ui/core/TableHead/TableHead'
import TableBody from '@material-ui/core/TableBody/TableBody'
import TableRow from '@material-ui/core/TableRow/TableRow'
import TableCell from '@material-ui/core/TableCell/TableCell'

class TodoList extends Component {
    render() {
        return (
            <Paper>
                <Table>
                    <TableHead>
                        {this.renderHeaderRows()}
                    </TableHead>
                    <TableBody>
                        {this.renderBodyRows()}
                    </TableBody>
                </Table>
            </Paper>
        )
    }

    renderHeaderRows = () => {
        return (
            <TableRow>
                {
                    headers.map(header => {
                        return <TableCell key={header}>{header}</TableCell>
                    })
                }
            </TableRow>
        )
    }

    renderBodyRows = () => {
        return data.map(datum => {
            return (
                <TableRow key={datum.id}>
                    <TableCell component='th' scope='row'>
                        {datum.title}
                    </TableCell>
                    <TableCell>{datum.description}</TableCell>
                    <TableCell>{datum.group}</TableCell>
                </TableRow>
            )
        })
    }
}

const headers = ['Title', 'Description', 'Group']

let id = 0
const createData = (title, description, group) => {
    id += 1
    return {id, title, description, group}
}

const data = [
    createData('Clean Room', 'Fake description', 'Cleaning'),
    createData('Buy protein bars', 'Fake descr', 'Shopping'),
    createData('Schedule Appt', 'Fake desc', 'Personal')
]

export default TodoList
