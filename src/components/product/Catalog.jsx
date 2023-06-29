import Product from "./Product"
import styles from "./../../static/css/catalog/Catalog.module.scss"
import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom'

const Catalog = (props) => {

    const ProductItem = (props) => {
        let path = '/products/' + props.id;
        return (
            <div>
                <div className="d">
                    <NavLink to={path}> {<Product id={props.id} name={props.name} cost={props.cost} description={props.description} />} </NavLink>
                </div>
                <Outlet />
            </div>
        )
    }

    let catalogElements = props.products.map(product => <ProductItem id={product.id} name={product.name} cost={product.cost} description={product.description} />)

    return (
        <div className={styles.Catalog}>
            {catalogElements}
        </div>
    )
}

export default Catalog;