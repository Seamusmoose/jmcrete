// import About from './about'
import InstagramFeed from '../components/InstagramFeed/InstagramFeed'
import MainLogo from '../components/MainLogo/MainLogo'
import ShortIntro from '../components/shortIntro/ShortIntro'
// import Instagram from "instagram-web-api"




export default function index({instagramPosts}) {


  return (
    <div>
  <MainLogo />
  <ShortIntro />

  <InstagramFeed />
  
  </div>
  )
}


