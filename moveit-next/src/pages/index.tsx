//import Head from "next/head";
import { GetServerSideProps } from "next";
import ChallengeBox from "../components/ChallengeBox";
import CompletedChallanges from "../components/CompletedChallenges";
import Countddown from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";
import Styles from "../styles/pages/home.module.css";
interface HomeProps{
  level:number;
  currentExperience:number;
  challengesCompleted:number;
}


export default function Home(props:HomeProps) {
  console.log(props);
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challangesCompleted={props.challengesCompleted}
    >
      <div className={Styles.container}>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallanges />
              <Countddown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // chamada api

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level:Number(level),
      currentExperience:Number(currentExperience),
      challengesCompleted:Number(challengesCompleted),
    },
  };
};
