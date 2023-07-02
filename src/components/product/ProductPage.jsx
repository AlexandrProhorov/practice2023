import { useNavigate } from "react-router-dom";
import styles from "./../../static/css/catalog/Product.module.scss"

const ProductPage = (props) => {
    const navigate = useNavigate();
    return (
        <div className={styles.Product_Page_Wrapper}>
            <button className={styles.Back_Bttn} onClick={() => navigate(-1)}>&#129120;</button>
            <div className={styles.Info_Container}>
                <h2>{props.name}</h2>
                <div className={styles.Middle_Container}>
                    <img src={props.image} alt="" />
                    <div className={styles.Cost_Container}>
                        <h2>{props.cost} ₽</h2>
                        <button className={styles.Add_To_Card}>Добавить в корзину</button>
                    </div>
                </div>
                <div className={styles.Description_Container}>
                    <h2>О товаре:</h2>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;