import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import Styles from "../styles/components/ChallengeBox.module.css";
function ChallengeBox() {
  const { activeChallange,resetChallenge } = useContext(ChallengesContext);

  return (
    <div className={Styles.challengeBoxContainer}>
      {activeChallange ? (
        <div className={Styles.challengeActive}>
          <header>Ganhe {activeChallange.amount}xp</header>
          <main>
            <img src={`icons/${activeChallange.type}.svg`} />
            <strong>Novo Desafio</strong>
            <p>{activeChallange.description}</p>
          </main>
          <footer>
            <button type="button" className={Styles.challengeFailButton} onClick={resetChallenge}>
              Falhei
            </button>
            <button type="button" className={Styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={Styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="./icons/level-up.svg" alt="Level up" />
            <p>Avance de Level completando desafios</p>
          </p>
        </div>
      )}
    </div>
  );
}

export default ChallengeBox;
