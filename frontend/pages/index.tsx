import type { NextPage } from "next";

// import styles from "../styles/Home.module.css";
// import styles from "../styles/test.scss";
import { Navbar, About, Projects, Skills, Contact } from "../components/index";

const Home: NextPage = () => {
  return (
    <div className="">
      <h1>Simon-Olivier Desautels</h1>
      <Navbar />
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
};

export default Home;
