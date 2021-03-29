import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette'
import {Link} from 'react-router-dom'
import timeIcon from '../img/timeIcon.png'
import photo from '../img/photo.png'
import phoneIcon from '../img/phoneIcon.png'
import exitIcon from '../img/exitIcon.png'

const useStyle=makeStyles({
    DeliveryModal:{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%) scale(0)',
        transition: '200ms ease-in-out',
        zIndex: '2',
        backgroundColor: palette.white,
        width: '50rem',
        maxWidth: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: '16px',
        '& span':{
            color: palette.gray,
            fontSize: '1.5rem',
        },
        '& p':{
            color: palette.black,
            fontSize: '1.5rem',
            fontWeight: 600
        }
    },
    btnAlert:{
        backgroundColor: palette.green,
        padding: '0.8rem 1rem',
        color: palette.white,
        border: 'none',
        outline: 'none',
        borderRadius: '13px',
        textAlign: 'center',
        cursor: 'pointer'
    },
    flexRow:{
        display: 'flex',
        alignItems: 'center',
        padding: '1.5rem'
    },
    flexRowGrow:{
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1
    },
    deliveryInfo:{
        backgroundColor: palette.blue,
        borderRadius: '16px'
    },
    mgR:{
        marginRight: '1.5rem'
    },
    info:{
        backgroundColor: palette.blue,
        borderRadius: '16px 16px 0 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem'

    }
})

const DeliveryModal = () => {

    const classes=useStyle()

    const address = JSON.parse(localStorage.getItem('address'))

    return (
        <div id='deliveryModal' className={classes.DeliveryModal}>
            <div className={classes.info}>
                <h3>Delivery Info</h3>
                <Link to='/home'>
                <img src={exitIcon} alt='timeIcon' />
                </Link>
            </div>

            <div className={classes.flexRow}>
                <img className={classes.mgR} src={timeIcon} alt='timeIcon' />
                <div>
                    <span>Your delivery time</span>
                    <p>15 minutes</p>
                </div>
            </div>

            <div className={classes.flexRow}>
                <img className={classes.mgR} src={timeIcon} alt='timeIcon' />
                <div>
                    <span>Your address</span>
                    <p>{`${address.streetNumber} ${address.neighborhood}, #${address.houseNumber}. ${address.city}`}</p>
                </div>
            </div>

            <div className={`${classes.deliveryInfo} ${classes.flexRow}`}>
                <div className={classes.flexRowGrow}>
                    <img className={classes.mgR} src={photo} alt='photoMan' />
                    <div>
                        <span>Your delivery man</span>
                        <p>Benito Martínez</p>
                    </div>
                </div>
                <a href='tel: 8091234567'>
                    <img src={phoneIcon} alt='phoneIcon' />
                </a>
            </div>
        </div>
    )
}

export default DeliveryModal
