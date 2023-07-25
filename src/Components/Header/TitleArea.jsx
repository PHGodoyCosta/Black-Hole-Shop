import styles from './TitleArea.module.css'


function TitleArea(props) {
    return (
        <div className={styles.titleArea}>
            {props.title && (
                <h1 className={styles.h1}>{props.title}</h1>
            )}
            {props.subTitle && (
                <h2>{props.subTitle}</h2>
            )}
        </div>
    )
}

export default TitleArea