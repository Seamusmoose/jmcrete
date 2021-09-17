// import About from './about'
import InstagramFeed from '../components/InstagramFeed/InstagramFeed'
import MainLogo from '../components/MainLogo/MainLogo'
import ShortIntro from '../components/shortIntro/ShortIntro'
import Instagram from "instagram-web-api"




export default function index({instagramPosts}) {


  return (
    <div>
  <MainLogo />
  <ShortIntro />

  <InstagramFeed instagramPosts={instagramPosts} />
  
  </div>
  )
}


export async function getStaticProps(context) {
  const client = new Instagram({
    username: process.env.IG_USERNAME,
    password: process.env.IG_PASSWORD,
  })

  let posts = []
  try {
    await client.login()
    // request photos for a specific instagram user
    const instagram = await client.getPhotosByUsername({
      username: process.env.IG_USERNAME,
    })

    if (instagram["user"]["edge_owner_to_timeline_media"]["count"] > 0) {
      // if we receive timeline data back
      //  update the posts to be equal
      // to the edges that were returned from the instagram API response
      posts = instagram["user"]["edge_owner_to_timeline_media"]["edges"]
    }
    console.log(posts, "HERE ARE THE POSTS")
  } catch (err) {
    console.log(
      "Something went wrong while fetching content from Instagram",
      err
    )
  }
  
  return {
    
    props: {
      instagramPosts: posts, // returns either [] or the edges returned from the Instagram API based on the response from the `getPhotosByUsername` API call
    },
  }
}