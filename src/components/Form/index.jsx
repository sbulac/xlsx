import { Box } from "@mui/material";
import React, { useContext } from "react";
import { ApiContext } from "../Context";

const Form = ({ children }) => {
  const { handleVotarClick } = useContext(ApiContext)
  return (
    <Box
      onSubmit={(e) => handleVotarClick(e)}
      component="form"
      sx={{
        border: "2px dashed #005BA5",
        display: "flex",
        flexDirection: "column",
        gap: 3.4,
        width: "21pc",
        borderRadius: 2,
        justifyContent: "center",
        px: 1.5,
        py: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default Form;
