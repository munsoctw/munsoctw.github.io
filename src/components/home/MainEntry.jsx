import { Link } from 'react-router-dom'
import mainEntry from '../../data/home/mainEntry.json'

const MainEntry = () => {

    const entryRender = mainEntry.map((entry, index) => {
        return(
            <li key={index} style={{width:"30%"}} className='mg-b-50'>
                <Link to={`/${entry.path}`}>
                    <div style={{width:"100%", height:"200px", overflow:"hidden"}}>
                        <img src={entry.thumbnail} style={{width:"100%"}} alt="" />
                    </div>
                    <div style={{padding:"8px", backgroundColor:"var(--white-0)"}}>
                        <h4 style={{textAlign:"center", color:"#000"}}>
                            {entry.topic}
                        </h4>
                    </div>
                </Link>
            </li>
        )
    })

    return (
        <div style={{marginBottom:"80px"}}>
            {/* <h1 className='txt-aln-c' style={{color:"#000"}}>快速讓你知</h1> */}
            <ul className='df jc-sb fl-wp PageXContainer'>
                {entryRender}
            </ul>
        </div>
    )
}

export default MainEntry