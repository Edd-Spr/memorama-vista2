import React from "react";
import styles from "@/styles/components/host/CardForm.module.css";

const CardForm = ({ index, card, onCardChange, onDeleteCard }) => {
  const handleQuestionChange = (e) => {
    onCardChange(index, "question", e.target.value);
  };

  const handleAnswerChange = (e) => {
    onCardChange(index, "answer", e.target.value);
  };

  return (
    <div className={styles.cardContainer}>
      <label className={styles.labelInput}>
        <input
          type="text"
          value={card.question}
          onChange={(e) => onCardChange(index, "question", e.target.value)}
          className={styles.input_text}
          placeholder="Question"
        />
      </label>
      <label className={styles.labelInput}>
        <input
          type="text"
          value={card.answer}
          onChange={(e) => onCardChange(index, "answer", e.target.value)}
          className={styles.input_text}
          placeholder="Answer"
        />
      </label>
      <button
        className={styles.deleteButton}
        onClick={() => onDeleteCard(index)}
      >
        Delete Card
      </button>
    </div>
  );
};

export default CardForm;
