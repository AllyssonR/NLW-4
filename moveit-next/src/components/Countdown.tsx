import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import Styles from "../styles/components/Countddown.module.css";

export default function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

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
          <img src="./icons/check.svg" alt="desafio concluido" />
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
