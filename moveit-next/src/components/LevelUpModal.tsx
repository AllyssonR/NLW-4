import Styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal(){
  return(
   <div className={Styles.container}>
      <div className={Styles.overlay}>
        <header>2</header>
        <strong>Parabens</strong>
        <p>Você alcançou um novo level.</p>
        <button type="button" >
          <img src="./img/close.svg" alt="fechar modal"/>
        </button>
      </div>
   </div>

  );
}
