import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette'
import QRCode from "react-qr-code";
import PrintSvg from '../components/PrintSvg'

const useStyle=makeStyles({
    PopupQR:{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%) scale(0)',
        transition: '200ms ease-in-out',
        border: '1px solid black',
        zIndex: '2',
        backgroundColor: palette.white,
        width: '40rem',
        maxWidth: '80%',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '13px',
        '& h2':{
            color: palette.black,
            fontWeight: 500,
            textAlign: 'center'
        }
    }
})

const PopupQR = ({total}) => {

    const classes=useStyle()

    return (
        <div id='popupQR' className={classes.PopupQR}>
            <h2>Print Receipt</h2>
            <PrintSvg />
            <QRCode value={`Total: ${total} / Order Number: 1266201`} size={82} bgColor={palette.white} fgColor={palette.black} />
        </div>
    )
}

export default PopupQR
