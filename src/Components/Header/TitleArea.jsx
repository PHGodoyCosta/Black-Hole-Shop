import styles from './TitleArea.module.css'


function TitleArea(props) {
    return (
        <div className={styles.titleArea}>
            <h1 className={styles.h1}>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    )
}

export default TitleArea