import Styles from'../styles/components/ChallengeBox.module.css';
function ChallengeBox(){
  const hasActiveChallenge = true;
  return(
    <div className={Styles.challengeBoxContainer}>
     {hasActiveChallenge ?(
       <div className={Styles.challengeActive}>
         <header>Ganhe 400xp</header>
         <main>
           <img src="icons/body.svg" alt=""/>
           <strong>Novo Desafio</strong>
           <p>Levante e faça uma caminhada de 3 minutos</p>
         </main>
         <footer>
           <button type="button"
           className={Styles.challengeFailButton}
           >Falhei
           </button>
           <button type="button" className={Styles.challengeSucceededButton}>Completei</button>
         </footer>
       </div>
     ):(
     <div className={Styles.challengeNotActive}>
      <strong>Finalize um ciclo para receber um desafio</strong>
      <p>
        <img src="./icons/level-up.svg" alt="Level up"/>
        <p>Avance de Level completando desafios</p>
      </p>
    </div>)}
    </div>
  );
}


export default ChallengeBox;
