import React, { useState } from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette'
import {Link, Redirect} from 'react-router-dom'
import {useLocation} from "react-router-dom";
import BtnPayment from '../components/BtnPayment';
import FormCash from '../components/FormCash';
import cashIcon from '../img/cashIcon.png'
import cardIcon from '../img/cardIcon.png'
import paypalIcon from '../img/paypalIcon.png'
import CardReceipt from '../components/CardReceipt';
import PopupQR from '../components/PopupQR';
import DeliveryModal from '../components/DeliveryModal';

const useStyle=makeStyles({
    Payment:{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: palette.snow,
    },
    Methods:{
        backgroundColor: palette.white,
        padding: '2rem 1.5rem',
        borderRadius: '13px',
        margin: '3rem 0 1rem 0',
        '& h4':{
            marginBottom: '2rem'
        }
    },
    flexRow:{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '4rem'
    },
    typography:{
        '& p':{
            color: palette.gray,
            fontSize: '1.5rem'
        },
        '& h2':{
            color: palette.black
        }
    },
    flexRow2:{
        display: 'flex',
        justifyContent: 'space-between',
    },
    btnPay:{
        backgroundColor: palette.lapis,
        border: 'none',
        color: palette.white,
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        outline: 'none',
        cursor: 'pointer'
    },
    btnCancel:{
        backgroundColor: palette.snow,
        border: 'none',
        color: palette.gray,
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        outline: 'none',
        cursor: 'pointer'
    },
    overlay:{
        position: 'fixed',
        opacity: '0',
        transition: '200ms ease-in-out',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, .5)',
        pointerEvents: 'none'
    }
})

const Payment = () => {

    const classes=useStyle()

    let data = useLocation();

    const [form, setForm] = useState( <FormCash /> )

    if(!localStorage.getItem('cart') || !localStorage.getItem('address')){
        return <Redirect to="/cart" />;
    }

    const handleAlert = ()=>{
        const deliveryModal = document.getElementById('deliveryModal')
        const overlay = document.getElementById('overlay')

        deliveryModal.classList.add('modalActive')
        overlay.classList.add('overlayActive')
    }

    const handlePay = ()=>{
        handleAlert()

        let receipt;

        if(localStorage.getItem('receipts')===null){
            receipt=[]
        }else{
            receipt=JSON.parse(localStorage.getItem('receipts'))
        }

        let receiptObj={
            total: data.state.total
        }

        receipt.push(receiptObj)
        localStorage.setItem('receipts', JSON.stringify(receipt))

        localStorage.removeItem('cart')
    }

    const handleClose = ()=>{
        const popupQR = document.getElementById('popupQR')
        const overlay = document.getElementById('overlayQR')

        popupQR.classList.remove('modalActive')
        overlay.classList.remove('overlayActive')

        document.getElementById('receipt').classList.remove('animate')
        document.getElementById('mouse').classList.remove('animate')
        document.getElementById('card').classList.remove('animate')
    }

    return (
        <div className={classes.Payment}>
            <div className={classes.typography}>
                <h2>Confirm order and pay</h2>
                <p>Please make the payment, after that you can enjoy the food</p>
            </div>

            <div className={classes.Methods}>
                <h4>PAYMENT METHODS</h4>
                <div className={classes.flexRow}>
                    <BtnPayment setForm={setForm} method='Cash' icon={cashIcon} on='paymentOn'/>
                    <BtnPayment setForm={setForm} method='Card' icon={cardIcon}/>
                    <BtnPayment setForm={setForm} method='Paypal' icon={paypalIcon}/>
                </div>

                <h4>PAYMENT DETAILS</h4>
                {form}
            </div>

            <CardReceipt total={data.state.total}/>

            <div className={classes.flexRow2}>
                <Link to='/cart'>
                <button className={classes.btnCancel}>Cancel Pay</button>
                </Link>

                <button onClick={handlePay} className={classes.btnPay}>Confirm Pay</button>
            </div>

            <DeliveryModal />
            <div id='overlay' className={classes.overlay}></div>

            <PopupQR total={data.state.total} />
            <div id='overlayQR' onClick={handleClose} className={classes.overlay}></div>
        </div>
    )
}

export default Payment