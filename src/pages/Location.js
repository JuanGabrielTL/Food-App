import React, {useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette';
import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import MenuBar from '../components/MenuBar';
import AlertModal from '../components/AlertModal';

const useStyle=makeStyles({
    Location:{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '2rem'
    },
    formLocation:{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '6rem',
        '& input':{
            border: '1px solid #AAAAAA',
            borderRadius: '10px',
            margin: '1.5rem 0',
            padding: '1.5rem',
            outline: 'none'
        }
    },
    btnSet:{
        backgroundColor: palette.yellow,
        outline: 'none',
        border: 'none',
        color: palette.white,
        borderRadius: '10px',
        padding: '1rem 3rem',
        cursor: 'pointer'
    },
    btnCancel:{
        backgroundColor: palette.white,
        outline: 'none',
        border: 'none',
        color: palette.gray,
        borderRadius: '10px',
        padding: '1rem 3rem',
        cursor: 'pointer'
    },
    flexRow:{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '6rem'
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
    }
})

const Location = () => {

    const classes=useStyle()

    const [country, setCountry] = useState([])

    useEffect(() => {
        getCountry()
    }, [])

    const getCountry = async () => {
        const data = await fetch('https://geolocation-db.com/json/f3656c20-83bd-11eb-a7c6-6396d5685ca1')
        const users = await data.json()
        setCountry(users)
    }

    if(localStorage.getItem('address')){
        var address = JSON.parse(localStorage.getItem('address'))
    }else{
        address={
            city: '',
            neighborhood: '',
            streetNumber: '',
            houseNumber: ''
        }
    }

    const setLocation = (e)=>{
        const city=document.getElementById('city').value;
        const neighborhood=document.getElementById('neighborhood').value;
        const streetNumber=document.getElementById('streetNumber').value;
        const houseNumber=document.getElementById('houseNumber').value;

        let addressObject={
            city: city,
            neighborhood: neighborhood,
            streetNumber: streetNumber,
            houseNumber: houseNumber
        }

        localStorage.setItem('address',JSON.stringify(addressObject))
        handleAlert()

        e.preventDefault()
    }

    const handleAlert = ()=>{
        const alert = document.getElementById('alert')
        const overlay = document.getElementById('overlay')

        alert.classList.add('modalActive')
        overlay.classList.add('overlayActive')
    }

    return (
        <div className={classes.Location}>
            <MenuBar />
            <NavBar />

            <form onSubmit={setLocation} className={classes.formLocation}>
                <input id='country' type='text' autoComplete="off" placeholder='Country' defaultValue={country.country_name} disabled />
                <input id='city' type='text' autoComplete="off" placeholder='City' defaultValue={address.city} required />
                <input id='neighborhood' type='text' autoComplete="off" placeholder='Neighborhood'  defaultValue={address.neighborhood} required/>
                <input id='streetNumber' type='number' autoComplete="off" placeholder='Street number' defaultValue={address.streetNumber} required />
                <input id='houseNumber' type='number' autoComplete="off" placeholder='House number' defaultValue={address.houseNumber} required />

                <div className={classes.flexRow}>

                    <Link to='/home' className={classes.btnCancel}>Back</Link>
                    <button className={classes.btnSet}>Set Location</button>
                </div>
            </form>

            <AlertModal title='Location set ' desc='Your new delivery address is ready' />
            <div id='overlay' className={classes.overlay}></div>
        </div>
    )
}

export default Location
