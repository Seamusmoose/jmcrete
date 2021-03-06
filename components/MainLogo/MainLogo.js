import styles from "./mainLogo.module.css";
import Image from "next/image";
import Logo from "../../public/Jmcrete-images/blackLogo.jpg";

export default function MainLogo() {
  return (
    <div className={styles.logoContainer}>
      <Image src={Logo} alt="Logo Picture" height={300} width={300} />
    </div>
  );
}
