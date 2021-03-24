import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette'
import homeIcon from '../img/homeIcon.png'
import backIcon from '../img/backIcon.png'

const useStyle=makeStyles({
    MenuBar:{
        position: 'fixed',
        backgroundColor: palette.yellow,
        width: '100%',
        height: '100%',
        left: '-100vw',
        transition: 'all 500ms linear',
        top: 0,
        padding: '2rem'
    },
    li:{
        margin: '1rem 0',
        display: 'flex',
        alignItems: 'center',
        padding: '1rem 0',
        '& span':{
            marginLeft: '1rem',
        }
    },
    flexRow:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

const MenuBar = () => {

    const classes=useStyle()

    const handleClose = ()=>{
        const menu = document.getElementById('menu')
        menu.classList.remove('menuActive')
    }

    return (
        <div id='menu' className={classes.MenuBar}>
            <div className={classes.flexRow}>
                <h2>Food App</h2>
                <img onClick={handleClose} src={backIcon} alt='homeIcon' />
            </div>
            
            <hr />

            <div className={classes.li}>
                <img src={homeIcon} alt='homeIcon' />
                <span>Home</span>
            </div>

            <div className={classes.li}>
                <img src={homeIcon} alt='homeIcon' />
                <span>Shopping Cart</span>
            </div>

            <div className={classes.li}>
                <img src={homeIcon} alt='homeIcon' />
                <span>My information</span>
            </div>

            <div className={classes.li}>
                <img src={homeIcon} alt='homeIcon' />
                <span>Receipt</span>
            </div>

            <div className={classes.li}>
                <img src={homeIcon} alt='homeIcon' />
                <span>Dark Mode</span>
            </div>
        </div>
    )
}

export default MenuBar
