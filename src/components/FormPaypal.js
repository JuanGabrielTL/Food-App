import React from 'react'
import {makeStyles} from '@material-ui/styles';

const useStyle=makeStyles({
    FormPaypal:{
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
    }
})

const FormPaypal = () => {

    const classes=useStyle()

    return (
        <form className={classes.FormPaypal}>
            <input type='email' placeholder='Email' required />
            <input type='password' placeholder='Password' required />
            <input type='name' placeholder='Addres' required />
        </form>
    )
}

export default FormPaypal
