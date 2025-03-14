import styles from "./tagForm.module.scss"
import User from "../../entities/user";
import {useNavigate} from "react-router-dom";
import {FieldValues, useForm} from "react-hook-form";

function TagForm() {

    const navigate = useNavigate();

    const tags = [{
        id: 0,
        name: "Программирование"
    },{
        id: 1,
        name: "Садоводство"
    },{
        id: 2,
        name: "Футбол"
    },{
        id: 3,
        name: "Аниме"
    },{
        id: 4,
        name: "Сериалы"
    },{
        id: 5,
        name: "Охота"
    },{
        id: 6,
        name: "Рыбалка"
    },{
        id: 7,
        name: "Игры"
    },{
        id: 8,
        name: "Туризм"
    }]

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();


    const selectedTags = watch("tags", []);


    const onSubmit = (data: FieldValues) => {
        const selectedIds = data.tags || []; // Извлекаем ID выбранных чекбоксов
        if (selectedIds.length >= 2 && selectedIds.length <= 7) {
            console.log(selectedIds);
            navigate("/userForm");
        }
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form}>
                <div className={styles.list}>
                    {tags &&
                        tags.map((tag, index) => (
                            <div key={tag.id} className={styles.tag}>
                                <input
                                    type="checkbox"
                                    {...register("tags", { required: "Выберите от 2 до 7 вариантов" })}
                                    value={tag.id}
                                    className={styles.checkbox}
                                />
                                <p className={styles.name}>{tag.name}</p>
                            </div>
                        ))}
                </div>

                <div className={styles.footer}>
                    <p className={styles.text}>
                        Выберите от 2 до 7 своих любимых занятий. На основе этих увлечений
                        вы сможете найти единомышленников.
                    </p>

                    <button
                        className={styles.button}
                        type="submit"
                        disabled={selectedTags.length < 2 || selectedTags.length > 7}
                    >
                        Продолжить
                    </button>
                </div>
            </div>
        </form>
    );
}

export default TagForm;
