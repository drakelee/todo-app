import React from 'react'
import {createShallow} from '@material-ui/core/test-utils'
import AppDrawer from '../AppDrawer'
import renderer from 'react-test-renderer'

const shallow = createShallow()
const setup = overrideProps => {
    const wrapper = shallow(
        <AppDrawer
            {...overrideProps}
        />
    )
}

describe('<AppDrawer/>', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <AppDrawer/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
