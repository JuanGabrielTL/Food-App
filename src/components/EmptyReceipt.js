import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette'
import emptyReceipt from '../img/emptyReceipt.gif'

const useStyle=makeStyles({
    EmptyReceipt:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& h3':{
            color: palette.black,
            marginTop: '3rem'
        },
        '& p':{
            color: palette.gray,
            textAlign: 'center',
            marginTop: '1.5rem'
        }
    }
})

const EmptyReceipt = () => {

    const classes=useStyle()

    return (
        <div className={classes.EmptyReceipt}>
            <img src={emptyReceipt} alt='emptyReceipt' />
            <h3>Your receipt list is empty</h3>
            <p>Looks like you haven't paid for<br />anything yet, try making a payment</p>
        </div>
    )
}

export default EmptyReceipt
