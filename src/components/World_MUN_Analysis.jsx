// import React from 'react'
import '../css/wmunAnalysis.css'

const World_MUN_Analysis = () => {
  return (
    <div className="HWMUN container PageXContainer textLight">
        <h1 className='HWMUN_topic'>Harvard World MUN</h1>
        <p className='HWMUN_description'>Dubbed “the Olympics of Model UN”, WorldMUN is the world’s most internationally-renowned MUN conference.</p>
        <div className='data'>
            <div className='item'>
                <h1 className="analytical_data">30</h1>
                <h3 className='data_name'>visited cities</h3>
            </div>
            <div className='item'>
                <h1 className="analytical_data">30000+</h1>
                <h3 className='data_name'>accumulated participants</h3>
            </div>
            <div className='item'>
                <h1 className="analytical_data">110+</h1>
                <h3 className='data_name'>countries joined</h3>
            </div>
        </div>
    </div>
    
  )
}

export default World_MUN_Analysis