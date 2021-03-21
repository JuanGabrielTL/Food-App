import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette'

const useStyle=makeStyles({
    alert:{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%) scale(0)',
        transition: '200ms ease-in-out',
        border: '1px solid black',
        zIndex: '2',
        backgroundColor: palette.white,
        width: '50rem',
        maxWidth: '80%',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& p':{
            padding: '1rem 0'
        }
    },
    btnAlert:{
        backgroundColor: palette.green,
        padding: '0.8rem 1rem',
        color: palette.white,
        border: 'none',
        outline: 'none',
        borderRadius: '13px',
        textAlign: 'center',
        cursor: 'pointer'
    }
})

const AlertModal = () => {

    const classes=useStyle()

    const handleClose = ()=>{
        const alert = document.getElementById('alert')
        const overlay = document.getElementById('overlay')

        alert.classList.remove('modalActive')
        overlay.classList.remove('overlayActive')
    }

    return (
        <div id='alert' className={classes.alert}>
            <h2>Item Added To Cart</h2>
            <p>Go to the cart to checkout</p>
            <button className={classes.btnAlert} onClick={handleClose}>Continue</button>
        </div>
    )
}

export default AlertModal
