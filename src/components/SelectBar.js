import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette'

const useStyle=makeStyles({
    SelectBar:{
        backgroundColor: palette.blue,
        display: 'flex',
        justifyContent: 'space-between',
        margin: '1.5rem 0',
        padding: '1rem',
        '& button':{
            outline: 'none',
            border: 'none',
            padding: '0',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            color: palette.gray,
            fontWeight: 300,
            fontSize: '1.5rem'
        }
    }
})

const SelectBar = ({setSlice}) => {

    const classes=useStyle()

    const handleSelect=(e)=>{
        const buttons=document.querySelectorAll('button')

        buttons.forEach(button => {
            button.classList.remove('selectOn')
        });

        e.target.classList.add('selectOn')

        if(e.target.textContent==='Pizza'){
            setSlice([0,6])
        }else if(e.target.textContent==='Hamburger'){
            setSlice([6,12])
        }else if(e.target.textContent==='Extras'){
            setSlice([12,18])
        }else if(e.target.textContent==='All Menu'){
            setSlice([0,18])
        }
    }

    return (
        <div className={classes.SelectBar}>
            <button className='selectOn' onClick={handleSelect}>Pizza</button>
            <button onClick={handleSelect}>Hamburger</button>
            <button onClick={handleSelect}>Extras</button>
            <button onClick={handleSelect}>All Menu</button>
            <button onClick={handleSelect}>Favorites</button>
        </div>
    )
}

export default SelectBar
