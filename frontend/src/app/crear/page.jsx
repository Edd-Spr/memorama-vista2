import GameForm from "@/components/host/GameForm";
import styles from "@/styles/pages/create.module.css";

const Create = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create a New Game</h1>
      <GameForm />
    </div>
  );
};

export default Create;
