// import image1 from "./../../static/img/h1.jpg"
// import image2 from "./../../static/img/h2.jpg"
import styles from "./Carousel.module.scss"
import { Carousel } from "react-bootstrap"

const CarouselBox = () => {
    return(
        <Carousel className={styles.CarouselBox}>
            <div className={styles.item1}>item1</div>
            <div className={styles.item2}>item1</div>
            <div className={styles.item3}>item1</div>
        </Carousel>
    )
}

export default CarouselBox;