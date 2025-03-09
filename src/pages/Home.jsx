// import React from 'react'
import Bring_people from '../components/Bring_people'
import BringPeople from '../data/bring_people.json'
import Logo_animation from '../components/Logo_animation'
import World_MUN_Analysis from '../components/World_MUN_Analysis'
import Feature from '../components/Feature'
import Featuring_item from '../data/feature.json'
import Instagram_news from '../components/Instagram_news'
import '../index.css'

const Home = () => {
  return (
    
    <div className="homePage">
      <Logo_animation />
      <Bring_people listings={BringPeople}/>
      <World_MUN_Analysis />
      <Feature listings={Featuring_item}/>
      <Instagram_news />
    </div>

  )
}

export default Home