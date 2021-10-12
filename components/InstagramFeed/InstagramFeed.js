import styles from "./InstagramFeed.module.css";
import Link from "next/link";
import Image from "next/image";

export default function InstagramFeed({ iPosts }) {
  //console.log(iPosts.data.media_type, "here are the iposts");

  return (
    <div>
      <ul className={styles.wrapper}>
        {iPosts.data.map((post) => (
          <div key={post.id}>
            <img
              src={post.media_url}
              alt="See Instagram for video"
              height="300px"
              width="350px"
            />
            {/* <video
                    width='100%'
                    height='auto' 
                    src={post.media_url} 
                    type="video/mp4" 
                    controls playsinline>
                </video> */}
          </div>
        ))}
      </ul>
    </div>
  );
}
