import React, {useState} from 'react'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = ( props ) => {
    const [showSideDrawer, setSideDrawer] = useState(true)

    const sideDrawerCloseHandler = () => {
        setSideDrawer(false)
    }

    const togglerDrawerHandler = () => {
        setSideDrawer((prevState) => (!prevState))
    }

    return (
        <React.Fragment>
        <Toolbar toggleDrawer={togglerDrawerHandler} />
        <SideDrawer closed={sideDrawerCloseHandler} show={showSideDrawer} />
        <main className={classes.Content}>
            {props.children}
        </main>
    </React.Fragment>
    )
}

export default layout;