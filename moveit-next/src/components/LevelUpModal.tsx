import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import Styles from "../styles/components/LevelUpModal.module.css";
export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  return (
    <div className={Styles.overlay}>
      <div className={Styles.container}>
        <header>{level}</header>
        <strong>Parabens</strong>
        <p>Você alcançou um novo level.</p>
        <button type="button">
          <img
            src="./icons/close.svg"
            alt="fechar modal"
            onClick={closeLevelUpModal}
          />
        </button>
      </div>
    </div>
  );
}
