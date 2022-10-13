import './css/IndexContainer.css'
import Nav from './Nav.js'
import Header from './Header.js'
import Section from './Section.js'
import BottomMenu from './BottomMenu.js'
import { Fragment } from 'react'

function IndexContainer() {
    return (
    <Fragment>
        <Nav />
        <Header />
        <Section />
        <BottomMenu />
    </Fragment>
    )
}

export default IndexContainer;
