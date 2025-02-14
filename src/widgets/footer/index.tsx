import styles from "./footer.module.scss";
function Footer() {

    return (
        <>
            <nav className={styles.container}>
                <div className={styles.nav}>
                    <div className={styles.title}>
                        <p className={styles.titleT}>T</p>
                        <p className={styles.titleIntererst}>Interest</p>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Footer;