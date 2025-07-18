import React from 'react';
import Card from '../Card/Card';
import styles from './Courses.module.css';
import cardsData from '../../data/card-data';

const Courses = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>ROLES EN PCT</h2>
            <div className={styles.cards}>
                {cardsData.map((card) => (
                    <Card key={card.id} data={card} />
                ))}
            </div>
        </div>
    );
};

export default Courses;
