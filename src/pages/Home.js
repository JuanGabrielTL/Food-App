import React, { useState } from 'react'
import {makeStyles} from '@material-ui/styles';
import {palette} from '../styles/palette'
import {Link} from 'react-router-dom'
import CardFood from '../components/CardFood'
import SelectBar from '../components/SelectBar'
import foods from '../data/foods.json'
import addressIcon from '../img/addressIcon.png'
import NavBar from '../components/NavBar';
import MenuBar from '../components/MenuBar';

const useStyle=makeStyles({
    home:{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: palette.white,
        '& h1':{
            color: palette.gray,
            fontWeight: 300,
            fontSize: '2.9rem'
        },
        '& h2':{
            color: palette.black
        }
    },
    containerCard:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    cardInformation:{
        backgroundColor: palette.blue,
        padding: '2rem',
        marginTop: '1.5rem',
        borderRadius: '6px',
        '& h5':{
            color: palette.black,
            marginBottom: '1.5rem',
            fontSize: '1.45rem'
        },
        '& p':{
            color: palette.gray,
            fontSize: '1.34rem',
        },
        '& h4':{
            color: palette.black,
        }
    },
    flexRow:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

const Home = () => {

    const classes=useStyle()

    const [slice, setSlice] = useState([0,6])

    return (
        <div className={classes.home}>
            <MenuBar />
            <NavBar />

            <h1>Food</h1>
            <h2>Special For You</h2>

            <SelectBar setSlice={setSlice}/>

            <div className={classes.containerCard}>
                {
                    foods.slice(slice[0],slice[1]).map((food)=>{
                        return <Link key={food.id} to={`/order/${food.id}`}><CardFood key={food.id} calories={food.calories} img={food.img} name={food.name} description={food.description} price={food.price} /></Link>
                    })
                }
            </div>

            <div className={classes.cardInformation}>
                <h5>Your informations</h5>
                <div className={classes.flexRow}>
                    <img src={addressIcon} alt='addressIcon' />
                    <div>
                        <p>Your Delivery Address</p>
                        <h4>241 Hillside Road, HASTINGS</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
