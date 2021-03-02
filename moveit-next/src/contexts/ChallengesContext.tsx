import { createContext, ReactNode, useEffect, useState } from "react";
import Challenges from "../../challenges.json";
import Cookies from "js-cookie";
import { LevelUpModal } from "../components/LevelUpModal";
export const ChallengesContext = createContext({} as ChallengesContextData);

interface ChallengesProvider {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}
interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallange: Challenge;
  experienceToNextLevel: number;
  LevelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
}
export function ChallengesProvider({ children, ...rest }) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.completedChallenges ?? 0
  );
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  function LevelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }
  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }
  const [activeChallange, setActiveChallenge] = useState(null);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("challengesCompleted", String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);
  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallange) {
      return;
    }

    const { amount } = activeChallange;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      LevelUp();
    }
    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }
  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * Challenges.length);
    const challenge = Challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
    new Audio("./notification.mp3").play();

    if (Notification.permission === "granted") {
      new Notification("Novo Desafio 🎉", {
        body: `Valendo ${challenge.amount}xp!`,
      });
    }
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
        experienceToNextLevel,
        completeChallenge,
        closeLevelUpModal,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}
