import styles from './shortIntro.module.css'

export default function shortIntro() {
    return (
        <div>
            <div className={styles.spacer}> </div>
            <div className={styles.introText}>

                <div className={styles.contentGrid}>
                    
                <h1 className={styles.contentHead}>This is who we are</h1>
                <div className={styles.content1}>Do esse labore occaecat eiusmod eiusmod tempor ullamco labore aliquip 
                    qui sunt qui fugiat. Tempor aute id cupidatat dolore non et sint non 
                    exercitation elit excepteur ad nisi. Anim et consequat qui eu Lorem 
                    voluptate pariatur.</div>

                    <div className={styles.content2}>content 2</div>
                    <div className={styles.content3}>content 3</div>
                    <div className={styles.content4}>content 4</div>
                    <div className={styles.content5}>content 5</div>
                </div>

          

            </div>
          
        </div>
    )       
};
