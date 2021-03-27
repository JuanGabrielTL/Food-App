import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette'
import {Link} from 'react-router-dom'
import CardCart from '../components/CardCart'
import NavBar from '../components/NavBar';
import MenuBar from '../components/MenuBar';
import EmptyCard from '../components/EmptyCard';

const useStyle=makeStyles({
    Cart:{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '2rem'
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
    },
    hr:{
        margin: '3rem 0',
        color: palette.gray
    },
    containerCart:{
        height: '490px',
        overflow: 'hidden',
        overflowY: 'scroll',
    }
})

const Cart = () => {

    const classes=useStyle()

    const GetCart =()=>{
        if(localStorage.getItem('cart')){
            let cart = JSON.parse(localStorage.getItem('cart'))

            return (
                <div className={classes.containerCart}>
                {cart.map((item)=>{
                    return <CardCart key={item.id} img={item.img} name={item.name} price={item.price} />
                })}
                </div>
            )
        }else{
            return <EmptyCard />
        }
    }

    return (
        <div className={classes.Cart}>
            <MenuBar />
            <NavBar />

            <h1>Cart</h1>
            
            <GetCart />
            
            <hr className={classes.hr} />

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

                <Link to='/cart/payment'>
                <button className={classes.btnCart}>Confirm Order</button>
                </Link>
            </div>
        </div>
    )
}

export default Cart
