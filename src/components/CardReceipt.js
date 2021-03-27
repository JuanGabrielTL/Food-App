import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette'
import QRCode from "react-qr-code"; 

const useStyle=makeStyles({
    CardReceipt:{
        backgroundColor: palette.lapis,
        padding: '2rem 1.5rem',
        borderRadius: '13px',
        '& h4':{
            color: palette.cyan,
            fontSize: '1.5rem',
            fontWeight: 500
        },
        '& span':{
            color: palette.cyan,
            fontSize: '1.5rem'
        },
        '& p':{
            color: palette.white
        },
        '& hr':{
            margin: '2rem 0',
            border: '1px dashed #C1DFFB'
        },
        '& h2':{
            color: palette.white,
            fontSize: '3.2rem',
            fontWeight: 500
        }
    },
    mg:{
        margin: '1rem 0'
    },
    flexRow:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

const CardReceipt = ({total}) => {

    const classes=useStyle()

    return (
        <div className={classes.CardReceipt}>
            <div className={classes.flexRow}>
                <div>
                    <h4>You have to pay</h4>
                    <h2>{`${total} USD`}</h2>
                </div>
                <QRCode value={`Total: ${total} / Order Number: 1266201`} size={52} bgColor={palette.lapis} fgColor={palette.cyan} />
            </div>

            <hr />

            <div>
                <span>Company</span>
                <p>Food App</p>
            </div>

            <div className={classes.mg}>
                <span>Order Number</span>
                <p>1266201</p>
            </div>

            <div>
                <span>Service</span>
                <p>Food</p>
            </div>
        </div>
    )
}

export default CardReceipt
