import logoTextSrc from "../../../assets/logo-text.svg";
import logoSrc from "../../../assets/logo.svg";
import classes from "./first-block.module.scss";

export default function FirstBlock() {
    return (
        <div className={`${classes.content} column`}>
            <div className={`${classes.left_block} row`}>
                <p className={classes.title}>Тестовое задание</p>
                <p className={classes.description}>
                    Frontend-разработчик: Половников Александр Андреевич
                </p>
            </div>
            <div className={`${classes.right_block} row`}>
                <img src={logoSrc} alt="Логотип" />
                <img src={logoTextSrc} alt="Название логотипа" />
            </div>
        </div>
    );
}
