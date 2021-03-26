import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette'
import {Link} from 'react-router-dom'
import homeIcon from '../img/homeIcon.png'
import cartIcon from '../img/cartIcon.png'
import locationIcon from '../img/locationIcon.png'
import receiptIcon from '../img/receiptIcon.png'
import darkIcon from '../img/darkIcon.png'
import backIcon from '../img/backIcon.png'

const useStyle=makeStyles({
    MenuBar:{
        position: 'fixed',
        backgroundColor: palette.white,
        width: '100%',
        height: '100%',
        left: '-100vw',
        transition: 'all 500ms linear',
        top: 0,
        padding: '2rem',
        '& hr':{
            marginBottom: '3rem',
            border: '0.5px solid #AAAAAA'
        }
    },
    li:{
        margin: '1.5rem 0',
        display: 'flex',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: palette.blue,
        '& span':{
            marginLeft: '1rem',
            color: palette.gray
        }
    },
    flexRow:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& img':{
            cursor: 'pointer'
        }
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

            <Link to='/home' onClick={handleClose} className={classes.li}>
                <img src={homeIcon} alt='homeIcon' />
                <span>Home</span>
            </Link>

            <Link to='/cart' onClick={handleClose} className={classes.li}>
                <img src={cartIcon} alt='cartIcon' />
                <span>Shopping Cart</span>
            </Link>

            <Link to='/location' onClick={handleClose} className={classes.li}>
                <img src={locationIcon} alt='locationIcon' />
                <span>My Location</span>
            </Link>

            <div onClick={handleClose} className={classes.li}>
                <img src={receiptIcon} alt='receiptIcon' />
                <span>Receipt</span>
            </div>

            <div onClick={handleClose} className={classes.li}>
                <img src={darkIcon} alt='darkIcon' />
                <span>Dark Mode</span>
            </div>
        </div>
    )
}

export default MenuBar
