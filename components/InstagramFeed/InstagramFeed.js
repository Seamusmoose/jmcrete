import styles from "./InstagramFeed.module.css";
import Link from "next/link";
import Image from "next/image";

export default function InstagramFeed(props) {
  console.log(props.iPosts.iPosts.data[0].media_url, "here are the NEW PROPS");
  return (
    <div>
      <h1>here are insta posts</h1>
      {/* <h1>{props.iPosts.iPosts.data[0].media_url}</h1> */}
      {/* <Image src={props.iPosts.iPosts.data[0].media_url} alt="InstaPhoto"/> */}

      <ul>
        {props.iPosts.iPosts.data.map((post) => (
          <div>
            <li key={post.id}>id: {post.id}</li>
            <li>{post.timestamp}</li>
            {/* <Image src={post.media_url} alt="InstaImage"/> */}
          </div>
        ))}
      </ul>
    </div>
  );
}
