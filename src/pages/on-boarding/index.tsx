import React from "react";
import Welcome from "./welcome";
import CreateWorkspace from "./create-workspace";
import WorkspacePlanning from "./workspace-planning";
import Congratulation from "./congratulation";
import BrandLogo from "../../assets/brand.jpg";
import { OnBoardingContainer } from "./styles";

const Onboarding = () => {
  return (
    <OnBoardingContainer>
      <img src={BrandLogo} alt="Brand Logo" />

      <Welcome />
    </OnBoardingContainer>
  );
};

export default Onboarding;
