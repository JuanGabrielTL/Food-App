import React from 'react'
import {makeStyles} from '@material-ui/styles';
import BtnSize from './BtnSize'

const useStyle=makeStyles({
    SelectSize:{
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '2.5rem'
    }
})

const SelectSize = () => {

    const classes=useStyle()

    return (
        <div className={classes.SelectSize}>
            <BtnSize p='S' select='sizeOn' />
            <BtnSize p='M' />
            <BtnSize p='L' />
        </div>
    )
}

export default SelectSize
