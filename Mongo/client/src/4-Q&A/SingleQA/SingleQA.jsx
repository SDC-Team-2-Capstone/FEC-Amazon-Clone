import styles from './SingleQA.module.css';
import { useState } from 'react';

export default function SingleQA(props) {
  const [count, setCount] = useState(props.rating);

  function convertDate(raw) {
    let date = new Date(raw);
    let string = date.toLocaleDateString();
    return string;
  }

  return (
    <div className={styles['QA']}>
      <div className={styles['voting-section']}>
        <div onClick={() => setCount((prev) => prev + 1)} className={styles['up-arrow']}></div>
        <div className={styles['vote-count']}>{count}</div>
        <div className={styles['votes-word']}>votes</div>
        <div onClick={() => setCount((prev) => prev - 1)} className={styles['down-arrow']}></div>
      </div>
      <div className={styles['QA-section']}>
        <div className={styles['head']}>
          <div className={styles['declarative']}>Question:</div>
          <div className={styles['qtext']}>{props.question}</div>
        </div>
        <div className={styles['head']}>
          <div className={styles['declarative']}>Answer:</div>
          <div className={styles['atext']}>{props.answer}</div>
        </div>
        <div className={styles['head']}>
          <div className={styles['declarative']}></div>
          <div className={styles['info']}>Question answered on {convertDate(props.date_posted)}</div>
        </div>
      </div>
    </div>
  );
}
