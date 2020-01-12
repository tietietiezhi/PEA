import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutPEA from "./pages/aboutPEA/AboutPEA";
import AcademicStandard from "./pages/academicStandard/AcademicStandard";
import Home from "./pages/home/Home";
import CampusInfo from "./pages/campusInfo/CampusInfo";
import CourseCustomized from "./pages/courseCustomized/CourseCustomized";
import DormInfo from "./pages/dormInfo/DormInfo";
import ImportantTimeline from "./pages/importantTimeline/ImportantTimeline";
import JoinUs from "./pages/joinUs/JoinUs";
import Payment from "./pages/payment/Payment";
import ProfessorTeam from "./pages/professorTeam/ProfessorTeam";
import Refund from "./pages/refund/Refund";
import Registration from "./pages/registration/Registration";
import RegistrationVerify from "./pages/registrationVerify/RegistrationVerify";
import Transcript from "./pages/transcript/Transcript";
import TransferCreditInfo from "./pages/transferCreditInfo/TransferCreditInfo";
import Tuition from "./pages/tuition/Tuition";
import CourseList from "./pages/courseList/CourseList";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/aboutPEA" component={AboutPEA} />
      <Route path="/academicStandard" component={AcademicStandard} />
      <Route path="/campusInfo" component={CampusInfo} />
      <Route path="/courseCustomized" component={CourseCustomized} />
      <Route path="/courseList" component={CourseList} />
      <Route path="/dormInfo" component={DormInfo} />
      <Route path="/importantTimeline" component={ImportantTimeline} />
      <Route path="/joinUs" component={JoinUs} />
      <Route path="/payment" component={Payment} />
      <Route path="/professorTeam" component={ProfessorTeam} />
      <Route path="/refund" component={Refund} />
      <Route path="/registration" component={Registration} />
      <Route path="/registrationVerify" component={RegistrationVerify} />
      <Route path="/transcript" component={Transcript} />
      <Route path="/transferCreditInfo" component={TransferCreditInfo} />
      <Route path="/tuition" component={Tuition} />
    </Switch>
  </main>
);

export default Main;
