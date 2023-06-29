// import image from './../../static/img/загруженное.png'
import styles from "./../../static/css/catalog/Catalog.module.scss"

const Product = (props) => {

    return (
        <div className={styles.Product_Wrapper}>
            <h2>{props.name}</h2>
            <div className={styles.Content_Container}>
                {/* <img src={image} alt="d" /> */}
                <div className="Info_Container">
                    Description: {props.description}
                </div>
                <div className='Cost_Container'>
                    Cost: {props.cost}
                </div>
            </div>
        </div>
    )
}

export default Product;