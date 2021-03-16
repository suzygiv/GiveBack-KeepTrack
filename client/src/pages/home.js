import React from "react";
import HomeSection from "../components/HomeSection";
import HomeNav from "../components/HomeNav";
import GettingStarted from "../components/GettingStarted";
import Mission from "../components/Mission";
import MeetTeam from "../components/MeetTeam";
import DeveloperNotes from "../components/DeveloperNotes";
import Acknowledgements from "../components/Acknowledgements";

const Home = () => {
  return (
    <div>
      <HomeNav />
      <HomeSection />
      <GettingStarted />
      <Mission />
      <MeetTeam />
      <DeveloperNotes />
      <Acknowledgements />
    </div>
  );
};
export default Home;
