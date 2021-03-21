import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette'

const useStyle=makeStyles({
    BtnSize:{
        backgroundColor: palette.blue,
        border: 'none',
        padding: '1.4rem 2.3rem',
        borderRadius: '40%',
        outline: 'none',
        cursor: 'pointer',
        fontWeight: 500,
        color: palette.gray
    }
})

const BtnSize = ({p,select='no'}) => {

    const classes=useStyle()

    const handleSize = (e)=>{
        const btns = document.querySelectorAll(`.${classes.BtnSize}`)
        const imgOrder = document.getElementById('imgOrder')

        btns.forEach(btn => {
            btn.classList.remove('sizeOn')
        });

        e.target.classList.add('sizeOn')

        if(e.target.textContent==='S'){
            imgOrder.style.transform= 'scale(1)';
        }
        if(e.target.textContent==='M'){
            imgOrder.style.transform= 'scale(1.1)';
        }
        if(e.target.textContent==='L'){
            imgOrder.style.transform= 'scale(1.2)';
        }
    }

    return (
        <button onClick={handleSize} className={`${classes.BtnSize} ${select}`}>{p}</button>
    )
}

export default BtnSize
