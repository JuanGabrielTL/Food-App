import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette'
import FormCash from './FormCash';
import FormPaypal from './FormPaypal';
import FormCard from './FormCard';

const useStyle=makeStyles({
    BtnPayment:{
        backgroundColor: palette.white,
        padding: '1rem',
        borderRadius: '10px',
        border: '1px solid #FFFFFF',
        boxShadow: '2px 3px 5px 0px rgba(0,0,0,0.21)',
        outline: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        '& img':{
            marginRight: '1rem'
        }
    }
})

const BtnPayment = ({setForm,method,icon,on}) => {

    const classes=useStyle()

    const handleMethod=(e)=>{
        const BtnsPayment=document.querySelectorAll(`.${classes.BtnPayment}`)

        BtnsPayment.forEach(BtnPayment => {
            BtnPayment.classList.remove('paymentOn')
        });

        if(e.target.tagName==='IMG'){
            e.target.parentElement.classList.add('paymentOn')
        }else{
            e.target.classList.add('paymentOn')
        }

        if(e.target.textContent==='Cash'){
            setForm( <FormCash /> )
        }
        if(e.target.textContent==='Card'){
            setForm( <FormCard /> )
        }
        if(e.target.textContent==='Paypal'){
            setForm( <FormPaypal /> )
        }
    }

    return (
        <button onClick={handleMethod} className={`${classes.BtnPayment} ${on}`}>
            <img src={icon} alt='icon' />
            {method}
        </button>
    )
}

export default BtnPayment
