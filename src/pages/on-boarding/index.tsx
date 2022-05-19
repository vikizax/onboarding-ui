import React, { useEffect } from "react";
import Welcome from "./welcome";
import CreateWorkspace from "./create-workspace";
import WorkspacePlanning from "./workspace-planning";
import Congratulation from "./congratulation";
import { useLocation } from "react-router-dom";
import BrandLogo from "../../assets/brand.jpg";
import { OnBoardingContainer } from "./styles";

const Onboarding = () => {
  const { pathname } = useLocation();

  const onboardingStepsUI = () => {
    switch (pathname) {
      case "/welcome":
        return <Welcome />;
      case "/create-workspace":
        return <CreateWorkspace />;
      case "/workspace-planning":
        return <WorkspacePlanning />;
      case "/congratulation":
        return <Congratulation />;
      default:
        return <Welcome />;
    }
  };

  return (
    <OnBoardingContainer>
      <img src={BrandLogo} alt="brand" />
      {onboardingStepsUI()}
    </OnBoardingContainer>
  );
};

export default Onboarding;
