import React from 'react'
import {makeStyles} from '@material-ui/styles';
import menu from '../img/menu.png'
import search from '../img/search.png'

const useStyle=makeStyles({
    NavBar:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem',
        '& img':{
            cursor: 'pointer'
        }
    },
    InputContainer:{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #AAAAAA',
        borderRadius: '13px',
        padding: '0.3rem 0 0.3rem 1rem'
    },
    InputSearch:{
        outline: 'none',
        border: 'none',
        borderRadius: '13px',
        paddingLeft: '0.5rem',
        fontSize: '14px'
    }
})

const NavBar = () => {

    const classes=useStyle()

    const handleMenu = ()=>{
        const menu = document.getElementById('menu')
        menu.classList.add('menuActive')
    }

    return (
        <div className={classes.NavBar}>
            <img onClick={handleMenu} src={menu} alt='menu' />

            <div className={classes.InputContainer}>
                <img src={search} alt='menu' />
                <input type='text' className={classes.InputSearch}/>
            </div>
        </div>
    )
}

export default NavBar
