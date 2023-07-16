import styles from "./Carousel.module.scss";
import { Carousel } from "react-bootstrap";

const CarouselBox = (props) => {
    return (
        <div className={styles.CarouselBox}>
            <Carousel>
                <Carousel.Item>
                    <img className={styles.item1} src={props.image} alt="s" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className={styles.item1} src={props.image2} alt="s" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselBox;
