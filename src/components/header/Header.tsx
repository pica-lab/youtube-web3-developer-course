import { title } from "process";
import Image from "next/image";
import OctopusIcon from "@public/Octopus.svg";
import styles from './Header.module.css';

type HeaderProps = {
    title: string;
    subtitle: string;
}

export function Header(props: HeaderProps) {
    return (
        <header className={styles.headerContainer}>
          <Image 
            src={OctopusIcon} 
            alt="OctopusX" 
            className={styles.logo}
          />
          <h1 className={styles.title}>
            {props.title}
          </h1>
          <p className={styles.subtitle}>
            {props.subtitle}
          </p>
        </header>
      )
}
