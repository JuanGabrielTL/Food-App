import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette'

const useStyle=makeStyles({
    CardCart:{
        backgroundColor: palette.blue,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '13px',
        padding: '1rem',
        margin: '1rem 0',
        '& img':{
            width: '130px'
        }
    }
})

const CardCart = ({img,name,calories,price,size}) => {

    const classes=useStyle()

    return (
        <div className={classes.CardCart}>
            <img src={img} alt='orderItem' />

            <div>
                <h4>{name}</h4>
                <p>{calories}</p>
            </div>
            
            <div>
                <h4>{`$${price}`}</h4>
                <p>{size}</p>
            </div>
        </div>
    )
}

export default CardCart
