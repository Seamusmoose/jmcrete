import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.css";
import logoName from "../../public/Jmcrete-images/white_logo_dark_background.jpg";

export default function Navbar() {
  return (
    <nav className={styles.navBarContainer}>
      <Image
        className={styles.logoContainer}
        src={logoName}
        alt="Logo name"
        height="60px"
        width="200px"
      />

      <ul className={styles.linkFlex}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/#aboutMe">
            <a>About Us</a>
          </Link>
        </li>

        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
