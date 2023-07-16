import { useNavigate } from "react-router-dom";
import styles from "./Product.module.scss"
import ReviewPage from "../feedBack/FeedBackItem";
import ItemChart from "./Chart.tsx";
import Slider from "./../../carousel/Slider"

const ProductPage = (props) => {
    const navigate = useNavigate();
    return (
        <div className={styles.Product_Page_Wrapper}>
            <button className={styles.Back_Bttn} onClick={() => navigate(-1)}>&#129120;</button>
            <div className={styles.Info_Container}>
                <h2>{props.name}</h2>
                <div className={styles.Middle_Container}>
                <Slider image ={props.image} image2 = {props.image2} />
                    <div>
                        <div className={styles.Description_Container}>
                            <h2>О товаре:</h2>
                            <p>{props.description}</p>
                        </div>
                        <div className={styles.Cost_Container}>
                            <h2>{props.cost} ₽</h2>
                            <button className={styles.Add_To_Card}>Добавить в корзину</button>
                        </div>
                        <div className="Chart">
                            <ItemChart minCost={props.minCost} maxCost={props.maxCost} />
                        </div>
                    </div>
                </div>
                <div className={styles.About}>
                    <h2>Пищевая ценность:</h2>
                    {props.about}
                </div>

            </div>
            Оставьте ваш отзыв:
            <ReviewPage />
        </div>
    )
}

export default ProductPage;