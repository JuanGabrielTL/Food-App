import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette'

const useStyle=makeStyles({
    MenuBar:{
        position: 'fixed',
        backgroundColor: palette.yellow,
        width: '400px',
        height: '100%',
        left: '-400px',
        transition: 'all 500ms linear',
        top: 0
    }
})

const MenuBar = () => {

    const classes=useStyle()

    return (
        <div id='menu' className={classes.MenuBar}>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
        </div>
    )
}

export default MenuBar
