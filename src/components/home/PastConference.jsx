import conferences from '../../data/home/conference.json'
import { Link } from 'react-router-dom'

const PastConference = () => {

  const conferenceRender = conferences.map((conference, index) => {
    return(
      <li key={index} style={{width:"23%"}} className='mg-b-50'>
        <Link to={`/${conference.path}`}>
            <div style={{width:"100%", height:"300px", overflow:"hidden"}}>
                <img src={conference.thumbnail} style={{width:"100%"}} alt="" />
            </div>
            <div style={{padding:"8px", backgroundColor:"var(--white-0)"}}>
                <h4 style={{textAlign:"center", color:"#000"}}>
                    {conference.topic}
                </h4>
            </div>
        </Link>
      </li>
    )
  })

  return (
    <div className='PageXContainer'>
      <h2
        className='txt-aln-c'
        style={{
          color:"var(--white-0)",
          borderBottom:"1px solid var(--blue-grey-1)",
          paddingBottom:"20px",
          marginBottom:"50px"
        }}
      >
        Past Conference
      </h2>
      <ul className='df jc-sb fl-wp'>
        {conferenceRender}
      </ul>
    </div>
  )
}

export default PastConference