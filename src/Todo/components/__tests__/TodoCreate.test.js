import React from 'react'
import {createShallow} from '@material-ui/core/test-utils'
import TodoCreate from '../TodoCreate'
import Input from '@material-ui/core/Input/Input'
import renderer from 'react-test-renderer'

describe('<TodoCreate/>', () => {
    const shallow = createShallow()

    it('should change titles with user input', () => {
        const wrapper = shallow(<TodoCreate/>)
        wrapper.find(Input).simulate('change', {
            target: {
                value: 'updated title'
            }
        })
        expect(wrapper.find(Input).props().value).toEqual('updated title')
    })

    it('renders correctly', () => {
        const tree = renderer.create(
            <TodoCreate/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
