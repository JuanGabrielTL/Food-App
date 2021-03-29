import React from 'react'
import {makeStyles} from '@material-ui/styles';
import CardReceipt from '../components/CardReceipt';
import NavBar from '../components/NavBar';
import MenuBar from '../components/MenuBar';
import PopupQR from '../components/PopupQR';
import EmptyReceipt from '../components/EmptyReceipt';
import { palette } from '../styles/palette';
import { useHistory } from 'react-router'

const useStyle=makeStyles({
    Receipts:{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '2rem',
        '& h1':{
            color: palette.black,
            marginBottom: '2rem'
        }
    },
    overlay:{
        position: 'fixed',
        opacity: '0',
        transition: '200ms ease-in-out',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, .5)',
        pointerEvents: 'none'
    },
    btnDelete:{
        backgroundColor: palette.red,
        border: 'none',
        color: palette.white,
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        outline: 'none',
        cursor: 'pointer'
    }
})

const Receipts = () => {

    const classes=useStyle()

    const GetReceipt=()=>{
        if(localStorage.getItem('receipts')){
            let receipt = JSON.parse(localStorage.getItem('receipts'))

            return(
                receipt.map((item,index)=>{
                    return <CardReceipt key={index} total={item.total} />
                })
            )
        }else{
            return <EmptyReceipt />
        }
    }

    const SetDeleteReceipt=()=>{
        if(localStorage.getItem('receipts')){
            return <button className={classes.btnDelete} onClick={handleDelete}>Delete Receipts</button>
        }else{
            return null
        }
    }

    const handleClose = ()=>{
        const popupQR = document.getElementById('popupQR')
        const overlay = document.getElementById('overlayQR')

        popupQR.classList.remove('modalActive')
        overlay.classList.remove('overlayActive')

        document.getElementById('receipt').classList.remove('animate')
        document.getElementById('mouse').classList.remove('animate')
        document.getElementById('card').classList.remove('animate')
    }

    const history = useHistory()

    const handleDelete=()=>{
        localStorage.removeItem('receipts')
        
        history.go(0)
    }

    return (
        <div className={classes.Receipts}>
            <MenuBar />
            <NavBar />

            <h1>Receipt list</h1>

            <GetReceipt />
            <SetDeleteReceipt />

            <PopupQR total='aquí no funciona, jeje' />
            <div id='overlayQR' onClick={handleClose} className={classes.overlay}></div>
        </div>
    )
}

export default Receipts
