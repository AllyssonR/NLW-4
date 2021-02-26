import { createContext, ReactNode, useState } from "react";
import Challenges from "../../challenges.json";
export const ChallengesContext = createContext({} as ChallengesContextData);

interface ChallengesProvider {
  children: ReactNode;
}
interface Challenge{
  type:'body'|'eye';
  description:string;
  amount:number;

}
interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallange:Challenge;
  experienceToNextLevel:number;
  LevelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge:()=>void;
}
export function ChallengesProvider({ children }) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  function LevelUp() {
    setLevel(level + 1);
  }
  const[activeChallange,setActiveChallenge] = useState(null);
  const experienceToNextLevel = Math.pow((level + 1)*4,2)
  function resetChallenge(){
    setActiveChallenge(null);
  }
  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * Challenges.length);
    const challenge = Challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  }
  return (
    <ChallengesContext.Provider
      value={{
        level,
        LevelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallange,
        resetChallenge,
        experienceToNextLevel
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
