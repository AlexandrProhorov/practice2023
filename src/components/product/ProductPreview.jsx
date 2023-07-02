import styles from "./../../static/css/catalog/Catalog.module.scss"

const ProductPreview = (props) => {
    return (
        <div className={styles.Product_Wrapper}>
                <img src={props.image} alt="bread" />
                <h2>{props.name}</h2>
                <p>{props.cost} руб.</p>
        </div>
    )
}

export default ProductPreview;