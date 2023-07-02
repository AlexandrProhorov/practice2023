import ProductItem from "./ProductItem"
import styles from "./../../static/css/catalog/Catalog.module.scss"


const Catalog = (props) => {

    let catalogElements = props.products.map(product => <ProductItem id={product.id} name={product.name} cost={product.cost} description={product.description} image={product.image} />)

    return (
        <div className={styles.Catalog}>
            {catalogElements}
        </div>
    )
}

export default Catalog;