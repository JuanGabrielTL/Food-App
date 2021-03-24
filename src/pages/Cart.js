import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette'
import CardCart from '../components/CardCart'

const useStyle=makeStyles({
    Cart:{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '2rem',
        maxWidth: '1280px',
        '& hr':{
            margin: '3rem 0',
            color: palette.gray
        }
    },
    flexRow:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
        '& span':{
            color: palette.gray
        },
        '& p':{
            color: palette.black,
            fontWeight: 600
        }
    },
    btnCart:{
        backgroundColor: palette.yellow,
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '13px',
        padding: '1rem 2rem',
        fontWeight: 500,
        marginTop: '2rem',
        color: palette.black
    }
})

const Cart = () => {

    const classes=useStyle()

    return (
        <div className={classes.Cart}>
            <h1>Cart</h1>

            <CardCart />
            <CardCart />
            <CardCart />

            <hr />

            <div>
                <div className={classes.flexRow}>
                    <span>Item Total</span>
                    <p>$65.25</p>
                </div>

                <div className={classes.flexRow}>
                    <span>Delivery Charge</span>
                    <p>$1.25</p>
                </div>

                <div className={classes.flexRow}>
                    <span>Tax</span>
                    <p>$0.50</p>
                </div>

                <div className={classes.flexRow}>
                    <span>Total</span>
                    <p>$65.50</p>
                </div>

                <button className={classes.btnCart}>Confirm Order</button>
            </div>
        </div>
    )
}

export default Cart
