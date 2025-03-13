// import React from 'react'
import Bring_people from '../components/home/Bring_people'
import BringPeople from '../data/bring_people.json'
import Logo_animation from '../components/Logo_animation'
import World_MUN_Analysis from '../components/World_MUN_Analysis'
import Feature from '../components/Feature'
import Featuring_item from '../data/feature.json'
import Instagram_news from '../components/Instagram_news'
import MainEntry from '../components/home/MainEntry'
import PastConference from '../components/home/PastConference'

const Home = () => {
  return (
    
    <div className="" style={{position:"relative"}}>
      {/* <Logo_animation />
      <Bring_people listings={BringPeople}/>
      <World_MUN_Analysis />
      <Feature listings={Featuring_item}/>
      <MainEntry />
      <PastConference />
      <Instagram_news /> */}

      <div className='maintenance'>
        <div>
          <img src="https://raw.githubusercontent.com/munsoctw/munsoctw.github.io/c388eb969dc21aeed92948c084e53cac7077ba67/index.gif" alt="Website under maintenance" />
        </div>
      </div>
    </div>

  )
}

export default Home