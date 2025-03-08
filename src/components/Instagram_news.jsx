import { InstagramEmbed } from 'react-social-media-embed';
import '../css/instagram_news.css';

const Instagram_news = () => {

    return(

        <div className="instagram_news container PageXContainer">

            <div className="overflowFrame">
                <InstagramEmbed
                    url="https://www.instagram.com/p/C3o2i7ZMu-t/?utm_source=ig_embed&amp;utm_campaign"
                    // width="500px"
                />
                <InstagramEmbed
                    url="https://www.instagram.com/p/C39SqVFM_pd/?utm_source=ig_embed&amp;utm_campaign=loading"
                    // width="30%"
                />
                <InstagramEmbed
                    url="https://www.instagram.com/p/C1nt4g8ri_W/?utm_source=ig_embed&amp;utm_campaign=loading"
                    // width="30%"
                />
            </div>
        </div>
    )
}

export default Instagram_news