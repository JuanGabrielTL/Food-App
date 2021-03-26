import React, {useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette';
import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import MenuBar from '../components/MenuBar';

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
    input:{
        border: '1px solid #AAAAAA',
        borderRadius: '10px',
        margin: '1.5rem 0',
        padding: '1.5rem',
        outline: 'none',
        backgroundColor: '#EFEFEF4D'
    }
})

const Location = () => {

    const classes=useStyle()

    const [country, setCountry] = useState([])

    useEffect(() => {
        getLocation()
    }, [])

    const getLocation = async () => {
        const data = await fetch('https://geolocation-db.com/json/f3656c20-83bd-11eb-a7c6-6396d5685ca1')
        const users = await data.json()
        setCountry(users)
    }

    return (
        <div className={classes.Location}>
            <MenuBar />
            <NavBar />

            <form className={classes.formLocation}>
                <div className={classes.input}>{country.country_name}</div>
                <input type='text' placeholder='City' required />
                <input type='text' placeholder='Neighborhood' required />
                <input type='number' placeholder='Street number' required />
                <input type='number' placeholder='House number' required />

                <div className={classes.flexRow}>

                    <Link to='/home' className={classes.btnCancel}>Cancel</Link>
                    <button className={classes.btnSet}>Set Location</button>
                </div>
            </form>
        </div>
    )
}

export default Location
