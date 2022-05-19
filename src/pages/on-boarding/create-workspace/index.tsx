import React from "react";
import TextField from "../../../components/text-field";
import Button from "../../../components/button";
import { CreateWorkspaceContainer } from "./styles";
import { useNavigate } from "react-router-dom";
const CreateWorkspace = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/create-workspace");
  };
  return (
    <CreateWorkspaceContainer>
      <h2>Let's set up a home for all your work</h2>
      <p>You can always create another workspace any time.</p>

      <TextField label="Workspace Name" />
      <TextField
        label="Workspace URL"
        subLabel="(optional)"
        leadingTextFieldText="www.eden.com/"
        fullWidth
      />

      <Button label="Create Workspace" onClick={handleClick} />
    </CreateWorkspaceContainer>
  );
};

export default CreateWorkspace;
