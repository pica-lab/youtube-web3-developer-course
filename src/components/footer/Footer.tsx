import Link from "next/link";
import styles from './footer.module.css';  // 导入模块化CSS

export const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerLinks}>
                <Link href="https://octopus.com" passHref>
                    <a className={styles.footerLink}>Octopus Deploy</a>
                </Link>
                <Link href="https://docs.octopus.network" passHref>
                    <a className={styles.footerLink}>Documentation</a>
                </Link>
                <Link href="https://blog.octopus.network" passHref>
                    <a className={styles.footerLink}>Blog</a>
                </Link>
                <Link href="https://community.octopus.network" passHref>
                    <a className={styles.footerLink}>Community</a>
                </Link>
            </div>
            <div className={styles.footerBottom}>
                <Link href="/" passHref>
                    <a className={`${styles.footerLink} ${styles.footerHome}`}>Back to Home</a>
                </Link>
                <div className={styles.footerCopyright}>
                    &copy; {new Date().getFullYear()} Octopus X. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
