import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import Styles from '../styles/components/CompletedChallenges.module.css';

export default function CompletedChallanges(){
  const {challengesCompleted} = useContext(ChallengesContext);
  return(
    <div className={Styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>

  );
}


