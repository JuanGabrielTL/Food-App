import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette'
import {useParams} from 'react-router-dom'
import foods from '../data/foods.json'

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
    const {id}=useParams()

    const handleSize = (e)=>{
        const btns = document.querySelectorAll(`.${classes.BtnSize}`)
        const imgOrder = document.getElementById('imgOrder')

        btns.forEach(btn => {
            btn.classList.remove('sizeOn')
        });

        e.target.classList.add('sizeOn')

        if(e.target.textContent==='S'){
            imgOrder.style.animation= 'small 0.7s linear forwards';
            foods[id-1].size='Small'
        }
        if(e.target.textContent==='M'){
            imgOrder.style.animation= 'medium 0.7s linear forwards';
            foods[id-1].size='Medium'
        }
        if(e.target.textContent==='L'){
            imgOrder.style.animation= 'large 0.7s linear forwards';
            foods[id-1].size='Large'
        }
    }

    return (
        <button onClick={handleSize} className={`${classes.BtnSize} ${select}`}>{p}</button>
    )
}

export default BtnSize
