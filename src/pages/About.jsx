import IntroLists from '../components/IntroLists'
import Meet_team from '../components/Meet_team'
import mainIntroData from '../data/main_intro.json'
import meet_the_team from '../data/meet_the_team.json'

function About() {

  return (
    <div className='aboutPage'>
      <IntroLists listings={mainIntroData}/>
      <Meet_team listings={meet_the_team}/>
    </div>
  )
}

export default About
