import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette'
import emptyIcon from '../img/emptyIcon.png'

const useStyle=makeStyles({
    EmptyCard:{
        height: '490px',
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

const EmptyCard = () => {

    const classes=useStyle()

    return (
        <div className={classes.EmptyCard}>
            <img src={emptyIcon} alt='emptyIcon' />
            <h3>Your Cart is Empty</h3>
            <p>Looks like you haven't added<br />anything to your cart yet</p>
        </div>
    )
}

export default EmptyCard
