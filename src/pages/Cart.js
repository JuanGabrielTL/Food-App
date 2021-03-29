import React, { useEffect, useState } from 'react'
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
        padding: '2rem',
        '& h1':{
            color: palette.black
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
    },
    hr:{
        margin: '3rem 0',
        color: palette.gray
    },
    containerCart:{
        height: '490px',
        overflow: 'hidden',
        overflowY: 'scroll',
    },
    btnCartDisabled:{
        backgroundColor: palette.yellow,
        outline: 'none',
        border: 'none',
        cursor: 'not-allowed',
        borderRadius: '13px',
        padding: '1rem 2rem',
        fontWeight: 500,
        marginTop: '2rem',
        color: palette.black
    }
})

const Cart = () => {

    const classes=useStyle()

    let itemTotal=0;
    let deliveryCharge=1.25;
    let tax=0;
    let total=0;

    const [pay, setPay] = useState([0,0,0,0])

    useEffect(() => {
        if(localStorage.getItem('cart')){
            math()
        }else{
            setPay([0,0,0,0])
        }
    }, [])

    const GetCart =()=>{
        if(localStorage.getItem('cart')){
            let cart = JSON.parse(localStorage.getItem('cart'))
            
            return (
                <div className={classes.containerCart}>
                {cart.map((item,index)=>{
                    itemTotal = itemTotal + item.price;
                    return <CardCart key={index} img={item.img} name={item.name} price={item.price} />
                })}
                </div>
            )
        }else{
            return <EmptyCard />
        }
    }

    const GetAddressDelivery=()=>{
        if(localStorage.getItem('cart') && localStorage.getItem('address')){
            return(
            <Link to={{pathname: '/cart/payment',state:{total:`${pay[3]}`}}}>
            <button className={classes.btnCart}>Confirm Order</button>
            </Link>)
        }else{
            return(<button className={classes.btnCartDisabled} disabled >Confirm Order</button>)
        }
    }

    const math=()=>{
        tax=(itemTotal+deliveryCharge)*0.18;
        total=itemTotal+deliveryCharge+tax;
        setPay([itemTotal.toFixed(2),deliveryCharge.toFixed(2),tax.toFixed(2),total.toFixed(2)])
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
                    <p>{`$${pay[0]}`}</p>
                </div>

                <div className={classes.flexRow}>
                    <span>Delivery Charge</span>
                    <p>{`$${pay[1]}`}</p>
                </div>

                <div className={classes.flexRow}>
                    <span>Tax</span>
                    <p>{`$${pay[2]}`}</p>
                </div>

                <div className={classes.flexRow}>
                    <span>Total</span>
                    <p>{`$${pay[3]}`}</p>
                </div>

                <GetAddressDelivery />
            </div>
        </div>
    )
}

export default Cart
