
import styles from "./tagList.module.scss"

type TagListType = {
    tags: string[];
}

function TagList({tags}: TagListType) {

    return (
        <div className={styles.container}>
            {tags.map((tag) => (
                <div className={styles.tag}>#{tag}</div>
            ))}
        </div>
    );
}

export default TagList;