import React, { useState } from "react";
import styles from "./Carousel.module.scss";

const Slider = ({ image, image2 }) => {
    const [currentImage, setCurrentImage] = useState(image);

    const switchImage = () => {
        setCurrentImage(currentImage === image ? image2 : image);
    };

    return (
        <div className={styles.Slider}>
            <button
                className={styles.SwitchLeft}
                onClick={switchImage}
            >🡠</button>
            <img src={currentImage} alt="Slide" />

            <button
                className={styles.SwitchRight}
                onClick={switchImage}
            >🡢</button>
        </div>
    );
};

export default Slider;
