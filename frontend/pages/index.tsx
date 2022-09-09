import type { NextPage } from "next";

import {
  Navbar,
  About,
  Projects,
  Skills,
  Contact,
  Front
} from "../components/index";

const Home: NextPage = () => {
  return (
    <div className="contents">
      <Front />
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
