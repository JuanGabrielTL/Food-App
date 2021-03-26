import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette';
import {Link} from 'react-router-dom'
import arrowIcon from '../img/arrowIcon.png'

const useStyle=makeStyles({
    NavOrder:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem',
        '& img':{
            cursor: 'pointer'
        }
    },
    favorite:{
        backgroundColor: palette.blue,
        padding: '1rem 1.5rem',
        borderRadius: '50%',
        border: 'none',
        outline: 'none',
        fontSize: '2.2rem',
        color: palette.gray
    }
})

const NavOrder = () => {

    const classes=useStyle()

    return (
        <div className={classes.NavOrder}>
            <Link to='/home'>
            <img src={arrowIcon} alt='back' />
            </Link>

            <button className={classes.favorite}>&hearts;</button>
        </div>
    )
}

export default NavOrder
