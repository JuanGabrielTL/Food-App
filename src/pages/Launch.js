import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette';
import {Link} from 'react-router-dom';
import DeliverySvg from '../components/DeliverySvg';

const useStyle=makeStyles({
    Launch:{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '6rem 2rem',
        textAlign: 'center',
        '& h2':{
            color: palette.black,
            marginTop: '6rem',
            fontSize: '3.2rem'
        },
        '& p':{
            color: palette.gray,
            fontSize: '1.5rem',
            margin: '1rem 0 6rem 0',
        }
    },
    btnLaunch:{
        backgroundColor: palette.yellow,
        outline: 'none',
        border: 'none',
        color: palette.white,
        borderRadius: '10px',
        padding: '1rem 3rem',
        cursor: 'pointer'
    },
    btnLater:{
        backgroundColor: palette.white,
        outline: 'none',
        border: 'none',
        borderBottom: '1px solid #AAAAAA',
        color: palette.gray,
        marginTop: '3rem',
        cursor: 'pointer'
        
    },
    flexColumn:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
})

const Launch = () => {

    const classes=useStyle()

    return (
        <div className={classes.Launch}>
            <DeliverySvg />

            <h2>Before Starting</h2>
            <p>Please set your delivery address<br />to receive your orders</p>

            <div className={classes.flexColumn}>
                <Link to='/location'>
                <button className={classes.btnLaunch}>Set Address</button>
                </Link>

                <Link to='/home'>
                <button className={classes.btnLater}>Later</button>
                </Link>
            </div>
        </div>
    )
}

export default Launch
