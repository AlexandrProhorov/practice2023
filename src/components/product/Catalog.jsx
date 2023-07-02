import ProductItem from "./ProductItem"
import styles from "./../../static/css/catalog/Catalog.module.scss"
import News from "./News"


const Catalog = (props) => {
    let catalogElements = props.products.map(product => <ProductItem id={product.id} name={product.name} cost={product.cost} description={product.description} image={product.image} />)

    return (
        <div className={styles.Catalog_Wrapper}>
            <div className={styles.AdWrapper}>
                <h2>Скидка 50% после 18 часов</h2>
                <p>Получите 50% скидку на всю продукцию Вкусного хлебушка после 18 часов</p>
            </div>
            <News />
            <div className={styles.Catalog}>
                {catalogElements}
            </div>
        </div>

    )
}

export default Catalog;