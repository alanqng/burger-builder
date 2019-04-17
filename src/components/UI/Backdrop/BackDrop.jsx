import React from 'react'
import classes from '../Backdrop/BackDrop.module.css'

const backDrop = (props) => (
    props.show ? <div className={classes.BackDrop} onClick={props.close}></div> : null
)



export default backDrop