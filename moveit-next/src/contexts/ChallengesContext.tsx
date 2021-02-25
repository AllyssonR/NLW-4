import { useContext, useState } from "react";

export const ChallengeContext = useContext({});



export function ChallengesProvider() {
  const [level, setLevel] = useState(1);
  function LevelUp(){
    setLevel(level+1);
    }
  return <ChallengesContext.Provider value={{level,setLevel}}>

  </ChallengesContext.Provider>;
}
