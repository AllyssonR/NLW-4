import { useState, useEffect } from "react";
import Styles from "../styles/components/Countddown.module.css";
let countdownTimeout: NodeJS.Timeout;
export default function Countddown() {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountdown() {
    setIsActive(true);
  }
  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  return (
    <div>
      <div className={Styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button disabled className={Styles.countdownButton}>
          Ciclo Encerrado
          <img src="./icons/check.svg" alt="desafio concluido"/>
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${Styles.countdownButton} ${Styles.countdownButtonActive} `}
              onClick={resetCountdown}
            >
              Abandonar o Ciclo
            </button>
          ) : (
            <button
              type="button"
              className={Styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um Ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
