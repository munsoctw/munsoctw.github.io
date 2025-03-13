// import conferences from '../data/conference/conferences.json'
import news from '../data/news.json'
import { Link } from 'react-router-dom'

const News = () => {

  const newsRender = news.map((news, index) =>{
    return(
        <li key={index} style={{width:"31%"}} className='mg-b-50'>
            <Link to={`/news/${news.path}`}>
                <div style={{width:"100%", height:"200px", overflow:"hidden"}}>
                    <img src={news.thumbnail} style={{width:"100%"}} alt="" />
                </div>
                <div style={{padding:"8px", backgroundColor:"var(--white-0)"}}>
                    <h4 style={{textAlign:"center", color:"#000"}}>{news.topic}</h4>
                    <h5 style={{textAlign:"center", color:"var(--grey-1)"}}>{news.duration}</h5>
                </div>
            </Link>
      </li>
    )
})

  return (
    <div>
      <ul className='PageXContainer-sm df jc-sb fl-wp'>
          {newsRender}
      </ul>
    </div>
  )
}

export default News