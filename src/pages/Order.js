import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette'
import {useParams} from 'react-router-dom'
import foods from '../data/foods.json'
import SelectSize from '../components/SelectSize';
import NavBar from '../components/NavBar';
import AlertModal from '../components/AlertModal';
import shopIcon from '../img/shopIcon.png'

const useStyle=makeStyles({
    order:{
        padding: '2rem',
        backgroundColor: palette.white,
        '& h2':{
            color: palette.black,
            fontWeight: 500,
            fontSize: '2.9rem',
            textAlign: 'center'
        },
        '& h4, h5':{
            color: palette.gray,
            fontWeight: 400,
            textAlign: 'center'
        },
        '& p':{
            color: palette.gray
        },
        '& h3':{
            color: palette.black,
            fontSize: '2.5rem',
        }
    },
    flexRow:{
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imgOrder:{
        display: 'flex',
        justifyContent: 'center',
        margin: '2.5rem 0'
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
    btnShop:{
        outline: 'none'
    }
})

const Order = () => {

    const classes=useStyle()
    const {id}=useParams()

    console.log(foods[id-1])

    const handleAlert = ()=>{
        const alert = document.getElementById('alert')
        const overlay = document.getElementById('overlay')

        alert.classList.add('modalActive')
        overlay.classList.add('overlayActive')
    }

    return (
        <div className={classes.order}>
            <NavBar />

            <h2>{foods[id-1].name}</h2>
            <h4>{foods[id-1].description}</h4>
            <h5>{foods[id-1].calories}</h5>

            <div className={classes.imgOrder}>
                <img id='imgOrder' src={foods[id-1].img} alt='order' />
            </div>

            <SelectSize />

            <div className={classes.flexRow}>
                <div>
                    <p>Price</p>
                    <h3>{foods[id-1].price}</h3>
                </div>
                
                <input onClick={handleAlert} type="image" src={shopIcon} className={classes.btnShop}/>
            </div>

            <AlertModal />

            <div id='overlay' className={classes.overlay}></div>
        </div>
    )
}

export default Order
