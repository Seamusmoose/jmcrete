import Link from 'next/link'
import Image from 'next/image'
import styles from './NavBar.module.css'
import logoName from '../../public/Jmcrete-images/logoName.jpg'


export default function Navbar() {
    return (
        <nav className={styles.navBarContainer}> 
        <Image src={logoName} 
            alt="Logo name"
            width="200px"
            height="20px"

         />

        <ul className={styles.linkFlex}> 
        <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>

      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
        </ul>
        </nav>
    )
   
};
