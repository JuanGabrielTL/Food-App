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
    }
})

const FormCash = () => {

    const classes=useStyle()

    return (
        <form className={classes.FormCash}>
            <input type='name' placeholder='Name' required />
            <input type='tel' placeholder='Phone' required />
            <input type='name' placeholder='Addres' required />
        </form>
    )
}

export default FormCash
