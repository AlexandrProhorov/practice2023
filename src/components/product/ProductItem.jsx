import ProductPreview from "./ProductPreview"
import styles from "./../../static/css/catalog/Catalog.module.scss"
import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom'


const ProductItem = (props) => {
    let productId = props.id;
    let path = '/products/' + productId;

    return (
        <div>
            <div className={styles.Product_Container}>
                <NavLink to={path} key={props.id}> {<ProductPreview id={props.id} name={props.name} cost={props.cost} description={props.description} image={props.image} />} </NavLink>
            </div>
            <Outlet />
        </div>
    )
}

export default ProductItem;