import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import Styles from "../styles/components/ChallengeBox.module.css";
export  default function ChallengeBox() {
  const { activeChallange, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }
  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

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
            <button
              type="button"
              className={Styles.challengeFailButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={Styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
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


