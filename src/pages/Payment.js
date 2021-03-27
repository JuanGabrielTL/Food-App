import React, { useState } from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette'
import BtnPayment from '../components/BtnPayment';
import FormCash from '../components/FormCash';
import cashIcon from '../img/cashIcon.png'
import cardIcon from '../img/cardIcon.png'
import paypalIcon from '../img/paypalIcon.png'
import CardReceipt from '../components/CardReceipt';
import {Link} from 'react-router-dom'
import {useLocation} from "react-router-dom";

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
        margin: '3rem 0',
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
        marginTop: '2rem'
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
    }
})

const Payment = () => {

    const classes=useStyle()

    let data = useLocation();

    const [form, setForm] = useState( <FormCash /> )

    return (
        <div className={classes.Payment}>
            <div className={classes.typography}>
                <h2>Confirm order and play</h2>
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

                <button className={classes.btnPay}>Confirm Pay</button>
            </div>
        </div>
    )
}

export default Payment
