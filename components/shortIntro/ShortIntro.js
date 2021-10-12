import styles from "./shortIntro.module.css";
import Image from "next/image";
import profilePic from "../../public/121969473_186164109649902_2712078757173285065_n.jpg";

export default function shortIntro() {
  return (
    <div>
      <div className={styles.spacer}> </div>
      <div id="aboutUs" className={styles.aboutUs}>

        
          <h1 className={styles.contentHead}>This is who we are</h1>
          <div className={styles.content1}>
            Welcome to JMCrete Solutions. We are a concreting business located
            in Indooroopilly servicing the greater Brisbane area. We cover all
            areas from North Brisbane to Gold Coast, from East Brisbane to
            Ipswich and all inbetween. We specialise in all aspects of
            concreting and can help you with whatever job you need. Including
            slabs, patios, footpaths, driveways, shed slabs, steelfixing,
            formwork, commercial slabs and more. We provide professional quotes
            and we are sure to leave you satisfied with the job. Feel free to
            contact us anytime for a quote and we look forward to hearing from
            you
          </div>

          <Image
            src={profilePic}
            className={styles.content2}
            height={500}
            width={200}
          />
        
      </div>
    </div>
  );
}
