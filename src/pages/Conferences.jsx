import conferences from '../data/conference/conferences.json'
import { Link } from 'react-router-dom'

const Conferences = () => {

    const conferenceRender = conferences.map((conference, index) =>{
        return(
            <li key={index} style={{width:"31%"}} className='mg-b-50'>
                <Link to={`/conference/${conference.path}`}>
                    <div style={{width:"100%", height:"200px", overflow:"hidden"}}>
                        <img src={conference.thumbnail} style={{width:"100%"}} alt="" />
                    </div>
                    <div style={{padding:"8px", backgroundColor:"var(--white-0)"}}>
                        <h4 style={{textAlign:"center", color:"#000"}}>{conference.topic}</h4>
                        <h5 style={{textAlign:"center", color:"var(--grey-1)"}}>{conference.duration}</h5>
                    </div>
                </Link>
          </li>
        )
    })
    
    return (
        <div>
            <ul className='PageXContainer-sm df jc-sb fl-wp'>
                {conferenceRender}
            </ul>
        </div>
    )
}

export default Conferences