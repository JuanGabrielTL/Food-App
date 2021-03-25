import React from 'react'
import {makeStyles} from '@material-ui/styles';

const useStyle=makeStyles({
    FormCash:{
        '& input':{
            outline: 'none',
            border: 'none',
            borderBottom: '1px solid #AAAAAA',
            margin: '1.5rem 0',
            width: '100%',
            fontSize: '1.5rem'
        },
        '& input:focus':{
            borderBottom: '1px solid #3195F0',
        }
    },
    flexRow:{
        display: 'flex',
        justifyContent: 'space-between',
        '& input':{
            width: '48%'
        }
    }
})

const FormCard = () => {

    const classes=useStyle()

    return (
        <form className={classes.FormCash}>
            <input type='name' placeholder='Name' />
            <input type='tel' placeholder='Card Number' />
            <div className={classes.flexRow}>
                <input type='month' placeholder='Date' />
                <input type='tel' placeholder='CVV' />
            </div>
            <input type='name' placeholder='Addres' />
        </form>
    )
}

export default FormCard
