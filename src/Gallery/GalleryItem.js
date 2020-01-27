import React from 'react';
import styles from './GalleryItem.module.css';

const GalleryItem = (props) => {
    return (
      <div className={styles.card} onClick={() => props.updateClick(props.photo.id) }>
        {props.photo.clicked}
        <h2 className={styles.head}>{props.photo.head}</h2> 
        <article className={styles.description}>{props.photo.description}</article>
      </div>
    );
}  

export default GalleryItem;
