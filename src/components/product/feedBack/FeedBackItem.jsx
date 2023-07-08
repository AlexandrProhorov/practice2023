import React, { useState, useRef } from "react";
import styles from "./FeedBack.module.scss"

const ReviewPage = () => {
    const [reviews, setreviews] = useState([]);
    const reviewInputRef = useRef(null);

    function handleAddreview() {
        const reviewText = reviewInputRef.current.value;
        if (reviewText !== "") {
            setreviews((prevreviews) => [...prevreviews, reviewText]);
            reviewInputRef.current.value = "";
        }
    }

    return (
        <div className={styles.ReviewBlock}>
            <textarea type="text" cols="100" rows="5" ref={reviewInputRef} />
            <button onClick={handleAddreview}>Добавить отзыв</button>
            <div>
                {reviews.map((review, index) => (
                    <div className={styles.ReviewItem} key={index}>{review}</div>
                ))}
            </div>
        </div>
    );
}

export default ReviewPage;
