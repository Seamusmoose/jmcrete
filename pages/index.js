import InstagramFeed from "../components/InstagramFeed/InstagramFeed";
import MainLogo from "../components/MainLogo/MainLogo";
import ShortIntro from "../components/shortIntro/ShortIntro";

export default function index(iPosts) {
  return (
    <div>
      <MainLogo />
      <ShortIntro />
      <InstagramFeed iPosts={iPosts} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  try {
    const res = await fetch(
      `https://graph.instagram.com/${process.env.CLIENT_ID}/media?access_token=${process.env.ACCESS_TOKEN}&fields=id,timestamp,media_url,media_type`
    );
    if (res.ok) {
      const data = await res.json();
      //console.log(data, "HERE IS THE DATA");

      return { props: { iPosts: data } };
    } else {
      throw new Error(res.status + " " + res.statusText);
    }
  } catch (err) {
    console.error(err);
    return { props: {} };
  }
};
