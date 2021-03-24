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

const CardCart = () => {

    const classes=useStyle()

    return (
        <div className={classes.CardCart}>
            <img src='https://i.imgur.com/1pbt2we.png' alt='orderItem' />

            <div>
                <h4>Bacon Burger</h4>
                <p>Medium</p>
            </div>
            
            <div>
                <h4>$22.40</h4>
                <p>Medium</p>
            </div>
        </div>
    )
}

export default CardCart
