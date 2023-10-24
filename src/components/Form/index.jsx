import { Box } from "@mui/material";
import React from "react";

const Form = ({ children }) => {
  return (
    <Box
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
