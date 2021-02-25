//import Head from "next/head";
import ChallengeBox from "../components/ChallengeBox";
import CompletedChallanges from "../components/CompletedChallenges";
import Countddown from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import {Profile} from '../components/Profile';
import Styles from"../styles/pages/home.module.css";
export default function Home() {
  return (
    <div className={Styles.container}>
      <ExperienceBar />
      <section>
        <div>
        <Profile/>
        <CompletedChallanges/>
        <Countddown/>
        </div>
        <div>
          <ChallengeBox/>
        </div>
      </section>
    </div>
  );
}
