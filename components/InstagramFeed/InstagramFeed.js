import styles from "./InstagramFeed.module.css";
import Link from "next/link";
import Image from "next/image";

export default function InstagramFeed({ iPosts }) {
  //console.log(iPosts, "here are the iposts");

  return (
    <div>
      <h1>here are insta posts</h1>
      <ul>
        {iPosts.data.map((post) => (
          <div key={post.id}>
            <li>{post.timestamp}</li>
            <img
              src={post.media_url}
              alt="InstaImage"
              height="300px"
              width="305px"
            />
          </div>
        ))}
      </ul>
    </div>
  );
}
