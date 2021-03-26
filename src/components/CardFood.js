import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette'
import favoriteIcon from '../img/favoriteIcon.png'

const useStyle=makeStyles({
    CardFood:{
        backgroundColor: palette.blue,
        borderRadius: '6px',
        width: '16rem',
        cursor: 'pointer',
        padding: '1.5rem',
        margin: '0.3rem',
        '& p':{
            color: palette.gray,
            fontSize: '1.34rem',
            fontWeight: 300
        },
        '& h5':{
            color: palette.black,
        },
        '& h4':{
            color: palette.black,
            marginTop: '1rem'
        }
    },
    flexRow:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

const CardFood = ({calories,img,name,description,price}) => {

    const classes=useStyle()

    return (
        <div className={`${classes.CardFood} flip`}>
            <div className={classes.flexRow}>
                <p>{calories}</p>
                <img src={favoriteIcon} alt='favoriteIcon' />
            </div>

            <img src={img} alt='food' />

            <div>
                <h5>{name}</h5>
                <p>{description}</p>
                <h4>{price}</h4>
            </div>
        </div>
    )
}

export default CardFood
