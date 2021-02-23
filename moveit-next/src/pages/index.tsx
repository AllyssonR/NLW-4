//import Head from "next/head";
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
        </div>
        <div>

        </div>
      </section>
    </div>
  );
}