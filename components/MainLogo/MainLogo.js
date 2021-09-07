import styles from './mainLogo.module.css'
import Image from 'next/image'
import Logo from '../../public/Jmcrete-images/dark_logo_transparent_background.png'

export default function MainLogo() {
    return (
        <div className={styles.logoContainer}>
        <Image src={Logo} alt="Logo Picture" 
        // layout="responsive"
        height={300}
        width={300}
        
        
        />
        </div>

    )
};
  