import React from 'react'
import Card from '../../Companents/Card/Card'
import Pitsa from './../../Companents/Data/Data'
import Drink from '../../Companents/Drinks/Drinks'
import Salat from '../../Companents/Salat/Salat'
import Desert from '../../Companents/Desert/Desert'
import Sous from '../../Companents/Sous/Sous'
import Gazaklar from "../../Companents/Gazaklar/Gazaklar"
import Kombo from '../../Companents/Kombo/Kombo'


import './home.css'
function Home() {
    return (
        <div className='home-container'>
            <div  style={{width:"100%"}}>
                <h1 id='Kombo'>Kombo</h1>
                <div className='inner-wrapper'>
                    {
                        Kombo.map((item, index) => (
                            <Card item={item} key={index} />
                        ))
                    }
                </div>
            </div>
            <div  style={{width:"100%"}}>
                <h1 id='Pitsa'>Pitsa</h1>
                <div className='inner-wrapper'>
                    {
                        Pitsa.map((item, index) => (
                            <Card item={item} key={index} />
                        ))
                    }
                </div>
            </div>
            <div  style={{width:"100%"}}>
                <h1 id='Gazaklar'>Gazaklar</h1>
                <div className='inner-wrapper'>
                    {
                        Gazaklar.map((item, index) => (
                            <Card item={item} key={index} />
                        ))
                    }
                </div>
            </div>
            <div  style={{width:"100%"}}>
                <h1 id='Ichimliklar'>Ichimliklar</h1>
                <div className='inner-wrapper'>
                    {
                        Drink.map((item, index) => (
                            <Card item={item} key={index} />
                        ))
                    }
                </div>
            </div>
            <div  style={{width:"100%"}}>
                <h1 id='Salatalr'>Salatalr</h1>
                <div className='inner-wrapper'>
                    {
                        Salat.map((item, index) => (
                            <Card item={item} key={index} />
                        ))
                    }
                </div>
            </div>
            <div  style={{width:"100%"}}>
                <h1 id='Desertlar'>Desert</h1>
                <div className='inner-wrapper'>
                    {
                        Desert.map((item, index) => (
                            <Card item={item} key={index} />
                        ))
                    }
                </div>
            </div>
            <div  style={{width:"100%"}}>
                <h1 id='Souslar'>Souslar</h1>
                <div className='inner-wrapper'>
                    {
                        Sous.map((item, index) => (
                            <Card item={item} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home