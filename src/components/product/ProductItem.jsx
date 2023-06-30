import ProductPreview from "./ProductPreview"
import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom'

const ProductItem = (props) => {
    let path = '/products/' + props.id;
    return (
        <div>
            <div className="d">
                <NavLink to={path} key={props.id}> {<ProductPreview id={props.id} name={props.name} cost={props.cost} description={props.description} />} </NavLink>
            </div>
            <Outlet />
        </div>
    )
}

export default ProductItem;